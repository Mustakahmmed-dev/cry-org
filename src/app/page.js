import Hero from "@/components/Hero/page";
import AboutSection from "@/components/HomeSections/AboutSection";
import OngoingProjects from "@/components/HomeSections/OngoingProjects";
import WhatWeDo from "@/components/HomeSections/WhatWeDo";

export default function Home() {
  return (
    <div>

      <Hero />
      <AboutSection />
      <WhatWeDo />
      <OngoingProjects />
    </div>
  );
}
