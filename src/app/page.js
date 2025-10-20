import Hero from "@/components/Hero/page";
import AboutSection from "@/components/HomeSections/AboutSection";
import GallerySection from "@/components/HomeSections/GallerySection";
import ImpactsSection from "@/components/HomeSections/ImpactsSection";
import OngoingProjects from "@/components/HomeSections/OngoingProjects";
import RecentNews from "@/components/HomeSections/RecentNews";
import WhatWeDo from "@/components/HomeSections/WhatWeDo";

export default function Home() {
  return (
    <div>

      <Hero />
      <AboutSection />
      <WhatWeDo />
      <OngoingProjects />
      <ImpactsSection />
      <RecentNews />
      <GallerySection />
      
    </div>
  );
}
