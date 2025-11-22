"use client";

import React, { useEffect, useRef } from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon, ArrowRightIcon, Sparkles } from "lucide-react";
import { BlurText } from "../ui/blur-text";
import Link from "next/link";
import Icons from "../global/icons";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinnaHero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the glow effect
            if (glowRef.current) {
                gsap.fromTo(glowRef.current,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: glowRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate badge with bounce
            if (badgeRef.current) {
                gsap.fromTo(badgeRef.current,
                    { y: -30, opacity: 0, scale: 0.8 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        delay: 0.2
                    }
                );
            }

            // Floating animation for glow
            if (glowRef.current) {
                gsap.to(glowRef.current, {
                    y: "+=20",
                    duration: 3,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative z-0 w-full h-full">
            <div ref={glowRef} className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>

            <Wrapper className="py-20">
                <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto z-40 relative">
                    <Container delay={0.0}>
                        <div ref={badgeRef} className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#7ce2b0] flex items-center justify-center relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#d3f9d8] flex items-center justify-center animate-ping">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#d3f9d8] flex items-center justify-center animate-ping"></div>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d3f9d8] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                </div>
                            </div>
                            <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#d3f9d8] via-[#a6f6c6] to-[#7ce2b0] bg-clip-text text-sm text-transparent">
                                AI-Powered Assistant
                                <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                                    Meet Finna
                                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                                </span>
                            </span>
                        </div>
                    </Container>

                    <Container delay={0.1}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Icons.stars className="size-6 text-primary" />
                            <BlurText
                                word={"Your AI Personal CFO"}
                                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] font-heading"
                            />
                        </div>
                    </Container>

                    <Container delay={0.2}>
                        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
                            Finna is your intelligent financial assistant, powered by AI. Get automated insights, personalized suggestions, and instant answers to your financial questions—all through natural conversation, just like talking to Siri.
                        </p>
                    </Container>

                    <Container delay={0.3}>
                        <div className="flex items-center justify-center md:gap-x-6 mt-8">
                            <Button asChild size="lg">
                                <Link href="https://app.mytrackify.com/sign-up">
                                    Try Finna Now
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="hidden md:flex">
                                <Link href="#features">
                                    See Features
                                </Link>
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.4}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-4xl">
                            {[
                                { icon: Sparkles, text: "Smart Automation" },
                                { icon: CheckCircle2Icon, text: "Real-Time Insights" },
                                { icon: CheckCircle2Icon, text: "Natural Conversation" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 p-4 rounded-lg border border-border/60 bg-background/50 backdrop-blur-sm cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        borderColor: "rgba(18, 139, 135, 0.5)",
                                        backgroundColor: "rgba(18, 139, 135, 0.05)"
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        <item.icon className="size-5 text-primary flex-shrink-0" />
                                    </motion.div>
                                    <span className="text-sm text-muted-foreground">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default FinnaHero

