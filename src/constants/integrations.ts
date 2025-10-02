export type Integration = {
    name: string;
    description: string;
    icon: string;
    category: "social" | "api" | "crm" | "all";
};

export const INTEGRATION_CATEGORIES = [
    {
        label: "All Integrations",
        value: "all"
    },
    {
        label: "Social Integrations",
        value: "social"
    },
    {
        label: "API Integrations",
        value: "api"
    },
    {
        label: "CRM Integrations",
        value: "crm"
    }
] as const;

export const INTEGRATIONS: Integration[] = [
    {
        name: "Apple Pay",
        description: "Instantly add your Trackify virtual card to Apple Wallet for quick, secure mobile payments.",
        icon: "/icons/apple.svg",
        category: "api"
    },
    {
        name: "Google Pay",
        description: "Simplify payments on Android by integrating Trackify virtual cards with Google Pay.",
        icon: "/icons/google-pay.png",
        category: "api"
    },
    {
        name: "Auth0",
        description: "Secure authentication and card usage with advanced identity management via Auth0.",
        icon: "/icons/auth.png",
        category: "api"
    },
    {
        name: "MTN Mobile Money",
        description: "Add funds to Trackify virtual cards via MTN MoMo, making it easier for users across Africa to transact.",
        icon: "/icons/momo.png",
        category: "api"
    },
    {
        name: "mastercard",
        description: "Secure, flexible, and recognized everywhere Mastercard is accepted.",
        icon: "/icons/master.svg",
        category: "crm"
    },
    {
        name: "Visa",
        description: "Shop, subscribe, and pay across millions of merchants worldwide with Trackify Visa..",
        icon: "/icons/visa.svg",
        category: "api"
    },
    {
        name: "Netflix",
        description: "Pay for your Netflix subscription securely using Trackify virtual cards, without worrying about declined local cards.",
        icon: "/icons/netflix.png",
        category: "social"
    },
    {
        name: "Plaid",
        description: "Connect bank accounts securely with Plaid to fund and manage Trackify virtual cards.",
        icon: "/icons/plaid.webp",
        category: "api"
    },
    {
        name: "spotify",
        description: "Subscribe to Spotify Premium and enjoy unlimited music access worldwide, powered by Trackify cards.",
        icon: "/icons/spotify.png",
        category: "social"
    },
    {
        name: "Meta",
        description: "Run and manage ad campaigns on Facebook and Instagram by linking Trackify virtual cards",
        icon: "/icons/meta.svg",
        category: "social"
    },
    {
        name: "LinkedIn",
        description: "Upgrade to LinkedIn Premium or run recruitment/brand campaigns easily with Trackify cards",
        icon: "/icons/linkedin.svg",
        category: "social"
    },
    {
        name: "Snapchat",
        description: "Fund Snapchat Ads or subscription features with Trackify virtual cards to reach younger, engaged audiences.",
        icon: "/icons/snapchat.svg",
        category: "social"
    }
]; 