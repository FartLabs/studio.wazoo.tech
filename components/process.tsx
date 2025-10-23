const processSteps = [
  {
    number: "01",
    title: "Discover & Understand",
    description: "We start by understanding your creative vision, target audience, and project goals. Through a discovery call, we review examples, define scope, and establish clear expectations for timeline and deliverables.",
  },
  {
    number: "02",
    title: "Design & Iterate",
    description: "Create initial designs in Figma with your brand and aesthetic in mind. You'll receive Loom video walkthroughs of the designs, with two rounds of revisions included to ensure everything feels right.",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "Develop your site with clean code, fast performance, and mobile optimization. Each feature is tested across devices and browsers. You'll see progress updates and can provide feedback before launch.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Deploy your site with proper domain setup, analytics integration, and SEO basics. Includes training on managing your content and 30 days of post-launch support for any questions or adjustments.",
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
            A clear, collaborative approach to bringing your creative vision online
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
