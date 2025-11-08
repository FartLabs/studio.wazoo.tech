import { LightRays } from "@/components/ui/light-rays";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <LightRays />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-sm sm:text-base text-muted-foreground">
            Web Design Studio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-tight text-balance">
            We design websites that help artists and creative professionals
            stand out online
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A boutique web design studio specializing in portfolio websites,
            ecommerce stores, and brand identity for artists, photographers, and
            creative brands. Clean design, fast performance, and founder-led
            communication. Product page fixes in 48 hours. Most projects
            delivered in 1-4 weeks.
          </p>
        </div>
      </div>
    </section>
  );
}
