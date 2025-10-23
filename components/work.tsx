import { Card } from "@/components/ui/card";
import Image from "next/image";

// TODO: Add more images and projects.
// - Trek Inside
// - RomancePlanet

const projects = [
  {
    title: "Berryblue",
    description: "Artist website • Portfolio",
    url: "https://ethanthatonekid.github.io/berryblue.html",
    image: "/berryblue.png",
  },
  {
    title: "Wazoo Technologies",
    description: "Marketing site • Design, build, performance",
    url: "https://studio.wazoo.tech",
    image: null,
  },
  {
    title: "FartLabs",
    description: "R&D lab • Brand and web",
    url: "https://fartlabs.org",
    image: null
  },
  {
    title: "Shop",
    description: "Merch storefront • Theme and UX",
    url: "https://shop.fartlabs.org",
    image: null,
  },
  {
    title: "JSONX",
    description: "Developer tool • Docs and UI",
    url: "https://jsonx.fart.tools",
    image: null,
  },
];

export function Work() {
  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4">
            Selected work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A few sites and tools from our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-foreground/20 transition-all duration-300 cursor-pointer"
            >
              {project.image && (
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    width={400}
                    height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  target={project.url.startsWith('http') ? '_blank' : '_self'}
                  rel={project.url.startsWith('http') ? 'noopener' : undefined}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  aria-label={`Visit ${project.title} project`}
                    >
                  {project.url.replace('https://', '').replace('http://', '')} {project.url.startsWith('http') ? '↗' : '→'}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
