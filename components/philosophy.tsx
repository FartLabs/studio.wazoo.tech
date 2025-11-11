export function Philosophy() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4">
            Our approach
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Strong opinions. Strategic thinking. Exceptional craft. Design
            expresses your brand—and it must perform.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A small, senior team works with you directly. Strategy and craft
              stay aligned, and every decision serves brand and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-8 border-t border-border">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-normal">
                What we do
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We build brand-led digital products and websites. From identity
                to implementation. Strategy first, experiences that perform.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-normal">
                Who we partner with
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Brands, startups, and creatives who value strategy and craft.
                You work directly with senior practitioners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
