import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Retirement Income Planning',
    description:
      'Design sustainable retirement income strategies tailored to your lifestyle and long-term goals.',
  },
  {
    title: 'Tax-Efficient Growth',
    description:
      'Coordinate investment and insurance solutions that support growth while managing today’s tax exposure.',
  },
  {
    title: 'Risk Management & Protection',
    description:
      'Safeguard your family or business with insurance strategies that align with your broader financial plan.',
  },
]

const testimonials = [
  {
    name: 'Lydia Carter',
    role: 'Small Business Owner',
    quote:
      'Serene Eagle translated complex retirement options into a clear plan for my business and my family.',
  },
  {
    name: 'Michael Owens',
    role: 'Real Estate Investor',
    quote:
      'Their guidance helped me unlock tax-efficient strategies I didn’t know existed.',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="relative h-full w-full">
            <Image
              src="/images/serene-eagle-hero.jpg"
              alt="Financial planning consultation"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-28 text-white sm:px-12 lg:px-16">
          <div className="flex flex-col gap-6 text-balance text-center lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-white/80 backdrop-blur-2xl lg:self-start">
              Trusted Advice. Tailored Strategies.
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Financial clarity that helps your wealth soar.
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Serene Eagle Financial Strategies partners with growth-minded
              families and business owners to craft resilient, tax-smart
              financial plans that endure every season.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="mailto:info@sereneeaglefinancialstrategies.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule a consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-background px-6 py-20 sm:px-12 lg:px-16 xl:px-24"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
          <div className="max-w-3xl space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Holistic planning for every stage
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              From first investment to legacy stewardship, we blend insurance,
              retirement, and tax strategies into a unified plan you can feel
              confident about.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A collaborative approach to your goals
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              We listen first, then build a roadmap with clear milestones,
              tailored investment options, and insurance coverage that
              safeguards what matters most.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <li>• Fiduciary guidance rooted in transparency</li>
              <li>• Coordinated strategies for families and businesses</li>
              <li>• Ongoing monitoring and education to keep you informed</li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
            <Image
              src="/images/fabian-ledesma.jpg"
              alt="Fabian Ledesma - Founder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-background px-6 pb-20 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What clients are saying
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We aim to make complex strategies feel approachable and aligned
              with your values.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm"
              >
                <p className="text-base text-muted-foreground">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-auto text-sm font-medium text-foreground">
                  {testimonial.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {testimonial.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/60 px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-background/70 p-8 text-center shadow-lg backdrop-blur-sm sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to move forward with confidence?
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Let’s craft a tailored plan that balances growth, protection, and
            peace of mind.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="tel:+17026573216"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Call (702) 657-3216
            </Link>
            <Link
              href="mailto:info@sereneeaglefinancialstrategies.com"
              className="inline-flex items-center justify-center rounded-full border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Email the team
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-center text-xs text-white/60 sm:px-12">
        <p>
          © {new Date().getFullYear()} Serene Eagle Financial Strategies. All
          rights reserved.
        </p>
        <p className="mt-2">
          8569 W. Farm Rd. Suite 100, #121, Las Vegas, Nevada 89131
        </p>
      </footer>
    </main>
  )
}

