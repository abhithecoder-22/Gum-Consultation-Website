"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import heroRunner from "@/assets/hero-runner.png";

interface HeroSectionProps {
  onBookConsultation: () => void;
}

const slides = [
  {
    headline: "Rebuild Your Body. Restore Your Confidence.",
    subtext: "Postpartum | PCOS | Menopause | Fitness",
    ctaText: "Join Program",
    ctaAction: "join",
  },
  {
    headline: "Not Just Fitness. Real Transformation.",
    subtext: "Training + Nutrition + Mindset",
    ctaText: "Explore Programs",
    ctaAction: "explore",
  },
  {
    headline: "Start Your Journey Today",
    subtext: "Book your free consultation and take the first step",
    ctaText: "Book Free Consultation",
    ctaAction: "book",
  },
];

const HeroSection = ({ onBookConsultation }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCTA = () => {
    if (slides[currentSlide].ctaAction === "book") {
      onBookConsultation();
    } else {
      // For now, scroll to programs or something
      document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      {/* Hero image - right side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] pointer-events-none"
      >
        <Image
          fill
          src={heroRunner}
          alt="Athletic runner in motion"
          className="object-cover object-top pt-8 ml-16"
          style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)", objectPosition: "center top" }}
        />
      </motion.div>

      {/* Subtle overlay for text area only */}
      <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-background/40 via-background/20 to-transparent pointer-events-none" />

      <div className=" relative z-10 px-4 py-10 w-full md:w-[45%]">
        <div className="max-w-xl">
          {/* Slider Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-6 md:font-semibold text-foreground"
          >
            {slides[currentSlide].headline}
          </motion.div>

          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-8 max-w-md"
          >
            {slides[currentSlide].subtext}
          </motion.p>

          <motion.button
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={handleCTA}
            className="glow-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all mb-8"
          >
            {slides[currentSlide].ctaText} <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-secondary/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
