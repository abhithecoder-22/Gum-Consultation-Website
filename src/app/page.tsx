"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import AchievementsSection from "@/components/AchievementsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookConsultationModal from "@/components/BookConsultationModal";
import { useState } from "react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookConsultation={() => setIsModalOpen(true)} />
      <HeroSection onBookConsultation={() => setIsModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      {/* <PricingSection /> */}
      <AchievementsSection />
      <CTASection onBookConsultation={() => setIsModalOpen(true)} />
      <Footer />
      <BookConsultationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
