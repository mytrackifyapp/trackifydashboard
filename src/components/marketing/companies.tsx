import React from 'react'
import Container from "../global/container";
import { Marquee } from "../ui/marquee";
import Image from "next/image";
import Wrapper from "../global/wrapper";

const Companies = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center px-2 md:px-0">
                        <h4 className="text-xl lg:text-2xl font-semibold text-center tracking-tight">
                            The world's best companies trust Trackify
                        </h4>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="mt-10 w-full relative overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:30s]">
                            <div className="flex gap-8 md:gap-12">
                                <Image src="/images/company1.png" alt="Company 1" width={1024} height={1024} className="w-24 h-8" />
                                <Image src="/images/company2.png" alt="Company 2" width={1024} height={1024} className="w-24 h-8" />
                                <Image src="/images/company3.png" alt="Company 3" width={1024} height={1024} className="w-24 h-8" />
                                <Image src="/images/company4.png" alt="Company 4" width={1024} height={1024} className="w-24 h-8" />
                                <Image src="/images/company5.png" alt="Company 5" width={1024} height={1024} className="w-24 h-8" />
                                <Image src="/images/company6.png" alt="Company 6" width={1024} height={1024} className="w-24 h-8" />
                                <Image src="/images/company8.png" alt="Company 7" width={1024} height={1024} className="w-24 h-8" />
                            </div>
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

export default Companies
