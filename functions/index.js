const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret);
const cors = require('cors')({ origin: true });

exports.createCheckoutSession = onRequest(async (req, res) => {
  // Wrap the function in cors middleware
  return cors(req, res, async () => {
    try {
      // Ensure the request is a POST request
      if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
      }

      // Extract priceId from the request body
      const { priceId } = req.body;

      if (!priceId) {
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
        success_url: 'https://tradiewebworks.com.au/success',
        cancel_url: 'https://tradiewebworks.com.au/cancel',
      });

      logger.info('Checkout session created:', session.id);

      // Send the session ID back to the client
      res.status(200).json({ id: session.id });
    } catch (error) {
      logger.error('Error creating checkout session:', error);
      res.status(500).json({ error: error.message });
    }
  });
});