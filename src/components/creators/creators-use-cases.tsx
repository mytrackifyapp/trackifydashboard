import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { TrendingUp, Coins, BookOpen, Video, FileText, Code } from "lucide-react";

const useCases = [
    {
        title: "Trading Guides",
        description: "Sell comprehensive trading strategies, market analysis, and investment guides. Help others learn profitable trading techniques.",
        icon: TrendingUp,
        examples: ["Forex Trading Strategies", "Stock Market Analysis", "Options Trading Guides"],
    },
    {
        title: "Crypto Guides",
        description: "Monetize your crypto expertise with guides on blockchain, DeFi, NFTs, and cryptocurrency investing.",
        icon: Coins,
        examples: ["Crypto Investment Strategies", "DeFi Protocols Explained", "NFT Trading Guides"],
    },
    {
        title: "Educational Courses",
        description: "Create and sell online courses, tutorials, and educational content. Share your knowledge and get paid.",
        icon: BookOpen,
        examples: ["Video Course Series", "Step-by-Step Tutorials", "Certification Programs"],
    },
    {
        title: "Video Content",
        description: "Sell premium video content, webinars, and exclusive video series to your audience.",
        icon: Video,
        examples: ["Premium Webinars", "Exclusive Video Series", "Live Session Recordings"],
    },
    {
        title: "Templates & Resources",
        description: "Sell digital templates, tools, and resources that help others save time and be more productive.",
        icon: FileText,
        examples: ["Business Templates", "Design Resources", "Spreadsheet Tools"],
    },
    {
        title: "Code & Software",
        description: "Sell code snippets, scripts, plugins, and software tools to developers and businesses.",
        icon: Code,
        examples: ["Code Libraries", "Software Plugins", "Automation Scripts"],
    },
];

const CreatorsUseCases = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
                            Perfect for selling <br /> your digital products
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center max-w-md mt-2">
                            Whether you're a trader, educator, or content creator, Trackify makes it easy to monetize your expertise.
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {useCases.map((useCase, index) => (
                            <UseCaseCard
                                key={index}
                                title={useCase.title}
                                description={useCase.description}
                                icon={useCase.icon}
                                examples={useCase.examples}
                            />
                        ))}
                    </div>
                </Container>

                <Container delay={0.3} className="w-full max-w-4xl mx-auto">
                    <div className="mt-16 w-full">
                        <div className="flex flex-col items-center justify-center text-center h-auto w-full bg-primary rounded-xl lg:rounded-2xl p-8 lg:p-12">
                            <h3 className="text-2xl lg:text-4xl font-semibold tracking-tight text-black mb-4">
                                Ready to start selling?
                            </h3>
                            <p className="text-base lg:text-lg text-black/70 mb-6 max-w-2xl">
                                Join thousands of creators who are already monetizing their expertise with Trackify. Set up your first product in minutes.
                            </p>
                            <Button size="lg" variant="black" asChild>
                                <a href="https://app.mytrackify.com/sign-up">
                                    Get Started Free
                                </a>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

const UseCaseCard = ({
    title,
    description,
    icon: Icon,
    examples
}: {
    title: string;
    description: string;
    icon: React.ElementType;
    examples: string[];
}) => {
    return (
        <div className="flex flex-col p-6 border border-border/60 rounded-xl hover:border-primary/40 transition-all duration-300 ease-out bg-background/50">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                    {title}
                </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
                {description}
            </p>
            <div className="flex flex-col gap-2 mt-auto">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Popular Examples:
                </span>
                <ul className="flex flex-col gap-1.5">
                    {examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {example}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default CreatorsUseCases

