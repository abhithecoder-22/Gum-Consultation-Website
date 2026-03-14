"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  onBookConsultation: () => void;
}

const CTASection = ({ onBookConsultation }: CTASectionProps) => {
  return (
    <section id="cta" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle animated bg glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="  px-4 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-display text-5xl md:text-7xl mb-6">START YOUR FITNESS TRANSFORMATION</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Take the first step toward achieving your fitness goals from home. Book a consultation
            and discover personalized training programs designed for your lifestyle and objectives.
          </p>
          <button
            onClick={onBookConsultation}
            className="glow-button inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all btn-pulse"
          >
            Start Your Fitness Journey as a Mom Today <ArrowRight className="w-5 h-5" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
