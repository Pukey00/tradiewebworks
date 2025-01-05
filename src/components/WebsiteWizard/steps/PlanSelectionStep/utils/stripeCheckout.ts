import { toast } from "@/hooks/use-toast";

export const STRIPE_URLS = {
  premium: 'https://buy.stripe.com/test_aEUdRb5qufBsfGo9AA',
  standard: 'https://buy.stripe.com/test_aEUbJ306ablc0Lu145',
  basic: 'https://buy.stripe.com/test_bIYbJ3bOS1KCgKseUW'
} as const;

export const handleStripeCheckout = (plan: keyof typeof STRIPE_URLS) => {
  console.log('Redirecting to Stripe checkout for plan:', plan);
  const checkoutUrl = STRIPE_URLS[plan];

  if (!checkoutUrl) {
    console.error('Invalid plan selected');
    return;
  }

  try {
    window.location.href = checkoutUrl;
  } catch (error) {
    console.error('Error redirecting to Stripe:', error);
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to redirect to payment page. Please try again.",
    });
  }
};