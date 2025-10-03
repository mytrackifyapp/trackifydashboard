import Blogs from "@/components/marketing/blogs";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import HowItWorks from "@/components/marketing/how-it-works";
import Stats from "@/components/marketing/stats";
import Testimonials from "@/components/marketing/testimonials";
import { Spotlight } from "@/components/ui/spotlight";
import  Background  from "@/components/global/background";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";

const HomePage = () => {
    return (
        <Background>
        <Wrapper className="py-20 relative">
            <Container className="relative">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(255, 255, 255, 0.5)"
                />
                <Hero />
            </Container>

        {/* <div className="w-full relative flex flex-col pt-16"> */}
           
        

        
            <Companies />
            <HowItWorks />
            <Features />
            <Faq />
            <Stats />
            <Testimonials />
          
            <CTA />
            </Wrapper>
            </Background >
        // </div>
    );
};

export default HomePage;
