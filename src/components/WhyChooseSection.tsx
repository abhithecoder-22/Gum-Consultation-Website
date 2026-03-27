import { Dumbbell, Users, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import whyChooseImg from "@/assets/why-choose.jpg";

const WhyChooseSection = () => {
  return (
    <section className="py-24">
      <div className="  px-4">
        <ScrollReveal>
          <p className="section-label">Transformation Programs</p>
          <h2 className="font-display text-4xl md:text-6xl mb-12 break-words md:break-normal">
            12-WEEK <span className="gradient-text">TRANSFORMATION</span> PROGRAMS
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Training + Nutrition + Mindfulness</h3>
                  <p className="text-muted-foreground">Comprehensive programs combining progressive workouts, personalized meal plans, and mental wellness practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Personalized Support</h3>
                  <p className="text-muted-foreground">Weekly check-ins, form corrections, and ongoing motivation from your dedicated coach.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Real Results</h3>
                  <p className="text-muted-foreground">Proven methods that deliver sustainable transformations and long-term health benefits.</p>
                </div>
              </div>
              <div className="mt-8">
                <button className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
                  Explore Programs
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[500px]">
              <Image fill src={whyChooseImg} alt="Transformation results" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
