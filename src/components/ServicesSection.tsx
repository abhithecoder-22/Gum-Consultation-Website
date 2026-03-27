import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const programs = [
  { title: "Postpartum Recovery", desc: "Rebuild your core strength and confidence after childbirth with safe, progressive training programs." },
  { title: "PCOS/PCOD Program", desc: "Hormone-balancing workouts and nutrition guidance to manage PCOS/PCOD symptoms effectively." },
  { title: "Menopause Wellness", desc: "Strength training and wellness programs designed for menopausal women to maintain bone health and vitality." },
  { title: "General Fitness", desc: "Comprehensive fitness programs for overall health, strength building, and sustainable weight management." },
];

const ServicesSection = () => {

  return (
    <section id="programs" className="py-24 bg-secondary/10">
      <div className="  px-4">
        <div className="mb-6">
          <ScrollReveal>
            <p className="section-label">Programs</p>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              TRANSFORMATION <span className="gradient-text">PROGRAMS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Specialized 12-week programs designed for women's health and fitness at every stage.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 0.1}>
              <div className="glass-card p-6 h-full flex flex-col">
                <h3 className="font-display text-xl mb-3 text-foreground">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{program.desc}</p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  View Details →
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
