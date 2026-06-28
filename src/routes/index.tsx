import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Aurora, Reveal, RevealHeadline, SpotlightCard } from "@/components/site/effects";
import { Logo, Nav } from "@/components/site/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "noctiluca.ai — Autonomous Infrastructure for High-Scale Operations" },
      {
        name: "description",
        content:
          "We engineer custom agentic workflows that deploy autonomous sales, support, and operations infrastructure for high-scale companies.",
      },
      { property: "og:title", content: "noctiluca.ai — The Operating System for Modern Business" },
      {
        property: "og:description",
        content:
          "Stop renting tools. Start building assets. We architect the systems that scale your revenue.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main id="top" className="relative min-h-screen text-foreground">
      <Aurora />
      <Nav />
      <Hero />
      <ClientStrip />
      <Pillars />
      <Impact />
      <Work />
      <Stack />
      <Faq />
      <Audit />
      <Footer />
    </main>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-aurora-cyan animate-pulse-glow" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-aurora-cyan" />
            </span>
            Now deploying agentic systems for Q2 2026
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>

        <RevealHeadline
          text="The Operating System for Modern Business."
          delay={150}
          className="mx-auto mt-8 max-w-4xl text-balance text-5xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] leading-[1.02] text-gradient"
        />

        <Reveal delay={650}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
            We engineer custom agentic workflows that eliminate manual friction.
            Deploy autonomous sales, support, and operations infrastructure that
            runs 24/7 without human oversight.
          </p>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#audit"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-10px_oklch(1_0_0/0.5)]"
            >
              Book a System Audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
            >
              Explore Architecture
            </a>
          </div>
        </Reveal>

        <Reveal delay={1000}>
          <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Engineering tier-1 systems for marketing · recruitment · real estate · logistics · travel
          </p>
        </Reveal>
      </div>

      {/* Hero visual: orbital diagram */}
      <Reveal delay={1100}>
        <div className="mx-auto mt-20 max-w-5xl px-6">
          <OrbitalDiagram />
        </div>
      </Reveal>
    </section>
  );
}

function OrbitalDiagram() {
  return (
    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl glass-strong">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="oklch(0.99 0 0)" stopOpacity="1" />
            <stop offset="60%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.7 0.18 220)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 285)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[80, 140, 200].map((r, i) => (
          <ellipse
            key={r}
            cx="400"
            cy="200"
            rx={r * 1.6}
            ry={r}
            fill="none"
            stroke="oklch(1 0 0 / 0.08)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "2 6" : undefined}
          />
        ))}

        <circle cx="400" cy="200" r="80" fill="url(#core)" />
        <circle cx="400" cy="200" r="6" fill="oklch(0.99 0 0)" />

        {/* Orbital nodes */}
        {[
          { x: 80, y: 200, l: "CRM" },
          { x: 720, y: 200, l: "Voice" },
          { x: 240, y: 80, l: "Outbound" },
          { x: 560, y: 80, l: "Routing" },
          { x: 240, y: 320, l: "Support" },
          { x: 560, y: 320, l: "Analytics" },
        ].map((n) => (
          <g key={n.l}>
            <line x1="400" y1="200" x2={n.x} y2={n.y} stroke="url(#line)" strokeWidth="1" />
            <circle cx={n.x} cy={n.y} r="4" fill="oklch(0.99 0 0)" />
            <circle cx={n.x} cy={n.y} r="10" fill="oklch(0.65 0.22 285 / 0.2)" />
            <text
              x={n.x}
              y={n.y - 16}
              textAnchor="middle"
              fontSize="10"
              fontFamily="Geist Mono, monospace"
              fill="oklch(0.75 0.02 280)"
              letterSpacing="1"
            >
              {n.l.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>

      {/* Floating status chips */}
      <div className="absolute left-4 top-4 flex flex-col gap-1.5 font-mono text-[10px] text-muted-foreground">
        <span className="rounded bg-background/60 px-2 py-1">system.status: operational</span>
        <span className="rounded bg-background/60 px-2 py-1">agents.active: 42</span>
      </div>
      <div className="absolute right-4 bottom-4 flex flex-col items-end gap-1.5 font-mono text-[10px] text-muted-foreground">
        <span className="rounded bg-background/60 px-2 py-1">latency: 84ms</span>
        <span className="rounded bg-background/60 px-2 py-1">uptime: 99.99%</span>
      </div>
    </div>
  );
}

/* ---------- CLIENT STRIP ---------- */
function ClientStrip() {
  const verticals = ["Marketing", "Recruitment", "Real Estate", "Logistics", "Travel"];
  return (
    <section className="relative border-y border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm">
          {verticals.map((v, i) => (
            <Reveal key={v} delay={i * 80} as="span" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
              {v}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PILLARS ---------- */
function Pillars() {
  const items = [
    {
      kicker: "01 / Growth Infrastructure",
      title: "Autonomous outbound that qualifies, enriches, and books — directly into your CRM.",
      points: ["AI sales agents", "AI calling agents", "Lead enrichment & scoring", "Pipeline orchestration"],
      icon: <PillarIconGrowth />,
    },
    {
      kicker: "02 / Operational Velocity",
      title: "Self-healing workflows for logistics and recruitment. Documentation, routing, data entry — instant.",
      points: ["Workflow automation", "Document intelligence", "CRM implementation", "Internal business tools"],
      icon: <PillarIconOps />,
    },
    {
      kicker: "03 / Client Experience Engines",
      title: "Always-on support that resolves complex queries and manages bookings with absolute accuracy.",
      points: ["Support AI assistants", "Appointment booking", "Knowledge base agents", "Analytics dashboards"],
      icon: <PillarIconCX />,
    },
  ];

  return (
    <section id="pillars" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Architecture"
          title="Three layers. One autonomous core."
          sub="We don't ship tools — we architect systems. Every engagement composes from three pillars that interlock around your existing stack."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.kicker} delay={i * 120}>
              <SpotlightCard className="p-7 h-full">
                <div className="flex h-full flex-col">
                  <div className="mb-6">{p.icon}</div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.kicker}
                  </p>
                  <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-aurora-cyan" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-12 text-center text-sm text-muted-foreground italic">
            "Stop renting tools. Start building assets. We don't just automate tasks; we architect the systems that scale your revenue."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PillarIconGrowth() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="0.5" y="0.5" width="35" height="35" rx="8" stroke="oklch(1 0 0 / 0.15)" />
      <path d="M9 24 L15 18 L20 22 L27 12" stroke="oklch(0.99 0 0)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27" cy="12" r="2" fill="oklch(0.7 0.22 285)" />
    </svg>
  );
}
function PillarIconOps() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="0.5" y="0.5" width="35" height="35" rx="8" stroke="oklch(1 0 0 / 0.15)" />
      <circle cx="18" cy="18" r="4" stroke="oklch(0.99 0 0)" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="9" stroke="oklch(0.99 0 0 / 0.4)" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M18 7v2M18 27v2M7 18h2M27 18h2" stroke="oklch(0.99 0 0)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function PillarIconCX() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="0.5" y="0.5" width="35" height="35" rx="8" stroke="oklch(1 0 0 / 0.15)" />
      <path d="M9 13 a4 4 0 0 1 4 -4 h10 a4 4 0 0 1 4 4 v6 a4 4 0 0 1 -4 4 h-6 l-5 4 v-4 a4 4 0 0 1 -3 -4 z" stroke="oklch(0.99 0 0)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="14" cy="16" r="1" fill="oklch(0.99 0 0)" />
      <circle cx="18" cy="16" r="1" fill="oklch(0.99 0 0)" />
      <circle cx="22" cy="16" r="1" fill="oklch(0.99 0 0)" />
    </svg>
  );
}

/* ---------- IMPACT METRICS ---------- */
function Impact() {
  const stats = [
    { value: "94%", label: "Reduction in Manual Data Entry", context: "Logistics & supply chain — automated documentation routing." },
    { value: "3×", label: "Increase in Lead Response Speed", context: "Real estate & recruitment — AI voice agent deployment." },
    { value: "4,200+", label: "Hours Reclaimed Annually", context: "End-to-end CRM and workflow automation for mid-sized agencies." },
  ];
  return (
    <section id="impact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Impact"
          title="Measured in hours returned, not features shipped."
          sub="Production figures from live deployments across logistics, real estate, and recruitment verticals."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 150}>
              <SpotlightCard className="p-8 h-full">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Metric · 0{i + 1}
                </div>
                <div className="mt-6 text-6xl md:text-7xl font-medium tracking-[-0.04em] text-gradient-accent leading-none">
                  {s.value}
                </div>
                <div className="mt-5 text-base font-medium text-foreground">{s.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.context}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WORK / CASE STUDIES ---------- */
function Work() {
  const cases = [
    {
      tag: "Logistics",
      title: "Self-routing documentation engine for a freight network operating across 14 lanes.",
      result: "94% manual data entry eliminated · 18s avg document turnaround",
      stack: ["AI Routing", "OCR Pipeline", "Workflow Engine"],
    },
    {
      tag: "Real Estate",
      title: "AI voice qualifier that handles inbound buyer inquiries 24/7 and books showings into the CRM.",
      result: "3× faster response · 41% lift in qualified appointments",
      stack: ["Voice Agent", "CRM Sync", "Calendar Orchestration"],
    },
    {
      tag: "Recruitment",
      title: "End-to-end candidate intake — sourcing, enrichment, screening, scheduling — running autonomously.",
      result: "4,200+ recruiter hours reclaimed annually",
      stack: ["Sourcing Agent", "Enrichment", "Screening AI"],
    },
    {
      tag: "Marketing Agency",
      title: "Outbound infrastructure unifying enrichment, sequencing, and meeting booking into a single autonomous loop.",
      result: "2.4× pipeline velocity · zero manual list-building",
      stack: ["Outbound Agent", "Lead Scoring", "Pipeline Ops"],
    },
  ];

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Deployed systems. Live in production."
          sub="A selection of agentic infrastructure currently operating inside client environments."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 120}>
              <SpotlightCard className="p-8 h-full">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">CASE · 0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium leading-snug tracking-tight text-foreground">
                  {c.title}
                </h3>
                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="text-sm text-foreground">{c.result}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STACK / INTEGRATIONS ---------- */
function Stack() {
  const groups = [
    { title: "CRM & Sales", items: ["Salesforce", "HubSpot", "Pipedrive", "Attio", "Close"] },
    { title: "Comms & Voice", items: ["Twilio", "Vapi", "Retell", "ElevenLabs", "WhatsApp"] },
    { title: "Workflow & Data", items: ["Snowflake", "Postgres", "n8n", "Temporal", "Make"] },
    { title: "AI Models", items: ["OpenAI", "Anthropic", "Mistral", "Llama", "Gemini"] },
  ];

  return (
    <section id="stack" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Integrations"
          title="Composes with the stack you already pay for."
          sub="Native, bidirectional connectivity into the enterprise tools your operations are built on."
        />

        <Reveal delay={150}>
          <div className="mt-16 overflow-hidden rounded-3xl glass-strong">
            <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
              {groups.map((g) => (
                <div key={g.title} className="p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {g.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2.5 text-sm text-foreground"
                      >
                        <span className="grid h-6 w-6 place-items-center rounded-md border border-border-strong bg-surface text-[10px] font-mono text-muted-foreground">
                          {it.slice(0, 2).toUpperCase()}
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const items = [
    {
      q: "Where does our data live, and who has access?",
      a: "Every deployment runs inside infrastructure you own — your cloud account, your VPC, your encryption keys. We hold zero customer data at rest. Access is role-scoped, audit-logged, and reviewed quarterly with your security team.",
    },
    {
      q: "How do you handle PII and regulated data (GDPR, SOC 2, HIPAA)?",
      a: "Systems are architected to data-residency requirements from day one. We support EU-only inference, PII redaction at the model boundary, and BAAs where applicable. SOC 2 Type II report available under NDA.",
    },
    {
      q: "What stops the AI from going off-script with our customers?",
      a: "Every agent runs inside a deterministic policy layer with hard guardrails, allowlisted actions, and human-in-the-loop checkpoints for any irreversible operation. You see every decision, every call, every message — in real time.",
    },
    {
      q: "How long until something is in production?",
      a: "First production workflow ships in 3–5 weeks. We deploy in tight increments — audit, architect, build, harden, hand over — not 9-month transformations.",
    },
    {
      q: "Do you replace our existing vendors?",
      a: "Rarely. We integrate. The point is to make the tools you already pay for finally do the work you bought them to do.",
    },
    {
      q: "What happens after launch?",
      a: "You own the system. We offer a retainer for ongoing model tuning, observability, and feature expansion — but the code, the workflows, and the data stay yours.",
    },
  ];

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Engineering questions, answered honestly."
          sub="Security and reliability questions we hear from CTOs and Heads of Operations."
        />

        <div className="mt-16 divide-y divide-border rounded-2xl glass">
          {items.map((it, i) => (
            <FaqItem key={it.q} q={it.q} a={it.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 60}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="flex gap-4">
          <span className="font-mono text-[11px] tabular-nums text-muted-foreground/70 pt-1">
            0{index + 1}
          </span>
          <span className="text-base font-medium text-foreground">{q}</span>
        </span>
        <span
          className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border-strong text-muted-foreground transition-transform"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid overflow-hidden px-6 transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-6 pl-10 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- AUDIT / CONTACT ---------- */
function Audit() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="audit" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SpotlightCard className="relative overflow-hidden p-10 md:p-16">
            <div
              aria-hidden
              className="absolute -inset-px -z-0 opacity-60"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <div className="relative grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Book a System Audit
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient">
                  90 minutes. Mapped to your stack. Zero fluff.
                </h2>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
                  We audit your current operations, identify the three highest-leverage
                  automation surfaces, and ship a written architecture proposal within 7 days.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  {[
                    "NDA-first engagement",
                    "Written deliverable, not a sales call",
                    "Reply within one business day",
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-2.5">
                      <Check />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="glass-strong rounded-2xl p-6 space-y-4"
              >
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-aurora-cyan/15">
                      <Check />
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-foreground">Request received.</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      You'll hear from our engineering lead within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <FormField label="Name" name="name" placeholder="Ada Lovelace" />
                    <FormField label="Work Email" name="email" type="email" placeholder="ada@company.com" />
                    <FormField label="Company" name="company" placeholder="Acme Logistics" />
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                        Operational Surface
                      </label>
                      <select
                        name="surface"
                        className="w-full rounded-lg border border-border-strong bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      >
                        <option>Sales & outbound</option>
                        <option>Customer support</option>
                        <option>Operations & logistics</option>
                        <option>Recruitment workflow</option>
                        <option>Multiple / unsure</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px_oklch(1_0_0/0.5)]"
                    >
                      Request System Audit
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground/70">
                      We respond within one business day. NDA on request.
                    </p>
                  </>
                )}
              </form>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border-strong bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-aurora-cyan">
      <path d="M2 7.5 L5.5 11 L12 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Logo size={20} />
            <span className="font-medium tracking-tight">
              noctiluca<span className="text-muted-foreground">.ai</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#pillars" className="hover:text-foreground">Architecture</a>
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#stack" className="hover:text-foreground">Integrations</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href="#audit" className="hover:text-foreground">Audit</a>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} noctiluca labs
          </p>
        </div>

        <div className="mt-10 text-pretty text-xs text-muted-foreground/70 max-w-2xl">
          noctiluca.ai — autonomous infrastructure for high-scale operations. Engineered for marketing, recruitment, real estate, logistics, and travel.
        </div>
      </div>
    </footer>
  );
}

/* ---------- shared ---------- */
function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 text-balance text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient">
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={200}>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

