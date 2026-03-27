"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
// import GlobalSection from "@/components/GlobalSection";
import PricingSection from "@/components/PricingSection";
import AchievementsSection from "@/components/AchievementsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookConsultationModal from "@/components/BookConsultationModal";
import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookConsultation={() => setIsModalOpen(true)} />
      <HeroSection onBookConsultation={() => setIsModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      {/* <GlobalSection /> */}
      <PricingSection />
      <AchievementsSection />
      <CTASection onBookConsultation={() => setIsModalOpen(true)} />
      <Footer />
      <BookConsultationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Sticky Consultation Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-button"
        aria-label="Book Consultation"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default HomePage;