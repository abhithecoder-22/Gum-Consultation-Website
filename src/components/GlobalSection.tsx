import ScrollReveal from "./ScrollReveal";

// SVG world map dots
const WorldMap = () => (
  <svg viewBox="0 0 1000 500" className="w-full h-auto block" fill="none" preserveAspectRatio="xMidYMid meet">
    {/* Simplified world map dots */}
    {[
      // North America
      [200, 120], [220, 130], [180, 140], [240, 110], [260, 150],
      [210, 160], [230, 170], [190, 150], [250, 130], [170, 130],
      // South America
      [280, 280], [290, 300], [300, 320], [270, 260], [285, 340],
      [295, 360], [275, 310], [310, 290],
      // Europe
      [480, 110], [500, 100], [490, 120], [510, 130], [470, 130],
      [520, 110], [500, 140], [460, 120], [530, 120],
      // Africa
      [490, 220], [500, 240], [510, 260], [480, 250], [520, 230],
      [500, 280], [490, 300], [510, 200],
      // Asia
      [600, 130], [620, 120], [640, 140], [660, 130], [680, 150],
      [700, 140], [720, 160], [650, 110], [630, 160], [610, 150],
      [740, 170], [760, 180], [580, 140],
      // Australia
      [760, 320], [780, 330], [770, 310], [790, 340], [750, 330],
    ].map(([x, y], i) => (
      <circle
        key={i}
        cx={x}
        cy={y}
        r="4"
        className="fill-primary/60"
      />
    ))}
    {/* Glowing dots for locations */}
    {[
      [210, 140], [500, 120], [650, 130], [780, 330], [290, 300], [510, 240],
    ].map(([x, y], i) => (
      <g key={`glow-${i}`}>
        <circle cx={x} cy={y} r="8" className="fill-primary/20 animate-glow-pulse" />
        <circle cx={x} cy={y} r="5" className="fill-primary" />
      </g>
    ))}
  </svg>
);

const GlobalSection = () => {
  return (
    <section className="py-24">
      <div className=" px-4 ">
        <ScrollReveal>
          <p className="section-label">Our Locations</p>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            OUR GLOBAL PRESENCE: <span className="gradient-text">FITNESS CENTERS</span> AROUND THE WORLD
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <ScrollReveal>
            <div className="glass-card p-8">
              <span className="font-display text-6xl gradient-text">23+</span>
              <p className="text-muted-foreground mt-2 text-sm">Countries</p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                No matter where you are, our gyms are here to help you reach your fitness goals.
                With locations across the globe, finding a gym near you is easy.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2">
            <div className="glass-card p-6 overflow-visible">
              <div className="w-full">
                <WorldMap />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
