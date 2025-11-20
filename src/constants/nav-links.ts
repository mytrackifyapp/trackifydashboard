
import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon,  DatabaseZap,  ScrollText } from "lucide-react";

export const NAV_LINKS = [
    // {
    //     title: "Features",
    //     href: "/features",
    //     menu: [
    //         {
    //             title: "Sell & Pitch ",
    //             tagline: "Get a Portfolio and track your bookings.",
    //             href: "/features/link-shortening",
    //             icon: Link2Icon,
    //         },
    //         {
    //             title: "SME ",
    //             tagline: "Accept crypto payments for your products in sec",
    //             href: "/features/password-protection",
    //             icon: LockIcon,
    //         },
    //         {
    //             title: "Trackify Web 3",
    //             tagline: "Gain insights into who is clicking your links.",
    //             href: "/features/analytics",
    //             icon: LineChartIcon,
    //         },
    //         {
    //             title: "Trackify AI",
    //             tagline: "Use QR codes to reach your audience.",
    //             href: "/features/qr-codes",
    //             icon: QrCodeIcon,
    //         },
    //     ],
    // },
    {
        title: "Virtual Cards",
        href: "/integrations",
    },
    {
        title: "Creators",
        href: "/creators",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/blog",
                icon: NewspaperIcon,
            },
            {
                title: "White Paper",
                tagline: "Get answers to your questions.",
                href: "/whitepaper",
                icon:  ScrollText,
            },
            {
                title: "Developer Api",
                tagline: "Get answers to your questions.",
                href: "/developer",
                icon:  DatabaseZap,
            },
        ]
    },
    {
        title: "Contact",
        href: "/contact",
    },
];