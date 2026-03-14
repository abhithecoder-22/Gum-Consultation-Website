"use client";

import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { Check, X } from "lucide-react";
import servicePersonal from "@/assets/service-personal.jpg";
import serviceClasses from "@/assets/service-classes.jpg";
import plans_1 from "@/assets/plans_1.png";
import plans_2 from "@/assets/plans_2.png";

interface ProgramsSectionProps {
  onBookConsultation: () => void;
}

const programs = [
  {
    id: 1,
    title: "Post Pregnancy Fat Loss",
    category: "12 WEEK PROGRAM",
    image: plans_1,
    description: "Designed for women to lose post-pregnancy weight while rebuilding core strength and confidence.",
    whatsIncluded: [
      "12-week customized training plan",
      "Nutrition guidance & meal planning",
      "Core rebuilding exercises",
      "Progress tracking & adjustments",
      "Online support & check-ins"
    ],
    expectedOutcome: "Lose 8-12kg while gaining strength and confidence",
    commitment: "3-4 sessions per week + nutrition adherence",
    price: "₹18,000",
    duration: "12 weeks"
  },
  {
    id: 2,
    title: "Hormonal Fat Loss Coaching",
    category: "10 WEEK PROGRAM",
    image: plans_2,
    description: "Targeted program for hormonal weight gain, focusing on sustainable fat loss and hormonal balance.",
    whatsIncluded: [
      "10-week hormonal-focused plan",
      "Hormone-balancing nutrition",
      "Stress management techniques",
      "Sleep optimization guidance",
      "Bi-weekly coaching calls"
    ],
    expectedOutcome: "Balanced hormones, 6-10kg fat loss, improved energy",
    commitment: "4 sessions per week + lifestyle adjustments",
    price: "₹16,000",
    duration: "10 weeks"
  },
  {
    id: 3,
    title: "1-on-1 Home Personal Training",
    category: "MONTHLY PROGRAM",
    image: servicePersonal,
    description: "Private, personalized training sessions in your home with professional equipment.",
    whatsIncluded: [
      "8-12 personal training sessions/month",
      "Home gym equipment provided",
      "Customized workout programming",
      "Form correction & technique training",
      "Flexible scheduling"
    ],
    expectedOutcome: "Achieve fitness goals with consistent progress and guidance",
    commitment: "2-3 sessions per week based on goals",
    price: "₹8,000",
    duration: "per month"
  },
  {
    id: 4,
    title: "Executive Fitness Coaching",
    category: "MONTHLY PROGRAM",
    image: serviceClasses,
    description: "Time-efficient fitness programs for busy professionals needing results without career sacrifice.",
    whatsIncluded: [
      "HIIT & strength training programs",
      "Time-efficient 30-45 min workouts",
      "Business travel fitness solutions",
      "Stress management for executives",
      "Priority scheduling"
    ],
    expectedOutcome: "Improved energy, stress management, maintained fitness",
    commitment: "3-4 sessions per week, 30-45 minutes each",
    price: "₹12,000",
    duration: "per month"
  }
];

const comparisonFeatures = [
  { name: "Body Assessment", programs: [true, true, true, true] },
  { name: "Custom Training Plan", programs: [true, true, true, true] },
  { name: "Nutrition Guidance", programs: [true, true, false, true] },
  { name: "Hormonal Focus", programs: [true, true, false, false] },
  { name: "Core Rebuilding", programs: [true, false, false, false] },
  { name: "Flexible Scheduling", programs: [true, true, true, true] },
  { name: "Equipment Provided", programs: [false, false, true, false] },
  { name: "Stress Management", programs: [true, true, false, true] }
];

const ProgramsSection = ({ onBookConsultation }: ProgramsSectionProps) => {
  return (
    <section id="programs" className="py-32">
      <div className="px-4">
        <ScrollReveal>
          <p className="section-label">Our Programs</p>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            TRANSFORM YOUR FITNESS: <span className="gradient-text">PROFESSIONAL TRAINING PLANS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Structured coaching with proven methodology for sustainable fat loss. No shortcuts, just results.
          </p>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => (
            <ScrollReveal key={program.id} delay={index * 0.1}>
              <div className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Program Image */}
                <div className="relative h-[36rem] overflow-hidden flex-shrink-0">
                  <Image
                    fill
                    src={program.image}
                    alt={program.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Program Title & Description */}
                  <div className="mb-4">
                    <h3 className="font-display text-2xl mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-primary">WHAT'S INCLUDED:</h4>
                    <ul className="space-y-1">
                      {program.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Outcome */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <h4 className="font-semibold text-sm mb-1 text-primary">EXPECTED OUTCOME:</h4>
                    <p className="text-sm">{program.expectedOutcome}</p>
                  </div>

                  {/* Commitment Required */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1 text-primary">COMMITMENT REQUIRED:</h4>
                    <p className="text-sm text-muted-foreground">{program.commitment}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold gradient-text">{program.price}</span>
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 border border-primary/30 text-primary hover:bg-primary/5 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                    <button
                      onClick={onBookConsultation}
                      className="flex-1 glow-button bg-primary text-primary-foreground hover:brightness-110 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compare Programs Section */}
        <ScrollReveal>
          <div className="glass-card p-8">
            <h3 className="font-display text-3xl mb-6 text-center">Compare Programs</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-4 font-semibold">Features</th>
                    <th className="text-center py-3 px-4 font-semibold">Post Pregnancy</th>
                    <th className="text-center py-3 px-4 font-semibold">Hormonal</th>
                    <th className="text-center py-3 px-4 font-semibold">1-on-1 Home</th>
                    <th className="text-center py-3 px-4 font-semibold">Executive</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name} className={`border-b border-border/10 ${index % 2 === 0 ? 'bg-secondary/5' : ''}`}>
                      <td className="py-3 px-4 font-medium">{feature.name}</td>
                      {feature.programs.map((included, i) => (
                        <td key={i} className="text-center py-3 px-4">
                          {included ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProgramsSection;