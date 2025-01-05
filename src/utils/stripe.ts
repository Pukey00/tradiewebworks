import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with the public key
const stripePromise = loadStripe("pk_test_51QdgrPFdZNXzEX7kRFfhkVxUbh6Ki7tNeXKOd6h097SuAouwYUZukGZOCt4lEnOYK1rnFMT1Rz5SYVoqT2eBhI1u00pqynt5ta");

export const createCheckoutSession = async (priceId: string) => {
  try {
    console.log('Creating checkout session for price:', priceId);
    
    const response = await fetch('https://us-central1-tradie-web-works.cloudfunctions.net/createCheckoutSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Checkout session creation failed:', errorData);
      throw new Error('Failed to create checkout session');
    }

    const { id: sessionId } = await response.json();
    console.log('Checkout session created:', sessionId);

    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error('Stripe redirect error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};