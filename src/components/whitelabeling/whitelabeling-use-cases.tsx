"use client";

import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { TrendingUp, GraduationCap, Sparkles, Building2, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
    {
        title: "Budget Creators",
        description: "Help your audience manage their finances with a branded budgeting platform. Offer personalized budget templates, spending trackers, and financial coaching tools under your brand.",
        icon: TrendingUp,
        features: [
            "Custom budget templates",
            "Spending analysis tools",
            "Goal tracking features",
            "Financial coaching resources",
        ],
        benefits: [
            "Monetize your budgeting expertise",
            "Build a community around your brand",
            "Offer premium budgeting courses",
        ],
    },
    {
        title: "Investment Educators",
        description: "Provide your students with a comprehensive investment tracking platform. White-label our tools to offer portfolio management, investment analysis, and educational resources.",
        icon: GraduationCap,
        features: [
            "Portfolio tracking",
            "Investment analytics",
            "Market insights",
            "Educational content integration",
        ],
        benefits: [
            "Enhance your investment courses",
            "Provide hands-on learning tools",
            "Create recurring revenue streams",
        ],
    },
    {
        title: "Savings Influencers",
        description: "Give your followers a branded platform to track savings goals, create emergency funds, and build wealth. Build your personal finance brand with our white-label solution.",
        icon: Sparkles,
        features: [
            "Savings goal tracking",
            "Emergency fund calculators",
            "Wealth building tools",
            "Community features",
        ],
        benefits: [
            "Engage your audience deeply",
            "Offer premium savings challenges",
            "Build a loyal community",
        ],
    },
    {
        title: "SME Business Coaches",
        description: "Offer small and medium enterprises a complete financial management solution. Help businesses track expenses, manage cash flow, and make data-driven financial decisions.",
        icon: Building2,
        features: [
            "Business expense tracking",
            "Cash flow management",
            "Financial reporting",
            "Multi-user access",
        ],
        benefits: [
            "Add value to your coaching services",
            "Attract business clients",
            "Scale your coaching business",
        ],
    },
    {
        title: "Business Coaches",
        description: "Provide your clients with enterprise-grade financial tools. Help businesses optimize their finances, track KPIs, and make strategic financial decisions with your branded platform.",
        icon: Users,
        features: [
            "Advanced financial analytics",
            "KPI tracking dashboards",
            "Team collaboration tools",
            "Custom reporting",
        ],
        benefits: [
            "Differentiate your coaching services",
            "Attract enterprise clients",
            "Increase client retention",
        ],
    },
    {
        title: "Financial Content Creators",
        description: "Monetize your financial content by offering your audience a complete financial management platform. Create a comprehensive ecosystem around your brand.",
        icon: DollarSign,
        features: [
            "Content integration",
            "Community engagement",
            "Premium subscriptions",
            "Analytics & insights",
        ],
        benefits: [
            "Diversify revenue streams",
            "Build a sustainable business",
            "Create lasting value for followers",
        ],
    },
];

const WhitelabelingUseCases = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
                            Perfect for Every <br /> Finance Creator
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center max-w-md mt-2">
                            Whether you're teaching budgeting, investments, or business finance, white-label Trackify to build your brand.
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col p-6 border border-[#7ce2b0]/30 rounded-xl hover:border-[#7ce2b0]/60 transition-all duration-300 ease-out bg-gradient-to-br from-[#d3f9d8]/5 to-[#a6f6c6]/5"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, borderColor: "rgba(124, 226, 176, 0.6)", boxShadow: "0_0_20px_rgba(124,226,176,0.1)" }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#d3f9d8]/20 to-[#a6f6c6]/20">
                                        <useCase.icon className="size-6 text-[#7ce2b0]" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {useCase.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {useCase.description}
                                </p>
                                <div className="flex flex-col gap-3 mt-auto">
                                    <div>
                                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                                            Features:
                                        </span>
                                        <ul className="flex flex-col gap-1.5">
                                            {useCase.features.map((feature, idx) => (
                                                <li key={idx} className="text-sm text-foreground/70 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7ce2b0]"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-border/50">
                                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                                            Benefits:
                                        </span>
                                        <ul className="flex flex-col gap-1.5">
                                            {useCase.benefits.map((benefit, idx) => (
                                                <li key={idx} className="text-sm text-[#7ce2b0] flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7ce2b0]"></span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

export default WhitelabelingUseCases

