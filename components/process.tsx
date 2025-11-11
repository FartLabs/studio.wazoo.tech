const processSteps = [
  {
    number: "01",
    title: "Strategic Discovery",
    description:
      "Understand your position, goals, and edge. Build a strategic foundation for everything that follows.",
  },
  {
    number: "02",
    title: "Craft with Intent",
    description:
      "Translate strategy into precise design and interactions. Form and function in harmony.",
  },
  {
    number: "03",
    title: "Build & Refine",
    description:
      "Build with rigor and clarity. Senior practitioners, transparent timelines, and consistent execution.",
  },
  {
    number: "04",
    title: "Measure & Evolve",
    description:
      "Track what matters and iterate. Great digital work evolves as your brand grows.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4">
            Our process
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Strategy and craft, tied to outcomes. Understand the brand, build
            the experience, measure, and evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className="space-y-3">
              <span className="text-3xl font-normal text-muted-foreground/40">
                {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-normal">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
