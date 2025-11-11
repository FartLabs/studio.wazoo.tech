import { Card } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Digital Identity",
    description:
      "From strategy to identity to digital. Define your position, then express it consistently across your brand and web.",
    deliverables:
      "Brand strategy, visual identity, logo, color palette, typography, brand guidelines, website design",
    timeline: "4-8 weeks",
  },
  {
    number: "02",
    title: "Strategic Digital Products",
    description:
      "Websites and web apps built with strategic intent. Every decision serves brand and business.",
    deliverables:
      "Custom website or application, strategic UX, responsive design, performance optimization, analytics setup",
    timeline: "3-8 weeks",
  },
  {
    number: "03",
    title: "Ecommerce & Digital Commerce",
    description:
      "Brand-led commerce that converts. Custom Shopify or headless builds that reflect identity and drive sales.",
    deliverables:
      "Custom storefront, payment integration, inventory management, conversion optimization, analytics",
    timeline: "4-10 weeks",
  },
  {
    number: "04",
    title: "Digital Experience Optimization",
    description:
      "Targeted, strategic improvements to your existing site—through both a brand lens and performance metrics.",
    deliverables:
      "Strategic audit, brand alignment review, UX improvements, performance optimization, before-and-after analysis",
    timeline: "1-3 weeks",
  },
  {
    number: "05",
    title: "Performance & Technical Excellence",
    description:
      "Speed, accessibility, and durability. Technical excellence that matches strategic thinking.",
    deliverables:
      "Performance audit, speed optimization, accessibility improvements, technical documentation",
    timeline: "1-2 weeks",
  },
  {
    number: "06",
    title: "Ongoing Strategic Partnership",
    description:
      "Long-term collaboration for continuous, strategic improvement. Measure what matters and iterate.",
    deliverables:
      "Monthly strategic reviews, continuous optimization, performance tracking, iterative improvements",
    timeline: "Ongoing",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4">
            Our services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Strategic, brand-led digital work. We start with positioning and
            translate it into experiences that perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 border-border hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-4xl sm:text-5xl font-normal text-muted-foreground/40">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-display font-normal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>
                      <strong>Includes:</strong> {service.deliverables}
                    </p>
                    <p>
                      <strong>Timeline:</strong> {service.timeline}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
