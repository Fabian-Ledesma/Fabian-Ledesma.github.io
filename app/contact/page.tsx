"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t, language } = useLanguage()

  const serviceOptions =
    language === "EN"
      ? [
          { value: "life", label: "Life Insurance" },
          { value: "disability", label: "Disability Insurance" },
          { value: "annuities", label: "Annuities" },
          { value: "ltc", label: "Long-Term Care / Tax-Free Strategies" },
          { value: "group", label: "Group Health Insurance" },
        ]
      : [
          { value: "life", label: "Seguro de Vida" },
          { value: "disability", label: "Seguro de Invalidez" },
          { value: "annuities", label: "Anualidades" },
          { value: "ltc", label: "Cuidado a Largo Plazo / Estrategias Libres de Impuestos" },
          { value: "group", label: "Seguro de Salud Grupal" },
        ]

  const timeOptions =
    language === "EN"
      ? [
          { value: "morning", label: "Morning (8am - 12pm)" },
          { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
          { value: "evening", label: "Evening (5pm - 6pm)" },
        ]
      : [
          { value: "morning", label: "Mañana (8am - 12pm)" },
          { value: "afternoon", label: "Tarde (12pm - 5pm)" },
          { value: "evening", label: "Noche (5pm - 6pm)" },
        ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">{t("contact.title")}</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("contact.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-black mb-6">{t("contact.form")}</h2>
              <Alert className="mb-6 border-brand-gold/30 bg-brand-gold/5">
                <AlertDescription className="text-sm text-text-secondary">
                  {language === "EN"
                    ? "Please don't include confidential health information in this form."
                    : "Por favor no incluya información de salud confidencial en este formulario."}
                </AlertDescription>
              </Alert>

              <form className="space-y-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-brand-black mb-2">
                    {language === "EN" ? "Service Interest *" : "Servicio de Interés *"}
                  </label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder={language === "EN" ? "Select a service" : "Seleccione un servicio"} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
                      {t("contact.name")} *
                    </label>
                    <Input id="name" placeholder={language === "EN" ? "Your name" : "Su nombre"} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                      {t("contact.email")} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={language === "EN" ? "your@email.com" : "su@correo.com"}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
                      {t("contact.phone")} *
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 555-5555" required />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-brand-black mb-2">
                      {language === "EN" ? "State *" : "Estado *"}
                    </label>
                    <Input id="state" placeholder="TX" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferred-time" className="block text-sm font-medium text-brand-black mb-2">
                    {language === "EN" ? "Preferred Contact Time" : "Hora de Contacto Preferida"}
                  </label>
                  <Select>
                    <SelectTrigger id="preferred-time">
                      <SelectValue placeholder={language === "EN" ? "Select a time" : "Seleccione una hora"} />
                    </SelectTrigger>
                    <SelectContent>
                      {timeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={
                      language === "EN"
                        ? "Tell us about your situation and what you're looking for..."
                        : "Cuéntenos sobre su situación y lo que está buscando..."
                    }
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-brand-red hover:bg-brand-red-light text-white"
                >
                  {t("contact.send")}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-black mb-6">{t("contact.info")}</h2>

              <div className="space-y-6 mb-8">
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
                          5718 Westheier Rd, Suite 210
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
                          Mon – Sat: 8:00 AM – 6:00 PM
                          <br />
                          Sun: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg overflow-hidden h-64 border-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0!2d-95.48!3d29.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQzJzQ4LjAiTiA5NcKwMjgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
