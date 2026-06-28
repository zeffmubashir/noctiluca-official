import { useEffect, useState } from "react";

const links = [
  { href: "#pillars", label: "Architecture" },
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Integrations" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-15px_oklch(0_0_0/0.6)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo />
            <span className="font-medium tracking-tight text-foreground">
              noctiluca<span className="text-muted-foreground">.ai</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#audit"
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_30px_-5px_oklch(1_0_0/0.4)]"
            >
              Book a System Audit
              <Arrow />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="md:hidden rounded-lg p-2 text-foreground hover:bg-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Book a System Audit
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export function Logo({ size = 22 }: { size?: number }) {
  return (
    <span
      className="relative grid place-items-center rounded-md"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span
        className="absolute inset-0 rounded-md animate-pulse-glow"
        style={{
          background: "var(--gradient-accent)",
          filter: "blur(8px)",
          opacity: 0.7,
        }}
      />
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="relative"
        fill="none"
      >
        <path
          d="M12 2 L21 12 L12 22 L3 12 Z"
          stroke="oklch(0.99 0 0)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.2" fill="oklch(0.99 0 0)" />
      </svg>
    </span>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
