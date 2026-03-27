import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import serviceFunctional from "@/assets/service-personal.png";
import serviceClasses from "@/assets/service-classes.png";
import whyChooseImg from "@/assets/service-functional.jpg";

const AboutSection = () => {

  return (
    <section id="about-me" className="py-24 relative">
      <div className="container  px-4">
        <ScrollReveal>
          <p className="section-label">About Me</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            YOUR GUIDE TO <span className="gradient-text">WOMEN'S HEALTH & FITNESS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            As a certified fitness professional specializing in women's health, I help mothers rebuild their bodies and restore confidence through personalized postpartum recovery, PCOS management, menopause wellness, and general fitness programs.
          </p>
        </ScrollReveal>

        {/* Professional Image */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="relative rounded-2xl overflow-hidden h-80 mb-4">
                <Image fill src={serviceFunctional} alt="Personal training session" className="object-cover" />
              </div>
              <p className="text-sm text-muted-foreground">Personalized 1-on-1 coaching for your unique needs</p>
            </div>
            <div className="text-center">
              <div className="relative rounded-2xl overflow-hidden h-80 mb-4">
                <Image fill src={serviceClasses} alt="Group wellness sessions" className="object-cover" />
              </div>
              <p className="text-sm text-muted-foreground">Group sessions fostering community and motivation</p>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="relative rounded-2xl overflow-hidden h-80 mb-4">
                <Image fill src={whyChooseImg} alt="Transformation results" className="object-cover" />
              </div>
              <p className="text-sm text-muted-foreground">Real results from dedicated women just like you</p>
            </div>
          </div>
          <div className="text-center">
            <button className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
              Know More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
