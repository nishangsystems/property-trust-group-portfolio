"use client";

import Achievements from "@/components/sections/Achievements";
import PropertyTrustGroup from "@/components/sections/PropertyTrustGroup";
import GlobalPresence from "@/components/sections/GlobalPresence";
import Leadership from "@/components/sections/Leadership";
import Philanthropy from "@/components/sections/Philanthropy";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Achievements />

      <PropertyTrustGroup />

      <GlobalPresence />

      <Leadership />

      <Philanthropy />

      <Gallery />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

