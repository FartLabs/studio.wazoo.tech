const processSteps = [
  {
    number: "01",
    title: "Diagnose the Opportunity",
    description:
      "We use analytics and heatmap tools to see where visitors get stuck, what they click on, and where they drop off. Are potential clients leaving before contacting you? Is your best work buried in the gallery? Every insight is grounded in real data about how people interact with your site.",
  },
  {
    number: "02",
    title: "Intervene with Purpose",
    description:
      "Based on the data, we implement high-impact changes: optimize CTAs to get more inquiries, simplify contact forms to reduce friction, add trust signals like testimonials, or reorganize galleries to showcase your best work first. No bloated redesigns—just precise updates that drive results.",
  },
  {
    number: "03",
    title: "Ship with Clarity",
    description:
      "Each change ships on a clear timeline with Figma frames, Loom walkthroughs, and versioned code or design links. You'll see exactly what's being done and why, before anything goes live. We connect every design decision to your goals: more clients, more sales, stronger brand.",
  },
  {
    number: "04",
    title: "Report and Iterate",
    description:
      "We deliver a before-and-after report showing the improvements. Then we track artist-focused metrics: contact form submissions, e-commerce conversion, newsletter signups. If something works, we build on it. If not, we refine. That's how we turn single wins into long-term growth.",
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
            Our process blends creative precision with data-driven insights. Every engagement focuses on achieving your specific goals: get more clients, sell more art, or build a stronger brand.
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
