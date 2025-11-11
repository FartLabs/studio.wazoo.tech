import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "RomancePlanet",
    description: "Electronic music artist • 1.5M+ monthly listeners",
    url: "https://romanceplanet.vercel.app/",
    image: "/romanceplanet.png",
  },
  {
    title: "Hospitality Carpet & Floors",
    description:
      "Premium carpet, floor, and ceiling cleaning for San Diego hospitality — consultation-first website",
    url: "https://hospitality-carpet-and-floors.vercel.app/",
    image: "/hospitality-carpet-and-floors.png",
  },
  {
    title: "Looksie",
    description: "Tinder for clothes AI platform",
    url: "https://trylooksie.vercel.app/",
    image: "/looksie.png",
  },

  {
    title: "FartLabs",
    description: "R&D lab • Brand and web with a humorous spin",
    url: "https://fartlabs.org/",
    image: "/fartlabs.png",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4">
            Selected works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Strategic partnerships with brands, startups, and creatives who
            value both exceptional craft and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-foreground/20 transition-all duration-300 cursor-pointer"
            >
              {project.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-normal mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : "_self"}
                  rel={project.url.startsWith("http") ? "noopener" : undefined}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  aria-label={`Visit ${project.title} project`}
                >
                  Open {project.url.startsWith("http") ? "↗" : "→"}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
