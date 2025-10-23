import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Meridian",
    description: "Building a seamless path to better digital health",
    tags: ["Design", "Development", "Strategy"],
    image: "/modern-healthcare-app-interface-on-desktop.jpg",
  },
  {
    title: "Cascade Coffee",
    description:
      "Elevating artisan coffee culture through digital storytelling",
    tags: ["Design", "E-commerce", "Branding"],
    image: "/coffee-shop-mobile-app-with-product-photos.jpg",
  },
  {
    title: "Apex Architecture",
    description: "Distilling architectural impact to its spatial essence",
    tags: ["Design", "Development", "Content"],
    image: "/minimalist-architecture-portfolio-website.jpg",
  },
  {
    title: "Lumina",
    description: "Bringing clarity and elegance to financial technology",
    tags: ["Design", "Development", "UX"],
    image: "/modern-fintech-dashboard.png",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">
            Selected work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-foreground/20 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-normal mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
