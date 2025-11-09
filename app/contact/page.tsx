"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const sectionWrapper = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10"

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">{t("contact.title")}</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("contact.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className={sectionWrapper}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-black mb-6">{t("contact.info")}</h2>

              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-brand-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-black mb-1">
                          {language === "EN" ? "Phone" : "Teléfono"}
                        </h3>
                        <p className="text-text-secondary">Direct: (281) 451-8104</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-brand-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-black mb-1">
                          {language === "EN" ? "Office" : "Oficina"}
                        </h3>
                        <p className="text-text-secondary">
                          5718 Westheier Rd, Suite 920
                          <br />
                          Houston, TX 77057
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-brand-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-black mb-1">{t("contact.hours")}</h3>
                        <p className="text-text-secondary">
                          {language === "EN"
                            ? "Monday – Friday: 9:00 AM – 5:00 PM Central Time (CT)"
                            : "Lunes – Viernes: 9:00 AM – 5:00 PM Hora Central (CT)"}
                          <br />
                          {language === "EN" ? "Closed Saturday & Sunday" : "Cerrado Sábado y Domingo"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-sm text-text-secondary mt-6 leading-relaxed">
                {language === "EN"
                  ? "We look forward to connecting with you. Please call or email to schedule a consultation tailored to your needs."
                  : "Esperamos conectarnos con usted. Llámenos o envíe un correo para programar una consulta adaptada a sus necesidades."}
              </p>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden h-72 border-2 shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=5718+Westheier+Rd+Suite+920+Houston,+TX+77057&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={language === "EN" ? "Office Location" : "Ubicación de la Oficina"}
                />
              </div>
              <Card className="border-2 bg-brand-gray/40">
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-brand-black mb-3">
                    {language === "EN" ? "Connect With Us" : "Conéctese Con Nosotros"}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {language === "EN"
                      ? "Prefer email? Reach us at contact@sereneeaglefinancialstrategies.com and we’ll respond within one business day."
                      : "¿Prefiere el correo electrónico? Escríbanos a contact@sereneeaglefinancialstrategies.com y responderemos dentro de un día hábil."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
