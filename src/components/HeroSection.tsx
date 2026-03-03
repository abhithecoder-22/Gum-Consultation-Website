"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import heroRunner from "@/assets/hero-runner.png";

interface HeroSectionProps {
  onBookConsultation: () => void;
}

const HeroSection = ({ onBookConsultation }: HeroSectionProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Empower Your\nMotherhood Journey";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100; // milliseconds per character

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, typingSpeed);
      }
    };

    // Start typing after a short delay
    const startDelay = setTimeout(typeText, 500);

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `radial-gradient(ellipse 120% 100% at 80% 60%, 
            hsl(25, 60%, 18%) 0%,
            hsl(20, 50%, 14%) 15%,
            hsl(15, 45%, 10%) 35%,
            hsl(10, 35%, 8%) 55%,
            hsl(5, 25%, 6%) 75%,
            hsl(0, 10%, 5%) 90%,
            hsl(0, 0%, 4%) 100%)`
        }}
      />

      {/* Hero image - right side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] pointer-events-none"
      >
        {/* <div className="relative w-full h-full"> */}
          <Image
            fill
            src={heroRunner}
            alt="Athletic runner in motion"
            className="object-cover object-top pt-8 ml-16"
            style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)", objectPosition: "center top" }}
          />
        {/* </div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent pointer-events-none" />
      </motion.div>

      <div className=" relative z-10 px-4 py-20">
        <div className="max-w-xl md:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 md:font-semibold"
          >
            {displayedText.split('\n').map((line, index) => (
              <div key={index}>
                {index === 0 ? (
                  <>
                    {line.slice(0, 10)}
                    {line.length > 10 && <span className="gradient-text">{line.slice(10, 11)}</span>}
                    {line.slice(11)}
                  </>
                ) : (
                  line
                )}
                {index === 0 && displayedText.includes('\n') && <br />}
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8 max-w-md"
          >
            Reclaim your strength and confidence through personalized fitness programs designed specifically for mothers. From postpartum recovery to building lasting wellness habits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button
              onClick={onBookConsultation}
              className="glow-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-3 text-foreground group">
              <span className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play className="w-5 h-5 text-primary fill-primary" />
              </span>
              <span className="font-medium">Watch Video</span>
            </button>
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs text-primary font-bold">
                +
              </div>
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">1.7k reviews</p>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {["Postpartum Recovery", "Mom Strength Training", "Flexible Scheduling", "Nutrition for Moms", "Core & Pelvic Health", "Online Coaching"].map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
