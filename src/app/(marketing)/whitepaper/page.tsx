import PaperHero from "@/components/whitepaper/paper-hero";
import OurMission from "@/components/about/our-mission";
import OurStart from "@/components/about/our-start";
import OurStory from "@/components/about/our-story";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";

const WhitePaperPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <PaperHero />
            <OurStory />
            <OurStart />
            <OurMission />
            <Faq />
            <CTA />
        </div>
    );
};

export default WhitePaperPage;
