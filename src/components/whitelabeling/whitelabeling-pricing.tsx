"use client";

import { WHITELABEL_MARQUEE_ITEMS, WHITELABEL_PLANS } from "@/constants/whitelabeling-pricing";
import { cn } from "@/lib";
import NumberFlow from '@number-flow/react';
import { CheckCircle2Icon, X } from "lucide-react";
import { useState } from 'react';
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Marquee } from "../ui/marquee";
import { Switch } from "../ui/switch";

const WhitelabelingPricing = () => {
    const [isYearly, setIsYearly] = useState<boolean>(false)

    return (
        <div className="relative z-0 w-full h-full" id="pricing">
            <Wrapper className="py-20">
                <div className="flex flex-col items-center justify-center w-full z-10">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                White-Label Pricing
                            </span>
                        </div>
                    </Container>

                    <Container delay={0.1}>
                        <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                            Choose Your Plan <br className="hidden lg:inline-block" /> & Start Earning
                        </h2>
                    </Container>

                    <Container delay={0.2}>
                        <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                            All plans include white-label branding, custom domain, and revenue sharing. Scale as your audience grows.
                        </p>
                    </Container>

                    <Container delay={0.3}>
                        {WHITELABEL_PLANS.find(plan => !plan.oneTimePayment) && (
                            <div className="flex items-center gap-4 mt-8">
                                <span className="text-sm font-medium">
                                    Monthly
                                </span>
                                <Switch
                                    checked={isYearly}
                                    onCheckedChange={setIsYearly}
                                    className="cursor-pointer"
                                />
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">
                                        Yearly
                                    </span>
                                    <span className="text-xs text-primary font-medium px-2 py-1 rounded-full bg-primary/10">
                                        20% Off
                                    </span>
                                </div>
                            </div>
                        )}
                    </Container>

                    <Container delay={0.4} className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-16 max-w-7xl mx-auto">
                            {WHITELABEL_PLANS.map((plan, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex flex-col p-8 rounded-2xl bg-card border-[1.5px] w-full relative",
                                        plan.popular ? "border-[#7ce2b0] lg:scale-105 lg:-mt-4 shadow-[0_0_40px_rgba(124,226,176,0.2)]" : "border-border"
                                    )}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-gradient-to-r from-[#d3f9d8] to-[#7ce2b0] text-black text-xs font-semibold px-4 py-1 rounded-full">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className={cn(
                                                    "text-sm font-medium px-3 py-1 rounded-full",
                                                    plan.popular 
                                                        ? "bg-gradient-to-r from-[#d3f9d8] to-[#7ce2b0] text-black" 
                                                        : "bg-gradient-to-r from-[#d3f9d8]/10 to-[#a6f6c6]/10 text-[#7ce2b0]"
                                                )}>
                                                    {plan.badge}
                                                </span>
                                            </div>
                                            {plan.customPricing ? (
                                                <div className="mt-4">
                                                    <h3 className="text-2xl lg:text-4xl font-semibold">
                                                        Custom Pricing
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-2">
                                                        Tailored to your needs
                                                    </p>
                                                </div>
                                            ) : plan.oneTimePayment ? (
                                                <div className="mt-4">
                                                    {plan.originalPrice?.oneTime && plan.blackFridayPrice?.oneTime && (
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-xs text-[#7ce2b0] font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-[#d3f9d8]/20 to-[#a6f6c6]/20 border border-[#7ce2b0]/30">
                                                                Black Friday Deal
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-baseline gap-2">
                                                        <h3 className="text-2xl lg:text-4xl font-semibold">
                                                            <NumberFlow
                                                                value={
                                                                    plan.blackFridayPrice?.oneTime || plan.price.oneTime || 0
                                                                }
                                                                format={{
                                                                    currency: "USD",
                                                                    style: "currency",
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0,
                                                                }}
                                                                className="text-2xl lg:text-4xl font-semibold"
                                                            />
                                                        </h3>
                                                        {plan.originalPrice?.oneTime && plan.blackFridayPrice?.oneTime && (
                                                            <span className="text-lg text-muted-foreground line-through">
                                                                <NumberFlow
                                                                    value={plan.originalPrice.oneTime}
                                                                    format={{
                                                                        currency: "USD",
                                                                        style: "currency",
                                                                        minimumFractionDigits: 0,
                                                                        maximumFractionDigits: 0,
                                                                    }}
                                                                />
                                                            </span>
                                                        )}
                                                        <span className="text-base font-normal text-muted-foreground">
                                                            one-time
                                                        </span>
                                                    </div>
                                                    {plan.originalPrice?.oneTime && plan.blackFridayPrice?.oneTime && (
                                                        <p className="text-xs text-[#7ce2b0] mt-1">
                                                            Save {Math.round(((plan.originalPrice.oneTime - plan.blackFridayPrice.oneTime) / plan.originalPrice.oneTime) * 100)}%
                                                        </p>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="mt-4">
                                                    {plan.originalPrice && plan.blackFridayPrice && (
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-xs text-[#7ce2b0] font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-[#d3f9d8]/20 to-[#a6f6c6]/20 border border-[#7ce2b0]/30">
                                                                Black Friday Deal
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-baseline gap-2">
                                                        <h3 className="text-2xl lg:text-4xl font-semibold">
                                                            <NumberFlow
                                                                value={
                                                                    plan.blackFridayPrice
                                                                        ? (isYearly ? plan.blackFridayPrice.yearly : plan.blackFridayPrice.monthly)
                                                                        : (isYearly ? plan.price.yearly : plan.price.monthly)
                                                                }
                                                                format={{
                                                                    currency: "USD",
                                                                    style: "currency",
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0,
                                                                }}
                                                                className="text-2xl lg:text-4xl font-semibold"
                                                            />
                                                        </h3>
                                                        {plan.originalPrice && plan.blackFridayPrice && (
                                                            <span className="text-lg text-muted-foreground line-through">
                                                                <NumberFlow
                                                                    value={isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly}
                                                                    format={{
                                                                        currency: "USD",
                                                                        style: "currency",
                                                                        minimumFractionDigits: 0,
                                                                        maximumFractionDigits: 0,
                                                                    }}
                                                                />
                                                            </span>
                                                        )}
                                                        <span className="text-base font-normal text-muted-foreground">
                                                            /{isYearly ? "year" : "month"}
                                                        </span>
                                                    </div>
                                                    {plan.originalPrice && plan.blackFridayPrice && (
                                                        <p className="text-xs text-[#7ce2b0] mt-1">
                                                            Save {Math.round(((isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly) - (isYearly ? plan.blackFridayPrice.yearly : plan.blackFridayPrice.monthly)) / (isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly) * 100)}%
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                            <p className="text-sm text-muted-foreground">
                                                {plan.description}
                                            </p>
                                            {plan.revenueShare && (
                                                <div className="mt-3 p-3 rounded-lg bg-gradient-to-br from-[#d3f9d8]/10 to-[#a6f6c6]/10 border border-[#7ce2b0]/30">
                                                    <p className="text-xs text-muted-foreground mb-1">Revenue Share</p>
                                                    <p className="text-lg font-semibold bg-gradient-to-r from-[#d3f9d8] to-[#7ce2b0] bg-clip-text text-transparent">{plan.revenueShare}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-3 mt-6 flex-grow">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div 
                                                key={featureIndex} 
                                                className={cn(
                                                    "flex items-start gap-3",
                                                    feature.included ? "text-foreground" : "text-muted-foreground/50"
                                                )}
                                            >
                                                {feature.included ? (
                                                    <CheckCircle2Icon className="size-5 text-[#7ce2b0] flex-shrink-0 mt-0.5" />
                                                ) : (
                                                    <X className="size-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                                                )}
                                                <span className={cn(
                                                    "text-sm",
                                                    !feature.included && "line-through"
                                                )}>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className="mt-8 w-full"
                                        variant={plan.popular ? "default" : "outline"}
                                        size="lg"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </Wrapper>

            <div className="w-full bg-gradient-to-r from-[#d3f9d8] via-[#a6f6c6] to-[#7ce2b0] py-6 overflow-hidden">
                <Marquee className="[--duration:30s] [--gap:2rem]" pauseOnHover>
                    <div className="flex items-center">
                        {WHITELABEL_MARQUEE_ITEMS.map((item, index) => (
                            <div key={index} className="flex items-center gap-x-4">
                                <span className="text-base font-medium text-black hover:opacity-70 transition-opacity">
                                    {item}
                                </span>
                                <Icons.stars className="size-5 text-black mr-4" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default WhitelabelingPricing

