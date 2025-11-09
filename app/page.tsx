"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Image from "next/image"
import { Shield, TrendingUp, Users, Heart, FileText } from "lucide-react"

export default function HomePage() {
  const { t, language } = useLanguage()

  const heroTitleLines =
    language === "ES"
      ? ["Vea su futuro financiero", "con claridad."]
      : [t("hero.title")]

  const services = [
    {
      title: t("services.lifeInsurance"),
      description: t("services.lifeInsurance.desc"),
      icon: Shield,
      href: "/services/life-insurance",
    },
    {
      title: t("services.disability"),
      description: t("services.disability.desc"),
      icon: Heart,
      href: "/services/disability-insurance",
    },
    {
      title: t("services.annuities"),
      description: t("services.annuities.desc"),
      icon: TrendingUp,
      href: "/services/annuities",
    },
    {
      title: t("services.longTermCare"),
      description: t("services.longTermCare.desc"),
      icon: Users,
      href: "/services/long-term-care-tax-free",
    },
    {
      title: t("services.groupHealth"),
      description: t("services.groupHealth.desc"),
      icon: FileText,
      href: "/services/group-health",
    },
  ]

  const testimonials =
    language === "ES"
      ? [
          {
            name: "María Rodríguez",
            text: "El equipo me ayudó a comprender mis opciones de seguro en inglés y en español. Su orientación fue invaluable.",
            rating: 5,
          },
          {
            name: "Esteban Chow",
            text: "Por fin encontré un asesor que se toma el tiempo para educar en lugar de solo vender. Recomiendo mucho sus servicios.",
            rating: 5,
          },
          {
            name: "Sarah Johnson",
            text: "Profesionales, con amplio conocimiento y realmente interesados en proteger el futuro de mi familia. Una experiencia excelente.",
            rating: 5,
          },
        ]
      : [
          {
            name: "Maria Rodriguez",
            text: "The team helped me understand my insurance options in both English and Spanish. Their guidance was invaluable.",
            rating: 5,
          },
          {
            name: "Steve Chow",
            text: "Finally found an advisor who takes time to educate rather than just sell. Highly recommend their services.",
            rating: 5,
          },
          {
            name: "Sarah Johnson",
            text: "Professional, knowledgeable, and genuinely cared about protecting my family's future. Excellent experience.",
            rating: 5,
          },
        ]

  const sectionWrapper = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10"

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Rounded Container */}
      <section className="relative py-8 md:py-16 lg:py-20 bg-brand-gray overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[1200px] h-[1200px] md:w-[1400px] md:h-[1400px] opacity-8 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/eagle-logo.png"
            alt=""
            width={1400}
            height={1400}
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>

        <div className={`relative ${sectionWrapper}`}>
          <div className="mx-auto w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <div className="relative min-h-[550px] sm:h-[600px] md:h-[650px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/images/serene-eagle-hero-eagle-2.png)",
                  }}
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-12 sm:py-16">
                  <h1
                    className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight"
                  >
                    {heroTitleLines.map((line, index) => (
                      <span key={line} className={index === 0 ? "" : "block"}>
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mb-3 sm:mb-4 leading-relaxed">
                    {t("hero.subtitle")}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8">
                    {t("hero.description")}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      className="rounded-full bg-brand-red hover:bg-brand-red-light text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                      asChild
                    >
                      <Link href="/contact">{t("hero.getQuote")}</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold-light hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent"
                      asChild
                    >
                      <Link href="/contact">{t("hero.bookCall")}</Link>
                    </Button>
                  </div>

                  {/* Credibility Badges */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                    >
                      {t("badge.insuranceOnly")}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                    >
                      {t("badge.independent")}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                    >
                      {t("badge.educationFirst")}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                    >
                      {t("badge.bilingual")}
                    </Badge>
                  </div>
                </div>

                {/* Gold accent curve */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-black mb-6">{t("mission.title")}</h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("mission.description")}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-black mb-4">{t("services.title")}</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">{t("services.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="border-2 hover:border-brand-gold transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 mb-6">
                      <Icon className="w-8 h-8 text-brand-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-black mb-3">{service.title}</h3>
                    <p className="text-text-secondary">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className={sectionWrapper}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-center text-brand-black mb-16">
            {t("process.title")}
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  step: "01",
                  title: t("process.step1"),
                  description: t("process.step1.desc"),
                },
                {
                  step: "02",
                  title: t("process.step2"),
                  description: t("process.step2.desc"),
                },
                {
                  step: "03",
                  title: t("process.step3"),
                  description: t("process.step3.desc"),
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-gold/10 border-2 border-brand-gold mb-6">
                    <span className="font-serif text-3xl font-bold text-brand-gold">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-black mb-4">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className={sectionWrapper}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-center text-brand-black mb-12">
            {t("testimonials.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand-gold fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-brand-black">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-brand-black py-16 md:py-20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className={`${sectionWrapper} text-center`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="rounded-full bg-brand-red hover:bg-brand-red-light text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">{t("hero.getQuote")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold-light hover:text-white px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <Link href="/contact">{t("hero.bookCall")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
