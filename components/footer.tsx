"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="border-t border-brand-gold/30" />
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Copyright */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-brand-gold">Serene Eagle Financial Strategies</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{t("footer.tagline")}</p>
            <p className="text-xs text-gray-400">
              © {currentYear} Serene Eagle Financial Strategies.
            </p>
            <p className="text-xs text-gray-400">
              All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-gold">{t("footer.contact")}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-medium">Fabian Ledesma</p>
              <p>Financial Strategist & Employee Benefits Specialist</p>
              <p>Direct: (281) 451-8104</p>
              <p>5718 Westheier Rd, Suite 920</p>
              <p>Houston, TX 77057</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-gold">{t("footer.hours")}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              {language === "EN" ? (
                <>
                  <p>Monday – Friday: 9:00 AM – 5:00 PM Central Time (CT)</p>
                  <p>Closed Saturday & Sunday</p>
                </>
              ) : (
                <>
                  <p>Lunes – Viernes: 9:00 AM – 5:00 PM Hora Central (CT)</p>
                  <p>Cerrado Sábado y Domingo</p>
                </>
              )}
            </div>
            <div className="pt-4">
              <h5 className="font-semibold mb-2 text-brand-gold text-sm">{t("footer.quickLinks")}</h5>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors">
                  {t("nav.home")}
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">
                  {t("nav.services")}
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  {t("nav.about")}
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">
                  {t("nav.contact")}
                </Link>
                <Link href="/disclosures" className="text-gray-300 hover:text-brand-gold transition-colors">
                  {t("nav.disclosures")}
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-gold">{t("footer.location")}</h4>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=5718+Westheier+Rd+Suite+920+Houston,+TX+77057&output=embed"
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
    </footer>
  )
}
