"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Shield, Heart, TrendingUp, Users, FileText } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()
  const sectionWrapper = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10"

  const services = [
    {
      title: t("servicesPage.lifeInsurance.title"),
      description: t("servicesPage.lifeInsurance.description"),
      icon: Shield,
      features: [
        t("servicesPage.lifeInsurance.feature1"),
        t("servicesPage.lifeInsurance.feature2"),
        t("servicesPage.lifeInsurance.feature3"),
        t("servicesPage.lifeInsurance.feature4"),
      ],
    },
    {
      title: t("servicesPage.disability.title"),
      description: t("servicesPage.disability.description"),
      icon: Heart,
      features: [
        t("servicesPage.disability.feature1"),
        t("servicesPage.disability.feature2"),
        t("servicesPage.disability.feature3"),
        t("servicesPage.disability.feature4"),
      ],
    },
    {
      title: t("servicesPage.annuities.title"),
      description: t("servicesPage.annuities.description"),
      icon: TrendingUp,
      features: [
        t("servicesPage.annuities.feature1"),
        t("servicesPage.annuities.feature2"),
        t("servicesPage.annuities.feature3"),
        t("servicesPage.annuities.feature4"),
      ],
    },
    {
      title: t("servicesPage.longTermCare.title"),
      description: t("servicesPage.longTermCare.description"),
      icon: Users,
      features: [
        t("servicesPage.longTermCare.feature1"),
        t("servicesPage.longTermCare.feature2"),
        t("servicesPage.longTermCare.feature3"),
        t("servicesPage.longTermCare.feature4"),
      ],
    },
    {
      title: t("servicesPage.groupHealth.title"),
      description: t("servicesPage.groupHealth.description"),
      icon: FileText,
      features: [
        t("servicesPage.groupHealth.feature1"),
        t("servicesPage.groupHealth.feature2"),
        t("servicesPage.groupHealth.feature3"),
        t("servicesPage.groupHealth.feature4"),
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">
              {t("servicesPage.title")}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("servicesPage.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="border-2 hover:border-brand-gold transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                          <Icon className="w-8 h-8 text-brand-gold" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl font-bold text-brand-black mb-3">{service.title}</h3>
                        <p className="text-text-secondary leading-relaxed mb-4">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 ml-20">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-brand-black py-16 md:py-20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className={`${sectionWrapper} text-center`}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">{t("servicesPage.cta.title")}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{t("servicesPage.cta.subtitle")}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
