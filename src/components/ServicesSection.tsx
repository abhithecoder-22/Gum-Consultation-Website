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
  { title: "Personal Training Programs", image: servicePersonal, desc: "Customized 1-on-1 training sessions tailored to your fitness level and goals" },
  { title: "Home Workout Plans", image: serviceClasses, desc: "Complete workout programs designed specifically for home environments with minimal equipment" },
  { title: "Strength & Conditioning", image: serviceSwimming, desc: "Build muscle, increase strength, and improve overall conditioning with progressive training" },
  { title: "Online Coaching Sessions", image: serviceFunctional, desc: "Live virtual coaching with real-time feedback and form correction" },
  { title: "Weight Loss Programs", image: servicePersonal, desc: "Sustainable weight management programs combining exercise and nutrition guidance" },
  { title: "Fitness Assessment & Planning", image: serviceFunctional, desc: "Comprehensive fitness evaluation and personalized program development" },
  { title: "Group Training Options", image: serviceClasses, desc: "Small group virtual sessions for motivation and community support" },
  { title: "Recovery & Mobility Training", image: serviceSwimming, desc: "Improve flexibility, mobility, and recovery with specialized movement programs" },
  { title: "Senior Fitness Programs", image: servicePersonal, desc: "Age-appropriate training programs designed for older adults to maintain strength and mobility" },
  { title: "Athletic Performance Training", image: serviceClasses, desc: "High-intensity training programs for athletes looking to improve performance and endurance" },
  { title: "Post-Rehab Conditioning", image: serviceSwimming, desc: "Safe return-to-exercise programs following injury or medical procedures" },
  { title: "Nutrition Coaching", image: serviceFunctional, desc: "Comprehensive nutrition guidance and meal planning for optimal health and performance" },
  { title: "Corporate Wellness Programs", image: servicePersonal, desc: "Group fitness programs designed for workplace wellness initiatives" },
  { title: "Youth Fitness Training", image: serviceClasses, desc: "Age-appropriate strength and conditioning programs for teenagers and young adults" },
  { title: "Functional Movement Assessment", image: serviceSwimming, desc: "Detailed movement analysis to identify imbalances and improve overall functionality" },
  { title: "Long-Term Lifestyle Coaching", image: serviceFunctional, desc: "Ongoing support and guidance for sustainable lifestyle changes and habit formation" },
];

const ServicesSection = () => {
  const [page, setPage] = useState(0);
  const pageSize = 4;
  const pages = Math.ceil(services.length / pageSize);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages - 1, p + 1));

  const visible = services.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section id="programs" className="py-24 bg-secondary/10">
      <div className="  px-4">
        <div className="mb-6">
          <ScrollReveal>
            <p className="section-label">Our Programs</p>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              TRANSFORM YOUR FITNESS: <span className="gradient-text">PROFESSIONAL TRAINING PROGRAMS</span> FROM HOME
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive wellness programs designed for mothers at every stage.
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
          <motion.div
            className="flex gap-6"
            animate={{ x: -page * (280 + 24) * 4 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="glass-card overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 w-[280px] flex-shrink-0 min-h-[400px] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (i % 4) * 0.1 }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
