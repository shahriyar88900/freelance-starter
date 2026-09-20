const features = [
  {
    icon: "✦",
    title: "AI-powered workflows",
    text: "Turn repetitive processes into intelligent automations that run quietly in the background.",
  },
  {
    icon: "↗",
    title: "One clear workspace",
    text: "Bring tasks, approvals, conversations, and project context together in one calm place.",
  },
  {
    icon: "◉",
    title: "Built for momentum",
    text: "See what matters next with real-time insights designed to keep your team moving.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    text: "Bring your existing apps, data, and team workflows into FlowPilot.",
  },
  {
    number: "02",
    title: "Describe the outcome",
    text: "Tell FlowPilot what you want to achieve in plain, simple language.",
  },
  {
    number: "03",
    title: "Let work flow",
    text: "Your AI workflows handle the busywork while your team focuses on growth.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals exploring a smarter way to work.",
    features: ["3 active workflows", "Basic AI actions", "Personal workspace"],
  },
  {
    name: "Scale",
    price: "$24",
    description: "For growing teams ready to move faster.",
    features: ["Unlimited workflows", "Advanced AI actions", "Team collaboration"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with complex workflows.",
    features: ["Dedicated workspace", "Priority support", "Custom integrations"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute right-[-180px] top-[520px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-500 text-lg font-black text-[#07111f]">
            F
          </span>
          <span className="text-xl font-semibold tracking-tight">FlowPilot</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#how-it-works" className="transition hover:text-white">How it works</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm text-slate-300 transition hover:text-white sm:block">
            Sign in
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-200"
          >
            Get started
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            The calm operating system for modern teams
          </div>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            Turn busywork into{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
              business momentum.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            FlowPilot brings your team&apos;s workflows, approvals, and AI automations into one calm, intelligent workspace.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-200"
            >
              Start for free <span className="ml-2">→</span>
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0c1b2e]/90 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-slate-500">flowpilot.app / workspace</span>
              <span className="text-xs text-cyan-300">● Live</span>
            </div>

            <div className="grid gap-0 md:grid-cols-[180px_1fr]">
              <aside className="hidden border-r border-white/10 p-5 md:block">
                <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Workspace</p>
                <div className="space-y-4 text-sm text-slate-400">
                  <p className="rounded-lg bg-white/10 px-3 py-2 text-white">Overview</p>
                  <p>Automations</p>
                  <p>Approvals</p>
                  <p>Analytics</p>
                </div>
              </aside>

              <div className="p-5 sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-sm text-slate-400">Monday, September 20</p>
                    <h2 className="mt-2 text-2xl font-semibold">Good morning, Shahriyar</h2>
                  </div>
                  <button className="w-fit rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-[#07111f]">
                    + New workflow
                  </button>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs text-slate-400">Tasks automated</p>
                    <p className="mt-2 text-3xl font-semibold">1,284</p>
                    <p className="mt-2 text-xs text-cyan-300">+18.4% this month</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs text-slate-400">Time saved</p>
                    <p className="mt-2 text-3xl font-semibold">42.6h</p>
                    <p className="mt-2 text-xs text-violet-300">Across your team</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs text-slate-400">Success rate</p>
                    <p className="mt-2 text-3xl font-semibold">98.7%</p>
                    <p className="mt-2 text-xs text-cyan-300">All systems healthy</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Active workflows</p>
                    <p className="text-xs text-slate-500">View all →</p>
                  </div>
                  <div className="mt-5 space-y-4">
                    {["New lead follow-up", "Weekly client report", "Invoice reminder"].map((item, index) => (
                      <div key={item} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${index === 1 ? "bg-violet-400/15 text-violet-300" : "bg-cyan-300/15 text-cyan-300"}`}>
                            {index === 1 ? "✦" : "↗"}
                          </span>
                          <span className="text-sm text-slate-200">{item}</span>
                        </div>
                        <span className="text-xs text-emerald-300">Running</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Everything in flow</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Less coordination. More creation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            The tools you need to make progress visible, predictable, and surprisingly simple.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-xl text-cyan-300">
                {feature.icon}
              </span>
              <h3 className="mt-7 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">How it works</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Your next best step, always clear.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                FlowPilot removes the friction between a great idea and getting it done.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5 rounded-2xl border border-white/10 bg-[#0c1b2e]/70 p-6">
                  <span className="text-sm font-semibold text-cyan-300">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Simple pricing</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Start small. Scale with confidence.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
            Try FlowPilot free, then choose the plan that fits your momentum.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-7 ${plan.featured ? "border-cyan-300/60 bg-cyan-300/[0.08] shadow-xl shadow-cyan-950/20" : "border-white/10 bg-white/[0.04]"}`}>
              {plan.featured && (
                <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#07111f]">
                  Most popular
                </span>
              )}
              <h3 className="mt-5 text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{plan.description}</p>
              <p className="mt-7 text-4xl font-semibold">{plan.price}<span className="text-sm font-normal text-slate-400">{plan.price !== "Custom" && "/month"}</span></p>
              <a href="#" className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold ${plan.featured ? "bg-cyan-300 text-[#07111f]" : "border border-white/15 text-white"}`}>
                Choose {plan.name}
              </a>
              <ul className="mt-8 space-y-4 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-cyan-300">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-[#0c1b2e] to-cyan-300/10 px-6 py-16 text-center sm:px-12">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Give your best work more room to happen.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Start building a calmer, faster workflow today.
          </p>
          <a href="#pricing" className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-200">
            Start for free →
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© 2026 FlowPilot. Built for better work.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}