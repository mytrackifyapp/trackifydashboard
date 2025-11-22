import WhitelabelingHero from "@/components/whitelabeling/whitelabeling-hero";
import WhitelabelingPricing from "@/components/whitelabeling/whitelabeling-pricing";
import WhitelabelingUseCases from "@/components/whitelabeling/whitelabeling-use-cases";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Background from "@/components/global/background";

const WhitelabelingPage = () => {
    return (
        <Background>
            <div className="w-full relative flex flex-col pt-16">
                <WhitelabelingHero />
                <WhitelabelingPricing />
                <WhitelabelingUseCases />
                <Faq />
                <CTA />
            </div>
        </Background>
    );
};

export default WhitelabelingPage;

