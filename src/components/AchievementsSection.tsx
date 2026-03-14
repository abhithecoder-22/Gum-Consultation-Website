"use client";

import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

// Import certificate images
import cert1 from "@/assets/Certified-1.jpeg";
import cert2 from "@/assets/Certified-2.jpeg";
import cert3 from "@/assets/Certified-3.png";
import cert4 from "@/assets/Certified-4.jpeg";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: any; // StaticImageData from Next.js
}

// Certificate images - using actual certificate images from assets
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Postpartum Fitness Specialist",
    issuer: "Women's Health Institute",
    image: cert1,
  },
  {
    id: 2,
    title: "Prenatal & Postnatal Coach",
    issuer: "International Fitness Professionals",
    image: cert2,
  },
  {
    id: 3,
    title: "Women's Health Nutrition",
    issuer: "Nutrition for Women",
    image: cert3,
  },
  {
    id: 4,
    title: "Pelvic Floor & Core Specialist",
    issuer: "Functional Movement Academy",
    image: cert4,
  },
];

const AchievementsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openModal = (cert: Certificate) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="py-24">
      <div className="px-4">
        <ScrollReveal>
          <p className="section-label">Our Credentials</p>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            TRUSTED EXPERTISE: <span className="gradient-text">PROFESSIONAL CERTIFICATIONS</span> IN WOMEN'S HEALTH
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Specialized certifications in postpartum care, women's fitness, and holistic wellness ensure you receive guidance from experts who understand the motherhood journey.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.1}>
              <div
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col"
                onClick={() => openModal(cert)}
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view full certificate</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <div className="glass-card p-8 text-center">
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <span className="font-display text-4xl gradient-text">8+</span>
                <p className="text-muted-foreground text-sm mt-1">Years in Women's Health</p>
              </div>
              <div className="text-center">
                <span className="font-display text-4xl gradient-text">300+</span>
                <p className="text-muted-foreground text-sm mt-1">Mothers Transformed</p>
              </div>
              <div className="text-center">
                <span className="font-display text-4xl gradient-text">95%</span>
                <p className="text-muted-foreground text-sm mt-1">Success Rate</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Join hundreds of mothers who have regained their strength, confidence, and vitality through our specialized programs.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal for full certificate view */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-[95vh] w-full bg-card rounded-lg overflow-hidden shadow-2xl border" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-muted hover:bg-muted/80 text-muted-foreground rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="relative w-full h-full min-h-[50vh] md:min-h-[70vh]">
              <Image
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm text-card-foreground p-3 md:p-4 border-t">
              <h3 className="font-semibold text-lg md:text-xl mb-1">{selectedCertificate.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{selectedCertificate.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;