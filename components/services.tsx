import { Card } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Portfolio Optimization Packages",
    description:
      "Data-driven optimization for existing artist sites (even ones we didn't build). We use analytics and heatmaps to find where potential clients drop off, then implement high-impact fixes. A/B test CTAs, simplify contact forms, add trust signals, and optimize gallery layouts to get more inquiries and sales.",
    deliverables:
      "Analytics audit, heatmap analysis, UX improvements, before-and-after report, conversion optimization",
    timeline: "48 hours - 1 week",
  },
  {
    number: "02",
    title: "Strategic Portfolio Websites",
    description:
      "A strategic portfolio that functions as your 24/7 sales agent. We use proven design principles to not only showcase your work but also to build trust and encourage inquiries. Designed to convert visitors into clients, not just display your art beautifully.",
    deliverables:
      "10-15 pages, mobile-optimized galleries, contact/commission flow, analytics setup, 2 revision rounds",
    timeline: "1-2 weeks",
  },
  {
    number: "03",
    title: "Ecommerce Stores for Artists",
    description:
      "Sell your art, prints, or products online with custom Shopify or headless commerce builds. Metrics-driven design focused on getting more sales. Includes optimized product pages, streamlined checkout, and payment processing—all designed to reduce friction and increase revenue.",
    deliverables:
      "Full storefront, payment setup, inventory management, analytics integration, conversion optimization",
    timeline: "2-4 weeks",
  },
  {
    number: "04",
    title: "Brand Identity & Web Design",
    description:
      "Complete digital presence from logo design to website launch. We help define your visual identity and build a cohesive online brand that resonates with your audience and builds trust—essential for converting visitors into clients and buyers.",
    deliverables:
      "Logo, color palette, typography, website design, brand guidelines",
    timeline: "3-6 weeks",
  },
  {
    number: "05",
    title: "Website Performance Optimization",
    description:
      "Improve your existing site's performance, speed, and user experience. We audit, diagnose friction points, and implement targeted improvements. A fast-loading site means potential buyers won't click away, directly impacting your ability to get more clients and sales.",
    deliverables:
      "Performance audit, speed optimization, UX improvements, before-and-after metrics",
    timeline: "3-5 days",
  },
  {
    number: "06",
    title: "Creative Growth & Analytics Retainers",
    description:
      "Monthly partnership focused on achieving your specific goals: get more clients, sell more art, or build a stronger brand. We track artist-focused metrics (contact form submissions, e-commerce conversion, newsletter signups) and make one data-backed improvement each month to drive compounding growth.",
    deliverables:
      "Monthly analytics reports, continuous optimization, A/B testing, SEO improvements, goal tracking",
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
            Data-driven services designed to help artists achieve real outcomes:
            get more clients, sell more art, and build a stronger brand. Every
            project connects design decisions to tangible business results.
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
