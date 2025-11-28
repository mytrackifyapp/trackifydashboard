export type WhitelabelFeature = {
    text: string;
    included: boolean;
};

export type WhitelabelPlan = {
    name: string;
    badge?: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
        oneTime?: number;
    };
    blackFridayPrice?: {
        monthly: number;
        yearly: number;
        oneTime?: number;
    };
    originalPrice?: {
        monthly: number;
        yearly: number;
        oneTime?: number;
    };
    features: WhitelabelFeature[];
    buttonText: string;
    popular?: boolean;
    revenueShare?: string;
    customPricing?: boolean;
    oneTimePayment?: boolean;
};

export const WHITELABEL_PLANS: WhitelabelPlan[] = [
    {
        name: "Starter",
        badge: "Starter",
        description: "Perfect for individual creators and small audiences",
        price: {
            monthly: 50,
            yearly: 500,
        },
        blackFridayPrice: {
            monthly: 50,
            yearly: 500,
        },
        originalPrice: {
            monthly: 99,
            yearly: 950,
        },
        revenueShare: "100%",
        features: [
            { text: "Custom branding & logo", included: true },
            { text: "Custom domain (subdomain)", included: true },
            { text: "Basic white-label dashboard", included: true },
            { text: "Up to 500 active users", included: true },
            { text: "Email support", included: true },
            { text: "Basic analytics", included: true },
            { text: "Mobile app (white-label)", included: false },
            { text: "Custom color scheme", included: true },
            { text: "API access", included: false },
            { text: "Priority support", included: true },
            { text: "Advanced analytics", included: true },
            { text: "Custom integrations", included: true },
        ],
        buttonText: "Start with Starter",
    },
    {
        name: "Professional",
        badge: "Popular",
        description: "Best for growing creators and established educators",
        price: {
            monthly: 500,
            yearly: 5000,
            oneTime: 500,
        },
        blackFridayPrice: {
            monthly: 500,
            yearly: 5000,
            oneTime: 500,
        },
        originalPrice: {
            monthly: 5000,
            yearly: 50000,
            oneTime: 5000,
        },
        revenueShare: "100%",
        popular: true,
        oneTimePayment: true,
        features: [
            { text: "Custom branding & logo", included: true },
            { text: "Custom domain (full domain)", included: true },
            { text: "Advanced white-label dashboard", included: true },
            { text: "Up to 5,000 active users", included: true },
            { text: "Priority email support", included: true },
            { text: "Advanced analytics", included: true },
            { text: "Mobile app (white-label)", included: true },
            { text: "Custom color scheme & themes", included: true },
            { text: "API access", included: true },
            { text: "Priority support", included: true },
            { text: "Custom integrations", included: true },
            { text: "Dedicated account manager", included: true },
        ],
        buttonText: "Start with Professional",
    },
    {
        name: "Enterprise",
        badge: "Enterprise",
        description: "For large creators, agencies, and businesses with custom needs",
        price: {
            monthly: 0,
            yearly: 0,
        },
        revenueShare: "100%",
        customPricing: true,
        features: [
            { text: "Custom branding & logo", included: true },
            { text: "Custom domain (full domain)", included: true },
            { text: "Fully customizable dashboard", included: true },
            { text: "Unlimited active users", included: true },
            { text: "24/7 priority support", included: true },
            { text: "Enterprise analytics & reports", included: true },
            { text: "Mobile app (white-label)", included: true },
            { text: "Full design customization", included: true },
            { text: "Full API access", included: true },
            { text: "Dedicated account manager", included: true },
            { text: "Custom integrations & webhooks", included: true },
            { text: "SLA guarantee", included: true },
            { text: "Custom features & development", included: true },
        ],
        buttonText: "Contact Sales",
    }
];

export const WHITELABEL_MARQUEE_ITEMS = [
    "Your Brand, Your Platform",
    "Complete Customization",
    "Revenue Sharing",
    "Scalable Solutions",
    "Professional White-Label",
    "Build Your Finance Empire",
    "Monetize Your Expertise"
];

