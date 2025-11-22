import FinnaHero from "@/components/finna/finna-hero";
import FinnaFeatures from "@/components/finna/finna-features";
import FinnaCapabilities from "@/components/finna/finna-capabilities";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Background from "@/components/global/background";

const FinnaPage = () => {
    return (
        <Background>
            <div className="w-full relative flex flex-col pt-16">
                <FinnaHero />
                <FinnaFeatures />
                <FinnaCapabilities />
                <Faq />
                <CTA />
            </div>
        </Background>
    );
};

export default FinnaPage;

