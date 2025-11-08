"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function DisclosuresPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">
              {t("disclosures.title")}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("disclosures.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Disclosures Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-brand-gray/50 rounded-2xl p-8 md:p-12 border-2 border-border">
                <p className="text-text-secondary leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {t("disclosures.content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
