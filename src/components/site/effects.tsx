import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/* Animated aurora background — slow drifting violet/indigo/cyan gradients */
export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="aurora-bg animate-aurora absolute -inset-[20%]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, transparent 0%, var(--color-background) 80%)",
        }}
      />
      {/* subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  );
}

/* Cursor-reactive spotlight card */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  return (
    <Tag
      ref={ref as never}
      onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`group relative overflow-hidden rounded-2xl glass transition-colors duration-300 ${className}`}
      style={
        {
          "--x": `${pos.x}px`,
          "--y": `${pos.y}px`,
        } as CSSProperties
      }
    >
      {/* border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(400px circle at var(--x) var(--y), oklch(0.7 0.22 285 / 0.35), transparent 40%)",
        }}
      />
      {/* inner content fill */}
      <div className="relative z-10 h-full">{children}</div>
      {/* faint inner highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(300px circle at var(--x) var(--y), oklch(1 0 0 / 0.06), transparent 50%)",
        }}
      />
    </Tag>
  );
}

/* Staggered fade-up reveal on scroll */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "p" | "h1" | "h2" | "h3" | "li" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/* Per-word reveal headline */
export function RevealHeadline({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  return (
    <h1 ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block whitespace-pre"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(40%)",
            transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay + i * 70}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay + i * 70}ms`,
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h1>
  );
}
