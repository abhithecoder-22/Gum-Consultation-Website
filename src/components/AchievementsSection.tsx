import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Postpartum Mom",
    content: "The postpartum recovery program helped me regain my strength and confidence. The personalized support made all the difference.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "PCOS Warrior",
    content: "Finally found a program that understands PCOS. The nutrition guidance and workouts have transformed my health.",
    rating: 5,
  },
  {
    name: "Lisa R.",
    role: "Menopause Journey",
    content: "At 52, I thought fitness was behind me. This program proved me wrong. Stronger than ever!",
    rating: 5,
  },
];

const AchievementsSection = () => {

  const openModal = (cert: Certificate) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="py-24">
      <div className="px-4">
        <ScrollReveal>
          <p className="section-label">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl mb-12">
            REAL RESULTS FROM <span className="gradient-text">REAL MOTHERS</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;