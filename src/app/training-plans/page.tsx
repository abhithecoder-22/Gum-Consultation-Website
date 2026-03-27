"use client";

import BookConsultationModal from '@/components/BookConsultationModal';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { Check } from 'lucide-react';
import { useState } from 'react';

const monthlyPlans = [
  {
    name: "General Fitness Plan",
    originalPrice: "₹1,499",
    offerPrice: "₹999",
    includes: ["Workout plan", "Exercise videos", "Basic diet guide"]
  },
  {
    name: "Postpartum Safe Plan",
    originalPrice: "₹1,499",
    offerPrice: "₹999",
    includes: ["Workout plan", "Exercise videos", "Basic diet guide"]
  },
  {
    name: "PCOS Fitness Plan",
    originalPrice: "₹1,499",
    offerPrice: "₹999",
    includes: ["Workout plan", "Exercise videos", "Basic diet guide"]
  }
];

const quarterlyPlans = [
  {
    name: "General Fitness",
    price: "₹3,999",
    includes: ["Structured progression", "Monthly updates", "Video library"]
  },
  {
    name: "Specialized Programs",
    price: "₹4,999",
    includes: ["Structured progression", "Monthly updates", "Video library"]
  }
];

export default function TrainingPlansPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start Simple. Stay Consistent.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible training plans designed to fit your lifestyle. No long-term commitment required.
            </p>
          </div>

          {/* Monthly Plans */}
          <div className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                Monthly Plans
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                30-Day Fitness Plans
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {monthlyPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 0.1}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-pink-600">{plan.offerPrice}</span>
                        <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                      </div>
                      <p className="text-green-600 font-semibold">Limited Time Offer</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {plan.includes.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Quarterly Plans */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                Quarterly Plans
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                90-Day Fitness Plan
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {quarterlyPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 0.1}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>

                    <div className="mb-6">
                      <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {plan.includes.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BookConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

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
}