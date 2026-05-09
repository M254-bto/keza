"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import AddOns from "@/components/AddOns";
import WhoWeServe from "@/components/WhoWeServe";
import WhyKeza from "@/components/WhyKeza";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Scroll-triggered fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Packages />
      <AddOns />
      <WhoWeServe />
      <WhyKeza />
      <Contact />
      <Footer />
    </main>
  );
}
