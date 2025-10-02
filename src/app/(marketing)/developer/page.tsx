import React from 'react'
import Devapi from "@/components/developer/dev-api"
import Apiquestion  from "@/components/developer/api-question"
import Faq from "@/components/marketing/faq"
import CTA from "@/components/marketing/cta"

const DeveloperPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <Devapi />
            <Apiquestion />
            <Faq />
            <CTA />
        </div>
    )
}

export default DeveloperPage