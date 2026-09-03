import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Interests } from "@/components/sections/Interests";
import { Philosophy } from "@/components/sections/Philosophy";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { SmartWebsites } from "@/components/sections/SmartWebsites";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Approach />
      <SelectedWork />
      <SmartWebsites />
      <Capabilities />
      <About compact />
      <Experience />
      <Interests />
      <FinalCta />
    </>
  );
}
