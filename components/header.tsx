"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.faqs"), href: "/faqs" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.disclosures"), href: "/disclosures" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 md:h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/eagle-logo.png"
            alt="Serene Eagle Financial Strategies"
            width={64}
            height={64}
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-2xl font-bold text-brand-black leading-tight tracking-wide">
              Serene Eagle
            </span>
            <span className="font-sans text-xs md:text-sm font-semibold text-brand-black leading-tight tracking-widest">
              FINANCIAL STRATEGIES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-brand-red transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => setLanguage("EN")}
              className={`text-sm font-medium transition-colors ${
                language === "EN" ? "text-brand-red" : "text-text-secondary hover:text-brand-gold"
              }`}
            >
              EN
            </button>
            <span className="text-text-secondary">|</span>
            <button
              onClick={() => setLanguage("ES")}
              className={`text-sm font-medium transition-colors ${
                language === "ES" ? "text-brand-red" : "text-text-secondary hover:text-brand-gold"
              }`}
            >
              ES
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-brand-red transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                <button
                  onClick={() => setLanguage("EN")}
                  className={`text-sm font-medium transition-colors ${
                    language === "EN" ? "text-brand-red" : "text-text-secondary"
                  }`}
                >
                  EN
                </button>
                <span className="text-text-secondary">|</span>
                <button
                  onClick={() => setLanguage("ES")}
                  className={`text-sm font-medium transition-colors ${
                    language === "ES" ? "text-brand-red" : "text-text-secondary"
                  }`}
                >
                  ES
                </button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
