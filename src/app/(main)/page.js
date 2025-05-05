import AboutUsSection from "@/components/AboutUsSection"
import BestSellersSection from "@/components/BestSellersSection"
import FaqSection from "@/components/FaqSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import TutorialSection from "@/components/TutorialSection"

export default function Home() {
  return (
    <div className=" px-8 sm:px-14 w-full h-fit font-[family-name:var(--font-dm-sans)] flex flex-col tablet:gap-20 gap-10">
      <HeroSection /> 
      <BestSellersSection/>
      <HowItWorksSection/>
      <TutorialSection/>
      <AboutUsSection/>
      <FaqSection/>
      <Footer/>
    </div>
  )
}

