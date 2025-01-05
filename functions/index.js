const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Configure CORS middleware with specific options
app.use(cors({
  origin: function(origin, callback) {
    console.log('Incoming request from origin:', origin);
    
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) {
      console.log('Allowing request with no origin');
      return callback(null, true);
    }
    
    const allowedOrigins = [
      'http://localhost:5173',  // Local development
      'https://tradie-web-works.web.app', // Production domain
      'https://tradie-web-works.firebaseapp.com', // Alternative production domain
    ];
    
    // Allow all Lovable preview domains
    if (origin.endsWith('.lovableproject.com')) {
      console.log('Allowing Lovable preview domain:', origin);
      return callback(null, true);
    }
    
    // Check if the origin is in our allowed list
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('Allowing whitelisted origin:', origin);
      return callback(null, true);
    }
    
    console.log('Blocking request from non-allowed origin:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Health check endpoint - this is crucial for Cloud Run
app.get('/', (req, res) => {
  console.log('Health check request received');
  res.status(200).send('OK');
});

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

// Export the Express app as a Cloud Function
exports.createCheckoutSession = functions.https.onRequest(app);

// Start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} else {
  // In production, we don't need to call app.listen() as Firebase Functions handles this
  console.log('Running in production mode');
}