"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function AboutPage() {
  const { t, language } = useLanguage()
  const sectionWrapper = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10"

  const standForItems =
    language === "EN"
      ? [
          "Education-first approach to financial planning",
          "Independent advice - not tied to any single carrier",
          "Insurance products only - no securities or investment advice",
          "Bilingual support in English and Spanish",
          "Focus on tax efficiency and wealth preservation",
          "Long-term client relationships built on trust",
        ]
      : [
          "Enfoque de educación primero en la planificación financiera",
          "Asesoramiento independiente: no vinculado a ninguna aseguradora",
          "Solo productos de seguros: sin valores ni asesoramiento de inversiones",
          "Soporte bilingüe en inglés y español",
          "Enfoque en eficiencia fiscal y preservación del patrimonio",
          "Relaciones con clientes a largo plazo basadas en la confianza",
        ]

  const differentItems =
    language === "EN"
      ? [
          "We take time to understand your unique situation before recommending solutions",
          "Clear explanations without jargon - you'll understand exactly what you're buying",
          "Comprehensive analysis of tax implications for retirement planning",
          "Access to multiple carriers to find the best fit for your needs",
          "Ongoing support as your life circumstances change",
          "No pressure sales - we believe informed clients make the best decisions",
        ]
      : [
          "Nos tomamos el tiempo para entender su situación única antes de recomendar soluciones",
          "Explicaciones claras sin jerga: entenderá exactamente lo que está comprando",
          "Análisis integral de las implicaciones fiscales para la planificación de la jubilación",
          "Acceso a múltiples aseguradoras para encontrar la mejor opción para sus necesidades",
          "Apoyo continuo a medida que cambian las circunstancias de su vida",
          "Ventas sin presión: creemos que los clientes informados toman las mejores decisiones",
        ]

  const fabianQuote =
    language === "EN"
      ? "Specializing in the tax treatment of money, helping you build a tax-diversified retirement portfolio, so that you can KEEP more, SPEND more, and LEAVE more to those who depend on you."
      : "Especializado en el tratamiento fiscal del dinero, ayudándole a construir una cartera de jubilación diversificada fiscalmente, para que pueda CONSERVAR más, GASTAR más y DEJAR más a quienes dependen de usted."

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">{t("about.title")}</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("about.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto max-w-4xl space-y-12">
            <div>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">{t("mission.description")}</p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-black mb-6">{t("about.standFor")}</h2>
              <ul className="space-y-4">
                {standForItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-gold mt-2 mr-4 flex-shrink-0" />
                    <span className="text-lg text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-black mb-6">{t("about.different")}</h2>
              <ul className="space-y-4">
                {differentItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-red mt-2 mr-4 flex-shrink-0" />
                    <span className="text-lg text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Card */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-center text-brand-black mb-12">
              {t("about.meetAdvisor")}
            </h2>

            <Card className="border-2 border-brand-gold/20">
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/images/fabian-ledesma.jpg"
                      alt="Fabian Ledesma"
                      width={160}
                      height={160}
                      className="w-40 h-40 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-brand-black mb-2">Fabian Ledesma</h3>
                    <p className="text-brand-red font-semibold mb-4">
                      Financial Strategist and Employee Benefits Specialist
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-6">"{fabianQuote}"</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Phone className="w-5 h-5 text-brand-gold" />
                        <span>Direct: (281) 451-8104</span>
                      </div>
                      <div className="flex items-center gap-3 text-text-secondary">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                        <span>5718 Westheier Rd, Suite 210, Houston, TX 77057</span>
                      </div>
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Languages className="w-5 h-5 text-brand-gold" />
                        <span>{t("about.languages")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
