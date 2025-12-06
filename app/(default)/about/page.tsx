export const metadata = {
  title: "About Hackstle | Accessible Cybersecurity Expertise",
  description:
    "Meet the team of colleagues with 10+ years securing organizations and bringing practical cybersecurity to everyone.",
};

export default function AboutPage() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_25%),radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.12),transparent_35%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">About us</p>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">Cybersecurity for everyone</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of colleagues with more than a decade of combined experience in cybersecurity—hunting threats, building
            resilience, and guiding teams through real incidents. Our mission is simple: make world-class protection accessible
            to everyone, not just the biggest corporations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" data-aos="fade-up" data-aos-delay="150">
          <div className="rounded-2xl border border-gray-200/70 bg-white px-8 py-10 shadow-xl shadow-black/5 sm:px-10">
            <h2 className="text-2xl font-semibold text-gray-900">Our story</h2>
            <p className="mt-4 text-gray-700">
              After years working alongside security teams of every size, we saw the same pattern: sophisticated defenses were
              reserved for large enterprises, while small teams were left with gaps and guesswork. Hackstle was created by
              practitioners who believed that expertise and intelligence should be within reach for startups, nonprofits, and
              growing companies too.
            </p>
            <p className="mt-4 text-gray-700">
              We combine threat intelligence, security engineering, and incident response experience to deliver guidance that is
              practical and immediately usable. Every playbook, briefing, and recommendation is designed to remove complexity and
              give teams clear steps to stay ahead of attackers.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl bg-gray-900 px-7 py-8 text-gray-100 shadow-xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Who we are</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Colleagues with 10+ years in the field</h3>
              <p className="mt-3 text-gray-200">
                Our combined backgrounds span SOC leadership, threat intelligence, offensive testing, and cloud security. We have
                worked shoulder-to-shoulder during breaches and long-term hardening projects alike, building the empathy and
                discipline to navigate any security challenge.
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-semibold text-white">Trusted guidance</p>
                    <p>Battle-tested approaches shaped by real incidents across industries.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-semibold text-white">Accessible expertise</p>
                    <p>Clear explanations and actionable steps without the jargon.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--color-brand-400)]" />
                  <div>
                    <p className="font-semibold text-white">Inclusive security</p>
                    <p>Solutions built for organizations of every size and maturity level.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200/70 bg-white px-7 py-8 shadow-xl shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Our focus</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Security that scales with you</h3>
              <p className="mt-3 text-gray-700">
                We prioritize rapid enablement: concise risk briefings, curated detections, and guidance that maps to your
                realities. Whether you&apos;re a small team building your first program or a scaling company refining defenses,
                we work with you to deliver impact quickly.
              </p>
              <div className="mt-5 grid gap-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p>Actionable threat intelligence tuned to your industry and assets.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p>Security playbooks and readiness drills that your team can run today.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p>Partnership that meets you where you are, with transparent communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
