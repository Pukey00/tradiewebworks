import { loadStripe } from "@stripe/stripe-js";

export const createCheckoutSession = async (priceId: string) => {
  try {
    console.log('Creating checkout session for price:', priceId);
    const response = await fetch('/createCheckoutSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { id: sessionId } = await response.json();
    console.log('Checkout session created:', sessionId);

    // Redirect to Stripe Checkout
    const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY || '');
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};