import ScrollReveal from "./ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import servicePersonal from "@/assets/service-personal.png";
import serviceClasses from "@/assets/service-classes.png";
import serviceSwimming from "@/assets/service-swimming.png";
import serviceFunctional from "@/assets/service-functional.png";

const services = [
  { title: "Postpartum Recovery Programs", image: servicePersonal, desc: "Gentle, progressive programs to rebuild strength and confidence after childbirth" },
  { title: "At-Home Workout Plans for Busy Moms", image: serviceClasses, desc: "Flexible, equipment-free routines designed for your busy schedule and home environment" },
  { title: "Nutrition Guidance for Mothers", image: serviceSwimming, desc: "Balanced meal planning that supports energy levels, recovery, and family nutrition" },
  { title: "1:1 Online Coaching", image: serviceFunctional, desc: "Personalized virtual sessions with expert guidance tailored to your motherhood journey" },
  { title: "Hormonal & Core Strength Support", image: servicePersonal, desc: "Specialized training addressing hormonal changes and building deep core stability" },
  { title: "Sustainable Wellness Programs", image: serviceFunctional, desc: "Long-term lifestyle changes that create lasting health and fitness habits" },
  { title: "Family Fitness Integration", image: serviceClasses, desc: "Programs that incorporate family activities while prioritizing your personal wellness" },
  { title: "Recovery & Stress Management", image: serviceSwimming, desc: "Techniques to manage stress, improve sleep, and support overall recovery" },
];

const ServicesSection = () => {
  const [page, setPage] = useState(0);
  const pageSize = 4;
  const pages = Math.ceil(services.length / pageSize);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages - 1, p + 1));

  const visible = services.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="  px-4">
        <div className="mb-6">
          <ScrollReveal>
            <p className="section-label">Our Programs</p>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              SUPPORT YOUR JOURNEY: <span className="gradient-text">PERSONALIZED WELLNESS PROGRAMS</span> FOR MOTHERS
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive wellness programs designed specifically for mothers at every stage.
              From postpartum recovery to sustainable lifestyle changes, we provide the support you need.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <button onClick={prev} disabled={page === 0} className="glow-button p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-50 mr-2">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={next} disabled={page >= pages - 1} className="glow-button p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-50">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={page}
              className="flex gap-6 items-stretch"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
            >
              {visible.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.05}>
                  <div className="glass-card overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 min-w-[220px] md:min-w-[280px] flex-shrink-0 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image
                        fill
                        src={service.image}
                        alt={service.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-2xl mb-1">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{service.desc}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
