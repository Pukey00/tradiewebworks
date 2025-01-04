import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY');

export const createSubscriptionCheckout = async (priceId: string, userId: string) => {
  try {
    console.log('Creating subscription checkout session...', { priceId, userId });
    
    // Call your Firebase Function endpoint (you'll need to create this)
    const response = await fetch('YOUR_FIREBASE_FUNCTION_URL/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        userId,
      }),
    });

    const { sessionId } = await response.json();
    console.log('Checkout session created:', sessionId);

    // Get Stripe instance
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) throw error;

  } catch (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }
};