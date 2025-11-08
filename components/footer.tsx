export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          <div>
            <h3 className="text-lg font-display mb-4">Wazoo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A data-driven web studio for artists and creative professionals.
              We build portfolios that get you more clients and sell more art.
              Metrics-driven design focused on real outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="https://wazoo.tech"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Wazoo
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-display mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:ethan@wazoo.tech"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ethan@wazoo.tech
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="https://etok.me/meet"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Start your project
              </a>
            </div>{" "}
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wazoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
