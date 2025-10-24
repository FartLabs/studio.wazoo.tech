import { Card } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Portfolio Websites",
    description:
      "Showcase your creative work with custom portfolio sites. Includes responsive design, image galleries, about/contact pages, and CMS integration. Perfect for photographers, illustrators, and designers.",
    deliverables: "10-15 pages, mobile-optimized galleries, 2 revision rounds",
    timeline: "2-3 weeks",
  },
  {
    number: "02",
    title: "Ecommerce Stores",
    description:
      "Sell your art, prints, or products online with custom Shopify or headless commerce builds. Includes product pages, cart, checkout integration, and payment processing.",
    deliverables: "Full storefront, payment setup, inventory management",
    timeline: "4-6 weeks",
  },
  {
    number: "03",
    title: "Brand Identity & Web Design",
    description:
      "Complete digital presence from logo design to website launch. We help define your visual identity and build a cohesive online brand that resonates with your audience.",
    deliverables: "Logo, color palette, typography, website design",
    timeline: "4-8 weeks",
  },
  {
    number: "04",
    title: "Website Optimization",
    description:
      "Improve your existing site's performance, speed, and user experience. We audit, diagnose friction points, and implement targeted improvements for better results.",
    deliverables: "Performance audit, speed optimization, UX improvements",
    timeline: "1-2 weeks",
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
            We offer comprehensive design and development services tailored to
            your needs
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
