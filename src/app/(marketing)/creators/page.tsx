import CreatorsHero from "@/components/creators/creators-hero";
import CreatorsFeatures from "@/components/creators/creators-features";
import CreatorsUseCases from "@/components/creators/creators-use-cases";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Background from "@/components/global/background";

const CreatorsPage = () => {
    return (
        <Background>
            <div className="w-full relative flex flex-col pt-16">
                <CreatorsHero />
                <CreatorsFeatures />
                <CreatorsUseCases />
                <Faq />
                <CTA />
            </div>
        </Background>
    );
};

export default CreatorsPage;

