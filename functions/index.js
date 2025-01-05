const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = onRequest(async (req, res) => {
  // Log incoming request details
  logger.info('Received request:', {
    method: req.method,
    origin: req.headers.origin,
    body: req.body
  });

  try {
    // Ensure the request is a POST request
    if (req.method !== 'POST') {
      logger.warn('Method not allowed:', req.method);
      return res.status(405).send('Method Not Allowed');
    }

    // Extract priceId from the request body
    const { priceId } = req.body;

    if (!priceId) {
      logger.warn('Missing priceId in request');
      return res.status(400).send({ error: 'Missing priceId' });
    }

    logger.info('Creating checkout session for price:', priceId);

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    logger.info('Checkout session created successfully:', session.id);

    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Send the session ID back to the client
    res.status(200).json({ id: session.id });
  } catch (error) {
    logger.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
exports.healthCheck = onRequest((req, res) => {
  res.status(200).send('OK');
});