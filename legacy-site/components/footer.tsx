"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="border-t border-brand-gold/30" />
      <div className="container px-4 md:px-6 py-12">
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
              <p>5718 Westheier Rd, Suite 210</p>
              <p>Houston, TX 77057</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-gold">{t("footer.hours")}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Mon – Sat: 8:00 AM – 6:00 PM</p>
              <p>Sun: Closed</p>
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
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-gold">{t("footer.location")}</h4>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
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
    </footer>
  )
}
