"use client";

import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon, ArrowRightIcon, Sparkles, Building2, GraduationCap, TrendingUp, Users } from "lucide-react";
import { BlurText } from "../ui/blur-text";
import Link from "next/link";
import Icons from "../global/icons";
import { motion } from "framer-motion";
import Image from "next/image";

const creatorTypes = [
    { icon: TrendingUp, label: "Budget Creators" },
    { icon: GraduationCap, label: "Investment Educators" },
    { icon: Sparkles, label: "Savings Influencers" },
    { icon: Building2, label: "SME Coaches" },
    { icon: Users, label: "Business Coaches" },
];

const WhitelabelingHero = () => {
    return (
        <div className="relative z-0 w-full h-full">
            <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(124,226,176,0.4)_0%,rgba(211,249,216,0.2)_50%,rgba(5,5,5,0)_80%)]"></div>

            <Wrapper className="py-20">
                <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto z-40 relative">
                    <Container delay={0.0}>
                        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#7ce2b0] flex items-center justify-center relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#d3f9d8] flex items-center justify-center animate-ping">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#d3f9d8] flex items-center justify-center animate-ping"></div>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d3f9d8] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                </div>
                            </div>
                            <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#d3f9d8] via-[#a6f6c6] to-[#7ce2b0] bg-clip-text text-sm text-transparent">
                                White-Label Solution
                                <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                                    For Finance Creators
                                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                                </span>
                            </span>
                        </div>
                    </Container>

                    <Container delay={0.1}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Icons.stars className="size-6 text-[#7ce2b0]" />
                            <BlurText
                                word={"Brand Your Finance Platform"}
                                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-[#d3f9d8] via-[#a6f6c6] to-[#7ce2b0] bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] font-heading"
                            />
                        </div>
                    </Container>

                    <Container delay={0.2}>
                        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
                            Offer your audience a fully branded financial management platform. White-label Trackify with your logo, colors, and domain to build your own finance brand.
                        </p>
                    </Container>

                    <Container delay={0.3}>
                        <div className="flex items-center justify-center md:gap-x-6 mt-8">
                            <Button asChild size="lg">
                                <Link href="https://app.mytrackify.com/sign-up">
                                    Get Started
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="hidden md:flex">
                                <Link href="#pricing">
                                    View Pricing
                                </Link>
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.4}>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 w-full max-w-4xl">
                            {creatorTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border/60 bg-background/50 backdrop-blur-sm cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        borderColor: "rgba(124, 226, 176, 0.5)",
                                        backgroundColor: "rgba(211, 249, 216, 0.1)"
                                    }}
                                >
                                    <type.icon className="size-6 text-[#7ce2b0] flex-shrink-0" />
                                    <span className="text-xs text-muted-foreground text-center">
                                        {type.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </Container>

                    <motion.div
                                className="relative rounded-xl lg:rounded-2xl border border-[#7ce2b0]/30 overflow-hidden bg-gradient-to-br from-[#d3f9d8]/5 to-[#a6f6c6]/10 backdrop-blur-sm shadow-[0_0_30px_rgba(124,226,176,0.1)]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Image
                                    src="/images/screenshot-1.png"
                                    alt="White-label platform screenshot 1"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                    <Container delay={0.5}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
                            <div className="flex items-center gap-2 p-4 rounded-lg border border-[#7ce2b0]/30 bg-gradient-to-br from-[#d3f9d8]/10 to-[#a6f6c6]/5 backdrop-blur-sm">
                                <CheckCircle2Icon className="size-5 text-[#7ce2b0] flex-shrink-0" />
                                <span className="text-sm text-foreground/80">
                                    Custom Branding
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-4 rounded-lg border border-[#7ce2b0]/30 bg-gradient-to-br from-[#d3f9d8]/10 to-[#a6f6c6]/5 backdrop-blur-sm">
                                <CheckCircle2Icon className="size-5 text-[#7ce2b0] flex-shrink-0" />
                                <span className="text-sm text-foreground/80">
                                    Your Domain
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-4 rounded-lg border border-[#7ce2b0]/30 bg-gradient-to-br from-[#d3f9d8]/10 to-[#a6f6c6]/5 backdrop-blur-sm">
                                <CheckCircle2Icon className="size-5 text-[#7ce2b0] flex-shrink-0" />
                                <span className="text-sm text-foreground/80">
                                    100% Revenue Share
                                </span>
                            </div>
                        </div>
                    </Container>

                    <Container delay={0.6}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 w-full max-w-6xl mx-auto">
                            <motion.div
                                className="relative rounded-xl lg:rounded-2xl border border-[#7ce2b0]/30 overflow-hidden bg-gradient-to-br from-[#d3f9d8]/5 to-[#a6f6c6]/10 backdrop-blur-sm shadow-[0_0_30px_rgba(124,226,176,0.1)]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Image
                                    src="/images/screenshot-3.png"
                                    alt="White-label platform screenshot 1"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                            <motion.div
                                className="relative rounded-xl lg:rounded-2xl border border-[#7ce2b0]/30 overflow-hidden bg-gradient-to-br from-[#d3f9d8]/5 to-[#a6f6c6]/10 backdrop-blur-sm shadow-[0_0_30px_rgba(124,226,176,0.1)]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                <Image
                                    src="/images/screenshot-2.png"
                                    alt="White-label platform screenshot 2"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default WhitelabelingHero

