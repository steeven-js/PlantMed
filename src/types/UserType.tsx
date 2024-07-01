export type UserType = {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  location?: string;
  phoneNumber?: string;
  otp?: string;
  phoneVerified?: boolean;
  emailVerified?: boolean;
  isPremium?: boolean;
  premiumExpiresAt?: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripe?: {
    id?: string;
    status?: string;
    current_period_start?: string;
    current_period_end?: string;
    cancel_at_period_end?: boolean;
    cancel_at?: string;
    canceled_at?: string;
    plan?: {
      id?: string;
      amount?: number;
      currency?: string;
      interval?: string;
      interval_count?: number;
    };
  };
};
