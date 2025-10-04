import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils/metadata";
import { Analytics } from "@vercel/analytics/next";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
    params,
    searchParams,
}: {
    children: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Structured data for Google logo */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": process.env.NEXT_PUBLIC_APP_NAME || "Trackify",
                            "url": process.env.NEXT_PUBLIC_APP_URL || "https://www.trackify.com",
                            "logo": `${process.env.NEXT_PUBLIC_APP_URL || "https://www.trackify.com"}/icons/logo5.png`,
                        }),
                    }}
                />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
                    base.variable,
                    heading.variable
                )}
            >
                <Providers>
                    <Analytics />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
