import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4 text-balance">
            Ready to bring your creative vision online?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2">
            Let&apos;s discuss your project and see if we&apos;re a good fit.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Most inquiries answered within 24 hours • Free 30-minute
            consultation
          </p>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <a
              href="https://etok.me/meet"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center"
            >
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
