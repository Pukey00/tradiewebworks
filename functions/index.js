const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Create a checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
  console.log('Received request to create checkout session');
  const { priceId } = req.body;

  if (!priceId) {
    console.error('No priceId provided');
    return res.status(400).json({ error: 'Price ID is required' });
  }

  try {
    console.log('Creating Stripe checkout session...');
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

    console.log('Checkout session created successfully:', session.id);
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// Export the Express app as a Cloud Function
exports.createCheckoutSession = functions.https.onRequest(app);

// Start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}