import { LightRays } from "@/components/ui/light-rays";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <LightRays />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-sm sm:text-base text-muted-foreground">
              Digital Product Studio
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Small team, senior expertise
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-tight text-balance">
            Strategic craft that drives results
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every project starts with understanding your brand&#39;s reason for
            being, then translates that into digital experiences that perform.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="text-base px-8 py-6">
              <a
                href="https://etok.me/meet"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center"
              >
                Start your project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
