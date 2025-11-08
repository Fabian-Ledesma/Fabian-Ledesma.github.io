"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faqs.q1"),
      answer: t("faqs.a1"),
    },
    {
      question: t("faqs.q2"),
      answer: t("faqs.a2"),
    },
    {
      question: t("faqs.q3"),
      answer: t("faqs.a3"),
    },
    {
      question: t("faqs.q4"),
      answer: t("faqs.a4"),
    },
    {
      question: t("faqs.q5"),
      answer: t("faqs.a5"),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">{t("faqs.title")}</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">{t("faqs.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-lg px-6 data-[state=open]:border-brand-gold transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-serif text-lg md:text-xl font-bold text-brand-black pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary leading-relaxed pb-6 text-base md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
