"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Dumbbell, Users, LayoutGrid, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import whyChooseImg from "@/assets/why-choose.jpg";

const items = [
  { icon: Dumbbell, title: "Safe, Science-Based Training", content: "Evidence-based programs designed specifically for postpartum recovery and women's health, ensuring safe and effective progress at every stage." },
  { icon: Users, title: "Flexible Scheduling for Busy Moms", content: "Online sessions and at-home programs that fit your family schedule, with no gym commitments or rigid class times." },
  { icon: LayoutGrid, title: "Customized Programs", content: "Every program is tailored to your unique needs, whether you're postpartum, managing hormonal changes, or building sustainable habits." },
  { icon: Heart, title: "Supportive Community", content: "Connect with other mothers on similar journeys through our private online community, sharing experiences and celebrating wins together." },
];

const WhyChooseSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="py-24">
      <div className="  px-4">
        <ScrollReveal>
          <p className="section-label">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-6xl mb-12">
            WHY MOTHERS CHOOSE <span className="gradient-text">MOMFITCONSULT</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[500px]">
              <Image fill src={whyChooseImg} alt="Modern gym equipment" className="object-cover" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {items.map((item, i) => {
                const Icon = item.icon;
                const isOpen = openIndex === i;
                return (
                  <div
                    key={item.title}
                    className={`glass-card p-5 cursor-pointer transition-all duration-300 ${isOpen ? "border-primary/40" : ""}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
