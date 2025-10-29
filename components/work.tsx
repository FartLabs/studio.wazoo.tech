import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Berryblue",
    description:
      "Self-produced pop artist • Musical background infused into catchy, vulgar and upbeat songs",
    url: "https://ethanthatonekid.github.io/berryblue.html",
    image: "/berryblue.png",
  },
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
    title: "Trek Inside",
    description:
      "A visual archive of images from a trek inside the set of Star Trek: The Next Generation.",
    url: "https://ethanthatonekid.github.io/trek-inside/",
    image: "/trekinside.png",
  },
  {
    title: "FartLabs",
    description: "R&D lab • Brand and web",
    url: "https://fartlabs.org/",
    image: "/fartlabs.png",
  },
  {
    title: "jsonx",
    description:
      "Developer tool • Custom docs site and playground for the jsonx libraries",
    url: "https://jsonx.fart.tools/",
    image: "/jsonx.png",
  },
  {
    title: "Looksie",
    description: "Tinder for clothes AI platform",
    url: "https://trylooksie.vercel.app/",
    image: "/looksie.png",
  },
  {
    title: "snfforms.com",
    description: "Catalog of forms for the skilled nursing facility industry",
    url: "https://snfforms.deno.dev/",
    image: "/snfforms.png",
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
                <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    width={400}
                    height={300}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
