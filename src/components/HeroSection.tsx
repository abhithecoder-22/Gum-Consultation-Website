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
  const fullText = "Transform Your\nFitness Journey";

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
        {/* <div className="relative w-full h-full"> */}
          <Image
            fill
            src={heroRunner}
            alt="Athletic runner in motion"
            className="object-cover object-top pt-8 ml-16"
            style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)", objectPosition: "center top" }}
          />
        {/* </div> */}
      </motion.div>

      {/* Subtle overlay for text area only */}
      <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-background/40 via-background/20 to-transparent pointer-events-none" />

      <div className=" relative z-10 px-4 py-10 w-full md:w-[45%]">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 md:font-semibold text-foreground"
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
            Transform your fitness journey from home with expert-designed programs tailored to your goals and lifestyle.
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
              Book Consultation <ArrowRight className="w-4 h-4" />
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
