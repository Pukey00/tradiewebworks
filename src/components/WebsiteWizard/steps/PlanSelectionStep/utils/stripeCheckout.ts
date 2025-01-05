import { PlanId } from "../types";
import { STRIPE_URLS } from "../constants/stripeUrls";

export const handleStripeCheckout = (planId: PlanId) => {
  console.log('Redirecting to Stripe checkout for plan:', planId);
  const checkoutUrl = STRIPE_URLS[planId];
  
  if (!checkoutUrl) {
    console.error('Invalid plan ID:', planId);
    throw new Error('Invalid plan ID');
  }

  window.location.href = checkoutUrl;
};