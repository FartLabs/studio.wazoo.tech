import { Card } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Digital Identity",
    description:
      "Complete brand ecosystems from strategy to implementation. We help define your brand&#39;s reason for being, then translate that into a cohesive visual identity and digital presence. This isn&#39;t just a logo and website—it&#39;s a complete brand world that reflects your position in the market.",
    deliverables:
      "Brand strategy, visual identity, logo, color palette, typography, brand guidelines, website design",
    timeline: "4-8 weeks",
  },
  {
    number: "02",
    title: "Strategic Digital Products",
    description:
      "Sophisticated websites and web applications built with strategic intent. We start by understanding your brand&#39;s position and goals, then craft digital experiences that reflect that strategy with precision. Every design decision serves both your brand and your business objectives.",
    deliverables:
      "Custom website or application, strategic UX, responsive design, performance optimization, analytics setup",
    timeline: "3-8 weeks",
  },
  {
    number: "03",
    title: "Ecommerce & Digital Commerce",
    description:
      "Brand-led commerce experiences that blend strategic thinking with conversion optimization. We build custom Shopify or headless commerce solutions that reflect your brand&#39;s identity while driving sales. Every element—from product pages to checkout—is crafted with both brand and business in mind.",
    deliverables:
      "Custom storefront, payment integration, inventory management, conversion optimization, analytics",
    timeline: "4-10 weeks",
  },
  {
    number: "04",
    title: "Digital Experience Optimization",
    description:
      "Strategic improvements to existing digital properties. We audit your current experience through both a brand lens and performance metrics, then implement targeted enhancements that elevate both craft and outcomes. Works with sites we&#39;ve built or existing properties.",
    deliverables:
      "Strategic audit, brand alignment review, UX improvements, performance optimization, before-and-after analysis",
    timeline: "1-3 weeks",
  },
  {
    number: "05",
    title: "Performance & Technical Excellence",
    description:
      "Technical craft that matches strategic thinking. We optimize existing sites for speed, performance, and user experience—ensuring your digital presence performs as well as it looks. Fast-loading, accessible, and built to last.",
    deliverables:
      "Performance audit, speed optimization, accessibility improvements, technical documentation",
    timeline: "1-2 weeks",
  },
  {
    number: "06",
    title: "Ongoing Strategic Partnership",
    description:
      "Long-term collaboration focused on continuous improvement and strategic growth. We work as an extension of your team, making strategic improvements that compound over time. Track metrics that matter, iterate on what works, and evolve your digital presence as your brand grows.",
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
            Strategic brand-led digital work that blends deep thinking with
            exceptional craft. Every project starts with understanding your
            brand&#39;s position, then translates that strategy into digital
            experiences that perform.
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
