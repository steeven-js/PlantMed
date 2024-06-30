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
};
