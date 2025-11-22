"use client";

import React, { useEffect, useRef } from 'react'
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { MessageSquare, Zap, Lightbulb, BarChart3, Bot, TrendingUp, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Intelligent Chat",
        desc: "Chat with Finna naturally, just like talking to Siri. Ask questions about your finances, get instant answers, and receive personalized advice in real-time.",
        icon: MessageSquare,
    },
    {
        title: "Automated Tasks",
        desc: "Let Finna handle repetitive financial tasks automatically. From categorizing expenses to setting up budgets, Finna works in the background to save you time.",
        icon: Zap,
    },
    {
        title: "Smart Insights",
        desc: "Get AI-powered insights into your spending patterns, identify saving opportunities, and discover trends you might have missed. Finna analyzes your data continuously.",
        icon: Lightbulb,
    },
    {
        title: "Personalized Suggestions",
        desc: "Receive tailored recommendations based on your financial behavior. Finna learns your preferences and suggests actions to help you reach your goals faster.",
        icon: TrendingUp,
    },
    {
        title: "Financial Analytics",
        desc: "Access deep financial analytics powered by AI. Understand your cash flow, predict future expenses, and get comprehensive reports with actionable insights.",
        icon: BarChart3,
    },
    {
        title: "24/7 Availability",
        desc: "Finna is always available when you need it. Get instant answers to financial questions, day or night, without waiting for business hours.",
        icon: Clock,
    },
    {
        title: "Secure & Private",
        desc: "Your conversations with Finna are encrypted and private. All financial data is processed securely with bank-level protection, ensuring your information stays safe.",
        icon: Shield,
    },
    {
        title: "Proactive Assistance",
        desc: "Finna doesn't just respond—it proactively alerts you about unusual spending, upcoming bills, budget overruns, and opportunities to save money.",
        icon: Bot,
    },
];

const FinnaFeatures = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title with split text effect
            if (titleRef.current) {
                gsap.fromTo(titleRef.current,
                    { 
                        opacity: 0,
                        y: 50,
                        clipPath: "inset(0 0 100% 0)"
                    },
                    {
                        opacity: 1,
                        y: 0,
                        clipPath: "inset(0 0 0% 0)",
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate description
            if (descRef.current) {
                gsap.fromTo(descRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: descRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <h2 ref={titleRef} id="features" className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight scroll-mt-20">
                            Powerful AI features <br /> at your fingertips
                        </h2>
                        <p ref={descRef} className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center max-w-md mt-2">
                            Finna combines advanced AI with financial expertise to give you a personal CFO experience.
                        </p>
                    </div>
                </Container>

                <Container>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {features.map((feature, index) => (
                            <Feature
                                key={index}
                                title={feature.title}
                                desc={feature.desc}
                                icon={feature.icon}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </Container>
            </Wrapper>
        </div>
    )
};

const Feature = ({
    title,
    desc,
    icon: Icon,
    index
}: {
    title: string;
    desc: string;
    icon: React.ElementType;
    index: number;
}) => {
    const featureRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (featureRef.current) {
                gsap.fromTo(featureRef.current,
                    {
                        opacity: 0,
                        y: 60,
                        rotationX: -90,
                        transformOrigin: "center bottom"
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: featureRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Icon animation on hover
            if (iconRef.current) {
                const icon = iconRef.current.querySelector('svg');
                if (icon) {
                    featureRef.current?.addEventListener('mouseenter', () => {
                        gsap.to(icon, {
                            rotation: 360,
                            scale: 1.2,
                            duration: 0.6,
                            ease: "back.out(1.7)"
                        });
                    });

                    featureRef.current?.addEventListener('mouseleave', () => {
                        gsap.to(icon, {
                            rotation: 0,
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    });
                }
            }
        }, featureRef);

        return () => ctx.revert();
    }, [index]);

    return (
        <motion.div 
            ref={featureRef}
            className="flex flex-col p-4 lg:p-6 border border-border/60 rounded-lg lg:rounded-xl cursor-pointer"
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }
                }
            }}
            whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(18, 139, 135, 0.8)",
                backgroundColor: "rgba(18, 139, 135, 0.05)",
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <div ref={iconRef}>
                <Icon className="size-8 lg:size-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mt-4">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
                {desc}
            </p>
        </motion.div>
    )
};

export default FinnaFeatures

