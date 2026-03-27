"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useState } from "react";
import BookConsultationModal from "@/components/BookConsultationModal";

const AboutMePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookConsultation={() => setIsModalOpen(true)} />

      <section className="py-24">
        <div className="container px-4">
          <ScrollReveal>
            <p className="section-label">About Me</p>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              MY JOURNEY IN <span className="gradient-text">WOMEN'S HEALTH & FITNESS</span>
            </h1>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="font-display text-2xl">Why I Started</h2>
                <p className="text-muted-foreground">
                  As a mother and fitness professional, I witnessed firsthand the challenges women face in maintaining their health during life's most transformative phases. Postpartum recovery, hormonal changes, and the demands of motherhood often leave little time for self-care.
                </p>
                <p className="text-muted-foreground">
                  That's why I created ProTrainrAtHome - to bring professional, personalized fitness guidance directly to busy mothers, wherever they are in their journey.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[400px]">
                <Image fill src="/assets/gym-video-thumb.png" alt="Professional trainer" className="object-cover" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="font-display text-3xl mb-8 text-center">My Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-4 text-center">
                <h3 className="font-semibold">Postpartum Fitness Specialist</h3>
                <p className="text-primary text-sm">Women's Health Institute</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="font-semibold">Prenatal & Postnatal Coach</h3>
                <p className="text-primary text-sm">International Fitness Professionals</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="font-semibold">Women's Health Nutrition</h3>
                <p className="text-primary text-sm">Nutrition for Women</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="font-semibold">Pelvic Floor & Core Specialist</h3>
                <p className="text-primary text-sm">Functional Movement Academy</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-16 text-center">
            <h2 className="font-display text-3xl mb-6">Experience That Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              With over 8 years specializing in women's health and fitness, I've helped hundreds of mothers rebuild their bodies, restore their confidence, and embrace their strength at every stage of life.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              Book Your Consultation
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <BookConsultationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AboutMePage;