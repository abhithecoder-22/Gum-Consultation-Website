"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useState } from "react";
import BookConsultationModal from "@/components/BookConsultationModal";

const AboutPage = () => {
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

      {/* Sticky Consultation Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-button"
        aria-label="Book Consultation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
};

export default AboutPage;