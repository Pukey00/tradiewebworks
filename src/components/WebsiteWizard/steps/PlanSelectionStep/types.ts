export type PlanId = "basic" | "standard" | "premium";

export interface Plan {
  id: PlanId;
  title: string;
  setupPrice: string;
  monthlyFee: string;
  features: string[];
}