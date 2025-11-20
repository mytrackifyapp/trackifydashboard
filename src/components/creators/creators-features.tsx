import React from 'react'
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { CreditCard, Download, Shield, Zap, DollarSign, BarChart3 } from "lucide-react";
import Image from "next/image";

const features = [
    {
        title: "Direct Payments",
        desc: "Receive payments directly to your account. No middlemen, no delays. Get paid instantly when customers purchase your digital products.",
        icon: DollarSign,
    },
    {
        title: "Secure Transactions",
        desc: "Bank-level security ensures all transactions are protected. Your customers' data and payments are safe with end-to-end encryption.",
        icon: Shield,
    },
    {
        title: "Instant Delivery",
        desc: "Automatically deliver digital products to customers immediately after purchase. Set it once and forget it.",
        icon: Zap,
    },
    {
        title: "Multiple Payment Methods",
        desc: "Accept payments via credit cards, bank transfers, crypto, and more. Give your customers flexibility in how they pay.",
        icon: CreditCard,
    },
    {
        title: "Download Management",
        desc: "Control access to your products with download limits, expiration dates, and secure links. Protect your content.",
        icon: Download,
    },
    {
        title: "Sales Analytics",
        desc: "Track your sales performance, revenue, and customer insights. Know what's selling and optimize your offerings.",
        icon: BarChart3,
    },
];

const CreatorsFeatures = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <h2 id="features" className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight scroll-mt-20">
                            Everything you need to <br /> sell digital products
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center max-w-md mt-2">
                            Powerful tools designed to help creators monetize their expertise and get paid directly.
                        </p>
                    </div>
                </Container>

                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10">
                        {features.map((feature, index) => (
                            <Feature
                                key={index}
                                title={feature.title}
                                desc={feature.desc}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

const Feature = ({
    title,
    desc,
    icon: Icon
}: {
    title: string;
    desc: string;
    icon: React.ElementType;
}) => {
    return (
        <div className="flex flex-col p-4 lg:p-6 border border-border/60 rounded-lg lg:rounded-xl hover:border-primary transition-all duration-300 ease-out">
            <Icon className="size-8 lg:size-10 text-primary" />
            <h3 className="text-lg font-semibold mt-4">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
                {desc}
            </p>
        </div>
    )
};

export default CreatorsFeatures

