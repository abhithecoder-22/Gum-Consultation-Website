import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import serviceSwimming from "@/assets/plans_1.png";
import serviceFunctional from "@/assets/service-swimming.png";
import servicePersonal from "@/assets/plans_2.png";
import serviceClasses from "@/assets/service-functional.png";

const programs = [
  {
    title: "Postpartum Recovery",
    desc: "Rebuild your core strength and confidence after childbirth with safe, progressive training programs.",
    image: serviceSwimming
  },
  {
    title: "PCOS/PCOD Program",
    desc: "Hormone-balancing workouts and nutrition guidance to manage PCOS/PCOD symptoms effectively.",
    image: serviceFunctional
  },
  {
    title: "Menopause Wellness",
    desc: "Strength training and wellness programs designed for menopausal women to maintain bone health and vitality.",
    image: servicePersonal
  },
  {
    title: "General Fitness",
    desc: "Comprehensive fitness programs for overall health, strength building, and sustainable weight management.",
    image: serviceClasses
  },
];

const ServicesSection = () => {

  return (
    <section id="programs" className="py-24 bg-secondary/10">
      <div className="  px-4">
        <div className="mb-6">
          <ScrollReveal>
            <p className="section-label">Programs</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              <span className="block sm:inline">TRANSFORMATION</span>{" "}
              <span className="gradient-text">PROGRAMS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
              Specialized 12-week programs designed for women's health and fitness at every stage.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 0.1}>
              <div className="glass-card p-6 h-full flex flex-col overflow-hidden group hover:border-primary/30 transition-all duration-300">
                {/* Program Image */}
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    fill
                    src={program.image}
                    alt={program.title}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-display text-xl mb-3 text-foreground">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{program.desc}</p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
