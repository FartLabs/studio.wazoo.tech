const processSteps = [
  {
    number: "01",
    title: "Strategic Discovery",
    description:
      "We start by understanding your brand&#39;s position in the market, your goals, and what makes you distinct. This isn&#39;t just a brief—it&#39;s a deep dive into your brand&#39;s reason for being. We ask the hard questions, challenge assumptions, and develop a strategic foundation that informs every decision that follows.",
  },
  {
    number: "02",
    title: "Craft with Intent",
    description:
      "With strategy as our guide, we craft digital experiences that reflect your brand with precision. Every design decision—from typography to interaction—serves both your brand identity and your business objectives. We blend exceptional craft with strategic thinking, ensuring form and function work in harmony.",
  },
  {
    number: "03",
    title: "Build & Refine",
    description:
      "We build with the same attention to detail we bring to strategy and design. You work directly with senior practitioners throughout the process, with clear communication and transparent timelines. Every deliverable connects back to the strategic foundation we established, ensuring consistency from concept to launch.",
  },
  {
    number: "04",
    title: "Measure & Evolve",
    description:
      "After launch, we track what matters: how your digital presence performs against your goals, how it reflects your brand, and where it can evolve. We measure both craft and outcomes, then iterate strategically. Great digital work isn&#39;t finished at launch—it evolves as your brand grows.",
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
            Our process blends strategic thinking with exceptional craft. We
            start with understanding your brand&#39;s position, then translate that
            strategy into digital experiences that perform. Every step connects
            back to your goals—both brand and business.
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
