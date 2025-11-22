"use client";

import React, { useEffect, useRef } from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MessageSquare, Zap, Lightbulb, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        number: "01",
        title: "Natural Conversation",
        description: "Chat with Finna using natural language. Ask questions like 'How much did I spend on groceries this month?' or 'What's my budget for dining out?' and get instant, accurate answers.",
        icon: MessageSquare,
        examples: [
            "Ask about spending patterns",
            "Get budget recommendations",
            "Request financial summaries",
        ],
    },
    {
        number: "02",
        title: "Automated Task Management",
        description: "Finna automatically categorizes transactions, tracks recurring expenses, and identifies patterns in your spending. Set it and forget it—Finna handles the rest.",
        icon: Zap,
        examples: [
            "Auto-categorize expenses",
            "Track subscriptions",
            "Monitor bill payments",
        ],
    },
    {
        number: "03",
        title: "Intelligent Insights",
        description: "Get AI-powered insights that go beyond basic reporting. Finna analyzes your financial behavior to uncover opportunities, risks, and trends you might not notice.",
        icon: Lightbulb,
        examples: [
            "Spending pattern analysis",
            "Saving opportunities",
            "Budget optimization tips",
        ],
    },
    {
        number: "04",
        title: "Predictive Analytics",
        description: "Finna uses machine learning to predict future expenses, cash flow, and financial outcomes. Plan ahead with confidence using AI-powered forecasts.",
        icon: BarChart3,
        examples: [
            "Expense predictions",
            "Cash flow forecasting",
            "Goal achievement timelines",
        ],
    },
];

const CapabilityCard = ({ capability, index }: { capability: typeof capabilities[0], index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLSpanElement>(null);
    const examplesRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (cardRef.current) {
                const direction = index % 2 === 0 ? -1 : 1;
                
                // Card entrance animation
                gsap.fromTo(cardRef.current,
                    {
                        opacity: 0,
                        x: direction * 100,
                        rotationY: direction * 15,
                        transformPerspective: 1000
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotationY: 0,
                        duration: 1,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Icon animation
                if (iconRef.current) {
                    gsap.fromTo(iconRef.current,
                        { scale: 0, rotation: -180 },
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.8,
                            delay: index * 0.2 + 0.3,
                            ease: "back.out(2)",
                            scrollTrigger: {
                                trigger: cardRef.current,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );

                    // Continuous subtle rotation on hover
                    cardRef.current.addEventListener('mouseenter', () => {
                        gsap.to(iconRef.current, {
                            rotation: 360,
                            scale: 1.1,
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    });

                    cardRef.current.addEventListener('mouseleave', () => {
                        gsap.to(iconRef.current, {
                            rotation: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    });
                }

                // Number animation
                if (numberRef.current) {
                    gsap.fromTo(numberRef.current,
                        { scale: 0, rotation: 180 },
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.6,
                            delay: index * 0.2 + 0.4,
                            ease: "elastic.out(1, 0.5)",
                            scrollTrigger: {
                                trigger: cardRef.current,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                // Stagger examples animation
                if (examplesRef.current) {
                    const examples = examplesRef.current.children;
                    gsap.fromTo(examples,
                        {
                            opacity: 0,
                            x: -20
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            stagger: 0.1,
                            delay: index * 0.2 + 0.6,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: cardRef.current,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            }
        }, cardRef);

        return () => ctx.revert();
    }, [index]);

    return (
        <motion.div
            ref={cardRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border rounded-xl p-2 cursor-pointer ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
            whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(18, 139, 135, 0.6)",
                boxShadow: "0 10px 40px rgba(18, 139, 135, 0.1)"
            }}
        >
            <div className={`flex flex-col p-6 lg:p-8 h-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center justify-between w-full">
                    <div ref={iconRef} className="p-3 rounded-lg bg-primary/10">
                        <capability.icon className="w-6 lg:w-8 h-6 lg:h-8 text-primary" />
                    </div>
                    <span ref={numberRef} className="text-xl lg:text-2xl font-semibold text-neutral-700">
                        {capability.number}
                    </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                    <h4 className="text-xl lg:text-2xl font-medium">
                        {capability.title}
                    </h4>
                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                        {capability.description}
                    </p>
                    <div className="flex flex-col gap-2 mt-4">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Examples:
                        </span>
                        <ul ref={examplesRef} className="flex flex-col gap-1.5">
                            {capability.examples.map((example, idx) => (
                                <motion.li 
                                    key={idx} 
                                    className="text-sm text-foreground/70 flex items-center gap-2"
                                    whileHover={{ x: 5, color: "rgba(18, 139, 135, 1)" }}
                                >
                                    <motion.span 
                                        className="w-1.5 h-1.5 rounded-full bg-primary"
                                        whileHover={{ scale: 1.5 }}
                                    ></motion.span>
                                    {example}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`flex w-full ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div 
                    className="w-full border border-border/50 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center min-h-[300px]"
                    whileHover={{ 
                        backgroundColor: "rgba(18, 139, 135, 0.1)",
                        borderColor: "rgba(18, 139, 135, 0.3)"
                    }}
                >
                    <motion.div 
                        className="flex flex-col items-center gap-4 text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            animate={{ 
                                rotate: [0, 5, -5, 5, 0],
                            }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <capability.icon className="w-16 h-16 text-primary" />
                        </motion.div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {capability.title}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const FinnaCapabilities = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a timeline for title and description
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            if (titleRef.current) {
                tl.fromTo(titleRef.current,
                    {
                        opacity: 0,
                        x: -100,
                        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                    },
                    {
                        opacity: 1,
                        x: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        duration: 1.2,
                        ease: "power3.out"
                    }
                );
            }

            if (descRef.current) {
                tl.fromTo(descRef.current,
                    { opacity: 0, x: 100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    },
                    "-=0.5"
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col lg:flex-row items-start justify-start lg:items-end lg:justify-between px-2 md:px-0">
                        <h2 ref={titleRef} className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
                            How Finna works <br /> for you
                        </h2>
                        <p ref={descRef} className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-4 lg:mt-0 max-w-md">
                            Finna integrates seamlessly into your financial workflow, providing intelligent assistance whenever you need it.
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="flex flex-col gap-y-8 mt-10 w-full">
                        {capabilities.map((capability, index) => (
                            <CapabilityCard key={index} capability={capability} index={index} />
                        ))}
                    </div>
                </Container>

                <CTASection />
            </Wrapper>
        </div>
    )
};

const CTASection = () => {
    const ctaRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // CTA container animation
            if (ctaRef.current) {
                tl.fromTo(ctaRef.current,
                    { 
                        opacity: 0,
                        scale: 0.9,
                        y: 50
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    }
                );
            }

            // Title reveal
            if (titleRef.current) {
                tl.fromTo(titleRef.current,
                    {
                        opacity: 0,
                        clipPath: "inset(0 100% 0 0)"
                    },
                    {
                        opacity: 1,
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1,
                        ease: "power2.out"
                    },
                    "-=0.4"
                );
            }

            // Description fade in
            if (descRef.current) {
                tl.fromTo(descRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    },
                    "-=0.5"
                );
            }

            // Button animation with bounce
            if (buttonRef.current) {
                tl.fromTo(buttonRef.current,
                    { scale: 0, rotation: -180 },
                    {
                        scale: 1,
                        rotation: 0,
                        duration: 0.8,
                        ease: "back.out(2)"
                    },
                    "-=0.3"
                );

                // Pulse animation on button
                gsap.to(buttonRef.current, {
                    scale: 1.05,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: 1
                });
            }
        }, ctaRef);

        return () => ctx.revert();
    }, []);

    return (
        <Container delay={0.5} className="w-full max-w-4xl mx-auto">
            <motion.div 
                ref={ctaRef}
                className="mt-10 w-full"
            >
                <motion.div 
                    className="flex flex-col items-center justify-center text-center h-auto w-full bg-primary rounded-xl lg:rounded-2xl p-8 lg:p-12"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3 
                        ref={titleRef}
                        className="text-2xl lg:text-4xl font-semibold tracking-tight text-black mb-4"
                    >
                        Experience Finna Today
                    </h3>
                    <p 
                        ref={descRef}
                        className="text-base lg:text-lg text-black/70 mb-6 max-w-2xl"
                    >
                        Join thousands of users who are already using Finna to simplify their financial management. Start your free trial and see the difference AI can make.
                    </p>
                    <div ref={buttonRef}>
                        <Button size="lg" variant="black" asChild>
                            <a href="https://app.mytrackify.com/sign-up">
                                Get Started with Finna
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default FinnaCapabilities
