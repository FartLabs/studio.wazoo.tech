import { Card } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Brand & Strategy",
    description:
      "We help define your digital identity and create strategic foundations that guide every design decision.",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Crafting beautiful, intuitive interfaces that engage users and communicate your brand values effectively.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building robust, scalable web applications with modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Digital Products",
    description:
      "End-to-end product design and development, from concept to launch and beyond.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">
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
                  <h3 className="text-xl sm:text-2xl font-normal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
