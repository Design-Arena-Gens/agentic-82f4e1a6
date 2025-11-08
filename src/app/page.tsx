import Link from "next/link";

const partnerLogos = [
  "Synthwave Labs",
  "NovaCommerce",
  "Orbit SaaS",
  "Pulse Retail",
  "Skyline Ventures",
  "Brightcore AI",
];

const services = [
  {
    title: "Performance Marketing",
    description:
      "Full-funnel paid campaigns engineered with real-time optimisation, conversion psychology, and predictive bidding.",
    highlight: "+147% avg. ROAS",
    icon: (
      <svg
        className="h-12 w-12 text-cyan-300"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 46L26 34L36 42L52 26"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="46"
          r="5"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="26" cy="34" r="5" fill="currentColor" />
        <circle cx="36" cy="42" r="5" fill="currentColor" />
        <circle
          cx="52"
          cy="26"
          r="5"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    ),
  },
  {
    title: "SEO & Authority",
    description:
      "Technical SEO, topical authority architectures, and intent-driven content engines tuned for unstoppable organic growth.",
    highlight: "3.8x organic traffic",
    icon: (
      <svg
        className="h-12 w-12 text-fuchsia-300"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 28C8 16.954 16.954 8 28 8C39.046 8 48 16.954 48 28C48 39.046 39.046 48 28 48C16.954 48 8 39.046 8 28Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M44 44L56 56"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M24 20L36 28L24 36V20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "AI Sales Automation",
    description:
      "Multi-channel workflows that qualify, nurture, and book revenue-ready leads while your team focuses on closing.",
    highlight: "6 hrs saved daily",
    icon: (
      <svg
        className="h-12 w-12 text-emerald-300"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="12"
          y="16"
          width="40"
          height="32"
          rx="8"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M24 32H40"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="28" r="2.5" fill="currentColor" />
        <circle cx="32" cy="28" r="2.5" fill="currentColor" />
        <circle cx="40" cy="28" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
];

const automationPillars = [
  {
    title: "Revenue Intelligence",
    description:
      "AI agents score leads, personalise outreach, and surface next-best actions in real time across your funnel.",
    stat: "+42% SQL velocity",
  },
  {
    title: "Content Generators",
    description:
      "Automated content pipelines produce long-form SEO assets, paid ad variants, and social micro-content on demand.",
    stat: "70% faster production",
  },
  {
    title: "CX Automation",
    description:
      "Conversational AI handles FAQs, onboarding, and reactivation while syncing insights back into your CRM automatically.",
    stat: "24/7 response times",
  },
];

const caseStudies = [
  {
    name: "Orbit SaaS Platform",
    industry: "B2B SaaS",
    result: "Tripled MQL-to-demo conversions in 90 days",
    data: ["+223% pipeline", "38% CAC reduction", "AI SDR squad"],
  },
  {
    name: "Pulse Retail",
    industry: "Ecommerce",
    result: "Doubled revenue per visitor with intent-led journeys",
    data: ["4.2x organic sessions", "9-figure GMV milestone", "62 playbooks automated"],
  },
];

const testimonials = [
  {
    quote:
      "ClickAutomate unlocked every growth lever we were chasing. Their blend of AI automation and performance marketing is pure unfair advantage.",
    name: "Maya Thompson",
    title: "VP Growth, Skyline Ventures",
  },
  {
    quote:
      "We went from manual chaos to always-on, personalised funnels. The team feels bigger without the overhead, and revenue shows it.",
    name: "Jonas Patel",
    title: "CMO, NovaCommerce",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,rgba(56,189,248,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_600px_at_90%_20%,rgba(168,85,247,0.18),transparent)]" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-32 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-16">
          <nav className="glass-panel noise-overlay flex items-center justify-between rounded-3xl px-6 py-4 backdrop-blur">
            <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-base font-bold text-slate-900 shadow-lg shadow-cyan-500/40">
                CA
              </span>
              <span>ClickAutomate</span>
            </div>
            <Link
              href="#contact"
              className="hidden rounded-full border border-cyan-400/40 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200 transition hover:border-cyan-300/80 hover:text-white sm:inline-flex"
            >
              Let&apos;s Talk
            </Link>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/80">
                AI-Native Growth Partner
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                We orchestrate digital marketing, SEO, and AI automations that convert clicks into devoted customers.
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                ClickAutomate blends performance media, human-centered storytelling, and autonomous workflows to deliver compounding growth for ambitious brands. Every playbook is engineered from data, amplified by AI, and monitored by specialists.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:shadow-[0_20px_40px_rgba(56,189,248,0.35)]"
                >
                  Explore Services
                </Link>
                <Link
                  href="#case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-slate-300/70"
                >
                  View Results
                </Link>
              </div>
              <div className="grid gap-4 text-sm uppercase tracking-[0.3em] text-slate-400 sm:grid-cols-3">
                <div className="glass-panel rounded-2xl px-6 py-5 text-center">
                  <p className="text-3xl font-semibold text-white">+312%</p>
                  <p>Pipeline Growth</p>
                </div>
                <div className="glass-panel rounded-2xl px-6 py-5 text-center">
                  <p className="text-3xl font-semibold text-white">28</p>
                  <p>Industry Verticals</p>
                </div>
                <div className="glass-panel rounded-2xl px-6 py-5 text-center">
                  <p className="text-3xl font-semibold text-white">35M+</p>
                  <p>Automated Intents</p>
                </div>
              </div>
            </div>
            <div className="glass-panel noise-overlay relative overflow-hidden rounded-3xl p-10">
              <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-gradient-to-r from-cyan-500/30 via-transparent to-fuchsia-500/40 blur-3xl" />
              <div className="relative space-y-8">
                <h3 className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                  Real-Time Growth Command Center
                </h3>
                <div className="space-y-6 text-sm text-slate-300">
                  <div className="rounded-2xl border border-slate-500/40 bg-slate-900/60 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Media Pulse
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">+187% ROAS</p>
                    <p className="mt-2 text-slate-400">
                      Cross-channel optimisation reacting to live intent signals.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-500/40 bg-slate-900/60 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Automation Flow
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">63 playbooks live</p>
                    <p className="mt-2 text-slate-400">
                      AI agents qualifying, nurturing, and booking meetings 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-8">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-slate-500">
            TRUSTED BY TEAMS SHAPING THE FUTURE
          </p>
          <div className="glass-panel noise-overlay grid grid-cols-2 gap-6 rounded-3xl px-8 py-10 text-sm font-medium text-slate-300 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-center uppercase tracking-[0.3em] text-slate-200/80"
              >
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Growth services engineered for compound impact.
              </h2>
              <p className="text-lg text-slate-300">
                Build an always-on acquisition machine with experts who design, launch, and iterate relentlessly. From the first impression to loyal advocacy, we automate the journey.
              </p>
            </div>
            <Link
              href="#contact"
              className="self-start rounded-full border border-cyan-400/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-200"
            >
              Book Strategy Call
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-panel noise-overlay flex h-full flex-col gap-6 rounded-3xl p-8"
              >
                <div>{service.icon}</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cyan-200">
                  <span>{service.highlight}</span>
                  <span>Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              AI automations architected for seamless revenue operations.
            </h2>
            <p className="text-lg text-slate-300">
              Our automation engineers connect your stack, enrich data, and deploy AI agents tailored to your voice. The outcome: faster cycles, smarter decisions, and customer experiences that feel hand-crafted.
            </p>
            <div className="space-y-6">
              {automationPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="glass-panel noise-overlay rounded-3xl p-8"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                      {pillar.stat}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel noise-overlay flex flex-col justify-between rounded-3xl p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Unified Data & Insights
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                The ClickAutomate operating system keeps humans in control while AI handles the heavy lifting.
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Daily intelligence dashboards surface emerging opportunities, campaign shifts, and automation wins with plain-language insights.
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Revenue-grade prompts tuned to your brand voice and compliance requirements.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
                Bi-directional CRM sync keeping sales, marketing, and service aligned.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Human-in-the-loop approvals for sensitive triggers and high-value deals.
              </li>
            </ul>
          </div>
        </section>

        <section id="case-studies" className="space-y-12">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                Proof stitched into every partnership.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Our teams embed alongside yours. We set aggressive targets, align incentives, and prove impact week after week.
              </p>
            </div>
            <Link
              href="#contact"
              className="rounded-full border border-fuchsia-400/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-100 transition hover:border-fuchsia-200"
            >
              Request a Case Study
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.name}
                className="glass-panel noise-overlay flex h-full flex-col gap-6 rounded-3xl p-8"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {study.industry}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {study.name}
                  </h3>
                  <p className="text-sm text-slate-300">{study.result}</p>
                </div>
                <div className="grid gap-4 text-sm uppercase tracking-[0.3em] text-slate-200">
                  {study.data.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              People-first partnerships, amplified by automation.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="glass-panel noise-overlay flex h-full flex-col justify-between rounded-3xl p-8"
                >
                  <p className="text-lg italic text-slate-200">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-6 text-sm text-slate-400">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel noise-overlay flex flex-col justify-between gap-8 rounded-3xl p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Why it works
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                An elite pod crew working as your embedded growth team.
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Strategists, media buyers, data scientists, and automation engineers operate inside your comms stack from day zero.
              </p>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Weekly growth rituals aligning roadmap, experiments, and pipeline impact.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
                Attribution clarity across paid, organic, lifecycle, and partner channels.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                AI-guided creative testing combining human ideation with machine-speed iteration.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="glass-panel noise-overlay grid gap-12 rounded-3xl px-10 py-14 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
              Ready to accelerate?
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Let’s design an automation-first growth engine for your brand.
            </h2>
            <p className="text-sm text-slate-300">
              Share your current KPIs, challenges, and north star metrics. We’ll audit your funnel, map quick wins, and co-build an execution roadmap in under 7 days.
            </p>
            <div className="flex flex-col gap-4 text-sm text-slate-200">
              <div>
                <span className="block font-semibold text-white">Email</span>
                <Link href="mailto:hello@clickautomate.co" className="text-cyan-200">
                  hello@clickautomate.co
                </Link>
              </div>
              <div>
                <span className="block font-semibold text-white">HQ</span>
                <p>Global team operating remotely across North America & EMEA</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm font-medium">Name
                <input
                  type="text"
                  placeholder="Jordan Smith"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  required
                />
              </label>
              <label className="text-sm font-medium">Work Email
                <input
                  type="email"
                  placeholder="team@clickautomate.co"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  required
                />
              </label>
            </div>
            <label className="text-sm font-medium">Primary Goal
              <input
                type="text"
                placeholder="Scale qualified pipeline, reduce CPA, launch AI workflows..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                required
              />
            </label>
            <label className="text-sm font-medium">Current Tools & Stack
              <textarea
                rows={4}
                placeholder="HubSpot, Shopify, Webflow, Segment, Gong, Zapier, custom data warehouse..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)]"
            >
              Schedule Discovery Call
            </button>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">
              We respond within 24 hours.
            </p>
          </form>
        </section>

        <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-xs uppercase tracking-[0.3em] text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ClickAutomate. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#services" className="transition hover:text-slate-200">
              Services
            </Link>
            <Link href="#case-studies" className="transition hover:text-slate-200">
              Case Studies
            </Link>
            <Link href="#contact" className="transition hover:text-slate-200">
              Contact
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
