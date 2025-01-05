export const plans = [
  {
    id: "basic",
    title: "Basic Plan",
    setupPrice: "$200",
    monthlyFee: "$30/month",
    priceId: "prod_RWkUkGYBHdBufC", // Basic plan Stripe product ID
    features: [
      "One-page website",
      "Custom domain setup",
      "Basic SEO",
    ],
  },
  {
    id: "standard",
    title: "Standard Plan",
    setupPrice: "$300",
    monthlyFee: "$50/month",
    priceId: "prod_RWr0XP2UHk6qIL", // Standard plan Stripe product ID
    features: [
      "Multi-page website (up to 3 pages)",
      "Custom domain setup",
      "SEO optimization",
      "Contact form integration",
    ],
  },
  {
    id: "premium",
    title: "Premium Plan",
    setupPrice: "$500",
    monthlyFee: "$75/month",
    priceId: "prod_RWr1LbluWTSdUd", // Premium plan Stripe product ID
    features: [
      "Multi-page website (up to 5 pages)",
      "Custom domain setup",
      "Advanced SEO",
      "Blog integration",
      "Ongoing maintenance",
    ],
  },
];