const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret);
const cors = require('cors')({ 
  origin: [
    'https://ebcb6224-fa09-408c-ad12-72937f4b503e.lovableproject.com',
    'https://tradiewebworks.com.au'
  ]
});

exports.createCheckoutSession = onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
      }

      const { priceId, returnUrl } = req.body;

      if (!priceId) {
        return res.status(400).send({ error: 'Missing priceId' });
      }

      logger.info('Creating checkout session for price:', priceId);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: returnUrl || 'https://tradiewebworks.com.au/success',
        cancel_url: returnUrl || 'https://tradiewebworks.com.au/cancel',
      });

      logger.info('Checkout session created:', session.id);

      res.status(200).json({ id: session.id });
    } catch (error) {
      logger.error('Error creating checkout session:', error);
      res.status(500).json({ error: error.message });
    }
  });
});