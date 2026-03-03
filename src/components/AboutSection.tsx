"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Play, X } from "lucide-react";
import Image from "next/image";
import gymThumb from "@/assets/gym-video-thumb.png";

const stats = [
  { value: 8, suffix: "+", label: "Years Specializing in Women's Health" },
  { value: 500, suffix: "+", label: "Mothers Supported" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "Personalized Programs" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-foreground">
      {count}{suffix}
    </span>
  );
}

const AboutSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="about-us" className="py-24 relative">
      <div className="container  px-4">
        <ScrollReveal>
          <p className="section-label">About MomFitConsult</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            YOUR <span className="gradient-text">WELLNESS</span> JOURNEY AS A MOTHER
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            As a certified fitness coach specializing in women's health and a mother myself, I understand
            the unique challenges of balancing motherhood with personal wellness. MomFitConsult was born
            from my own postpartum journey and the desire to support other mothers in reclaiming their
            strength, confidence, and joy.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Section */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setVideoOpen(true)}>
            <Image fill src={gymThumb} alt="Gym interior" className="object-cover" />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/50 transition-colors">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center glow-button">
                <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Video Modal */}
        {videoOpen && (
          <div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <div className="relative max-w-4xl w-full glass-card p-2" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
