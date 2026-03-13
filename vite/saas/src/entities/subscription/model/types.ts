export type PlanInterval = "month" | "year";

export type Plan = {
  id: string;
  name: string;
  price: number;
  interval: PlanInterval;
  features: string[];
  highlighted?: boolean;
};

export type Subscription = {
  id: string;
  planId: string;
  status: "active" | "trialing" | "past_due" | "canceled";
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
};
