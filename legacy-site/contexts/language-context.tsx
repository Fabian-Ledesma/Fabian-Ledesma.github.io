"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "EN" | "ES"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  EN: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.faqs": "FAQs",
    "nav.contact": "Contact",
    "nav.disclosures": "Disclosures",

    // Home Page
    "hero.title": "See your financial future clearly.",
    "hero.subtitle": "Avoid unnecessary risk, reduce avoidable taxation, and protect your family's financial future.",
    "hero.description":
      "Smart decisions today mean fewer financial losses and lower taxes tomorrow—especially in retirement.",
    "hero.getQuote": "Get a Quote",
    "hero.bookCall": "Book a Call",
    "badge.insuranceOnly": "Insurance Products Only",
    "badge.independent": "Independent",
    "badge.educationFirst": "Education-First",
    "badge.bilingual": "English & Spanish",

    // Mission
    "mission.title": "Our Mission",
    "mission.description":
      "We educate and empower individuals so they can make informed financial decisions, protecting their and their family's financial future by mitigating against large financial loss due to a health event, and preserving more of their retirement income from unnecessary taxation.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive insurance solutions designed to protect what matters most",
    "services.lifeInsurance": "Life Insurance",
    "services.lifeInsurance.desc": "Term, Whole Life, UL, IUL, GUL",
    "services.disability": "Disability Insurance",
    "services.disability.desc": "Group & Individual coverage",
    "services.annuities": "Annuities & Benefits",
    "services.annuities.desc": "Guaranteed lifetime income",
    "services.longTermCare": "Long-Term Care",
    "services.longTermCare.desc": "LTC & Tax-Free Strategies",
    "services.groupHealth": "Group Health Insurance",
    "services.groupHealth.desc": "Employee benefits solutions",
    "services.explore": "Explore",

    // Services Page
    "servicesPage.title": "Our Services",
    "servicesPage.subtitle":
      "Comprehensive insurance solutions to protect your financial future and preserve your retirement income.",
    "servicesPage.lifeInsurance.title": "Life Insurance",
    "servicesPage.lifeInsurance.description":
      "Protect your family with term, whole life, universal, indexed universal, and guaranteed universal life insurance options.",
    "servicesPage.lifeInsurance.feature1": "Income replacement",
    "servicesPage.lifeInsurance.feature2": "Estate planning",
    "servicesPage.lifeInsurance.feature3": "Business protection",
    "servicesPage.lifeInsurance.feature4": "Living benefits",
    "servicesPage.disability.title": "Disability Insurance",
    "servicesPage.disability.description":
      "Secure your income with group and individual disability coverage, including own-occupation options.",
    "servicesPage.disability.feature1": "Group coverage",
    "servicesPage.disability.feature2": "Individual policies",
    "servicesPage.disability.feature3": "Own-occupation",
    "servicesPage.disability.feature4": "Benefit periods",
    "servicesPage.annuities.title": "Annuities",
    "servicesPage.annuities.description":
      "Create guaranteed lifetime income for retirement with fixed and fixed indexed annuities.",
    "servicesPage.annuities.feature1": "Guaranteed income",
    "servicesPage.annuities.feature2": "Fixed annuities",
    "servicesPage.annuities.feature3": "Fixed indexed",
    "servicesPage.annuities.feature4": "MYGA options",
    "servicesPage.longTermCare.title": "Long-Term Care & Tax-Free Strategies",
    "servicesPage.longTermCare.description":
      "Plan for long-term care needs and explore tax-advantaged strategies for your retirement.",
    "servicesPage.longTermCare.feature1": "LTC coverage",
    "servicesPage.longTermCare.feature2": "Hybrid policies",
    "servicesPage.longTermCare.feature3": "Tax-free strategies",
    "servicesPage.longTermCare.feature4": "Asset protection",
    "servicesPage.groupHealth.title": "Group Health Insurance",
    "servicesPage.groupHealth.description":
      "Comprehensive employee benefits solutions including group medical coverage.",
    "servicesPage.groupHealth.feature1": "Group medical",
    "servicesPage.groupHealth.feature2": "Employer plans",
    "servicesPage.groupHealth.feature3": "Enrollment support",
    "servicesPage.groupHealth.feature4": "Compliance help",
    "servicesPage.cta.title": "Not sure which service is right for you?",
    "servicesPage.cta.subtitle": "Schedule a free consultation and we'll help you understand your options.",

    // Process
    "process.title": "Our Process",
    "process.step1": "Discovery Call",
    "process.step1.desc": "We listen to understand your unique situation, goals, and concerns.",
    "process.step2": "Strategy & Options",
    "process.step2.desc": "We present tailored solutions with clear explanations of benefits and costs.",
    "process.step3": "Implement & Review",
    "process.step3.desc": "We help you implement your plan and provide ongoing support as needs change.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",

    // CTA
    "cta.title": "Ready for clarity, protection, and lower taxes in retirement?",

    // About Page
    "about.title": "About Us",
    "about.subtitle": "Independent, education-focused financial strategies for your peace of mind.",
    "about.standFor": "What We Stand For",
    "about.different": "What Makes Us Different",
    "about.meetAdvisor": "Meet Your Advisor",
    "about.languages": "Languages: English & Spanish",

    // FAQs Page
    "faqs.title": "Frequently Asked Questions",
    "faqs.subtitle": "Clear answers to help you understand how we serve you",
    "faqs.q1": "What makes Serene Eagle Financial Strategies different from other insurance agencies?",
    "faqs.a1":
      "We focus on education first — not products. Our goal is to help you understand how money, risk, and taxes work together so you can make informed financial decisions that protect your family and your future.",
    "faqs.q2": "Do you offer investment or securities products?",
    "faqs.a2":
      "No. Serene Eagle Financial Strategies specializes in insurance and retirement protection solutions only. We do not offer or advise on investments or securities.",
    "faqs.q3": "What states do you serve?",
    "faqs.a3":
      "We're licensed in multiple states across the U.S. Please contact us to confirm availability in your state.",
    "faqs.q4": "Do you work with specific insurance carriers?",
    "faqs.a4":
      "Yes, but we're independent, meaning we can shop multiple top-rated carriers to find the best fit for your needs.",
    "faqs.q5": "Are your consultations free?",
    "faqs.a5":
      "Yes, your initial consultation is complimentary. We believe education should come before any financial decisions.",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to take control of your financial future? Let's talk.",
    "contact.info": "Contact Information",
    "contact.form": "Send Us a Message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.hours": "Business Hours",

    // Disclosures
    "disclosures.title": "Legal Disclosures",
    "disclosures.subtitle": "Important information about our services and practices",
    "disclosures.content":
      "This website is maintained by Fabian Ledesma, a licensed Texas insurance agent offering life, health, disability, annuities, and benefit products. Information is for general knowledge and does not constitute financial, investment, or legal advice. Fabian Ledesma is not securities licensed and does not provide investment advice or recommendations. Use of this website and submission of inquiries does not create an agent-client relationship. Please review our Privacy Policy for information about data collection and your privacy rights. Errors or omissions are not the responsibility of Fabian Ledesma. Links to third-party sites do not constitute endorsements.",

    // Footer
    "footer.tagline": "See your financial future clearly.",
    "footer.contact": "Contact",
    "footer.hours": "Business Hours",
    "footer.location": "Location",
    "footer.quickLinks": "Quick Links",
  },
  ES: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Acerca de",
    "nav.faqs": "Preguntas",
    "nav.contact": "Contacto",
    "nav.disclosures": "Divulgaciones",

    // Home Page
    "hero.title": "Vea su futuro financiero con claridad.",
    "hero.subtitle":
      "Evite riesgos innecesarios, reduzca impuestos evitables y proteja el futuro financiero de su familia.",
    "hero.description":
      "Las decisiones inteligentes de hoy significan menos pérdidas financieras e impuestos más bajos mañana, especialmente en la jubilación.",
    "hero.getQuote": "Obtener Cotización",
    "hero.bookCall": "Agendar Llamada",
    "badge.insuranceOnly": "Solo Productos de Seguros",
    "badge.independent": "Independiente",
    "badge.educationFirst": "Educación Primero",
    "badge.bilingual": "Inglés y Español",

    // Mission
    "mission.title": "Nuestra Misión",
    "mission.description":
      "Educamos y empoderamos a las personas para que puedan tomar decisiones financieras informadas, protegiendo su futuro financiero y el de su familia mediante la mitigación contra grandes pérdidas financieras debido a un evento de salud, y preservando más de sus ingresos de jubilación de impuestos innecesarios.",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones integrales de seguros diseñadas para proteger lo que más importa",
    "services.lifeInsurance": "Seguro de Vida",
    "services.lifeInsurance.desc": "Término, Vida Entera, UL, IUL, GUL",
    "services.disability": "Seguro de Invalidez",
    "services.disability.desc": "Cobertura grupal e individual",
    "services.annuities": "Anualidades y Beneficios",
    "services.annuities.desc": "Ingresos garantizados de por vida",
    "services.longTermCare": "Cuidado a Largo Plazo",
    "services.longTermCare.desc": "Estrategias de CLP y libres de impuestos",
    "services.groupHealth": "Seguro de Salud Grupal",
    "services.groupHealth.desc": "Soluciones de beneficios para empleados",
    "services.explore": "Explorar",

    // Services Page
    "servicesPage.title": "Nuestros Servicios",
    "servicesPage.subtitle":
      "Soluciones integrales de seguros para proteger su futuro financiero y preservar sus ingresos de jubilación.",
    "servicesPage.lifeInsurance.title": "Seguro de Vida",
    "servicesPage.lifeInsurance.description":
      "Proteja a su familia con opciones de seguro de vida a término, vida entera, universal, universal indexado y universal garantizado.",
    "servicesPage.lifeInsurance.feature1": "Reemplazo de ingresos",
    "servicesPage.lifeInsurance.feature2": "Planificación patrimonial",
    "servicesPage.lifeInsurance.feature3": "Protección empresarial",
    "servicesPage.lifeInsurance.feature4": "Beneficios en vida",
    "servicesPage.disability.title": "Seguro de Invalidez",
    "servicesPage.disability.description":
      "Asegure sus ingresos con cobertura de discapacidad grupal e individual, incluyendo opciones de ocupación propia.",
    "servicesPage.disability.feature1": "Cobertura grupal",
    "servicesPage.disability.feature2": "Pólizas individuales",
    "servicesPage.disability.feature3": "Ocupación propia",
    "servicesPage.disability.feature4": "Períodos de beneficios",
    "servicesPage.annuities.title": "Anualidades",
    "servicesPage.annuities.description":
      "Cree ingresos garantizados de por vida para la jubilación con anualidades fijas e indexadas fijas.",
    "servicesPage.annuities.feature1": "Ingresos garantizados",
    "servicesPage.annuities.feature2": "Anualidades fijas",
    "servicesPage.annuities.feature3": "Indexadas fijas",
    "servicesPage.annuities.feature4": "Opciones MYGA",
    "servicesPage.longTermCare.title": "Cuidado a Largo Plazo y Estrategias Libres de Impuestos",
    "servicesPage.longTermCare.description":
      "Planifique las necesidades de cuidado a largo plazo y explore estrategias con ventajas fiscales para su jubilación.",
    "servicesPage.longTermCare.feature1": "Cobertura de CLP",
    "servicesPage.longTermCare.feature2": "Pólizas híbridas",
    "servicesPage.longTermCare.feature3": "Estrategias libres de impuestos",
    "servicesPage.longTermCare.feature4": "Protección de activos",
    "servicesPage.groupHealth.title": "Seguro de Salud Grupal",
    "servicesPage.groupHealth.description":
      "Soluciones integrales de beneficios para empleados, incluyendo cobertura médica grupal.",
    "servicesPage.groupHealth.feature1": "Médico grupal",
    "servicesPage.groupHealth.feature2": "Planes para empleadores",
    "servicesPage.groupHealth.feature3": "Soporte de inscripción",
    "servicesPage.groupHealth.feature4": "Ayuda con cumplimiento",
    "servicesPage.cta.title": "¿No está seguro de qué servicio es adecuado para usted?",
    "servicesPage.cta.subtitle": "Programe una consulta gratuita y le ayudaremos a entender sus opciones.",

    // Process
    "process.title": "Nuestro Proceso",
    "process.step1": "Llamada de Descubrimiento",
    "process.step1.desc": "Escuchamos para entender su situación única, objetivos e inquietudes.",
    "process.step2": "Estrategia y Opciones",
    "process.step2.desc": "Presentamos soluciones adaptadas con explicaciones claras de beneficios y costos.",
    "process.step3": "Implementar y Revisar",
    "process.step3.desc":
      "Le ayudamos a implementar su plan y brindamos apoyo continuo a medida que cambian las necesidades.",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",

    // CTA
    "cta.title": "¿Listo para claridad, protección e impuestos más bajos en la jubilación?",

    // About Page
    "about.title": "Acerca de Nosotros",
    "about.subtitle": "Estrategias financieras independientes y enfocadas en la educación para su tranquilidad.",
    "about.standFor": "Lo Que Representamos",
    "about.different": "Lo Que Nos Hace Diferentes",
    "about.meetAdvisor": "Conozca a Su Asesor",
    "about.languages": "Idiomas: Inglés y Español",

    // FAQs Page
    "faqs.title": "Preguntas Frecuentes",
    "faqs.subtitle": "Respuestas claras para ayudarle a entender cómo le servimos",
    "faqs.q1": "¿Qué hace que Serene Eagle Financial Strategies sea diferente de otras agencias de seguros?",
    "faqs.a1":
      "Nos enfocamos en la educación primero, no en los productos. Nuestro objetivo es ayudarle a entender cómo funcionan juntos el dinero, el riesgo y los impuestos para que pueda tomar decisiones financieras informadas que protejan a su familia y su futuro.",
    "faqs.q2": "¿Ofrecen productos de inversión o valores?",
    "faqs.a2":
      "No. Serene Eagle Financial Strategies se especializa únicamente en soluciones de seguros y protección para la jubilación. No ofrecemos ni asesoramos sobre inversiones o valores.",
    "faqs.q3": "¿En qué estados prestan servicios?",
    "faqs.a3":
      "Tenemos licencia en múltiples estados de EE. UU. Por favor contáctenos para confirmar la disponibilidad en su estado.",
    "faqs.q4": "¿Trabajan con compañías de seguros específicas?",
    "faqs.a4":
      "Sí, pero somos independientes, lo que significa que podemos comparar múltiples aseguradoras de alta calificación para encontrar la mejor opción para sus necesidades.",
    "faqs.q5": "¿Sus consultas son gratuitas?",
    "faqs.a5":
      "Sí, su consulta inicial es gratuita. Creemos que la educación debe venir antes de cualquier decisión financiera.",

    // Contact Page
    "contact.title": "Contáctenos",
    "contact.subtitle": "¿Listo para tomar el control de su futuro financiero? Hablemos.",
    "contact.info": "Información de Contacto",
    "contact.form": "Envíenos un Mensaje",
    "contact.name": "Nombre",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Teléfono",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.hours": "Horario de Atención",

    // Disclosures
    "disclosures.title": "Divulgaciones Legales",
    "disclosures.subtitle": "Información importante sobre nuestros servicios y prácticas",
    "disclosures.content":
      "Este sitio web es mantenido por Fabian Ledesma, un agente de seguros con licencia en Texas que ofrece productos de vida, salud, discapacidad, anualidades y beneficios. La información es para conocimiento general y no constituye asesoramiento financiero, de inversión o legal. Fabian Ledesma no tiene licencia de valores y no proporciona asesoramiento o recomendaciones de inversión. El uso de este sitio web y el envío de consultas no crean una relación agente-cliente. Por favor revise nuestra Política de Privacidad para obtener información sobre la recopilación de datos y sus derechos de privacidad. Los errores u omisiones no son responsabilidad de Fabian Ledesma. Los enlaces a sitios de terceros no constituyen endosos.",

    // Footer
    "footer.tagline": "Vea su futuro financiero con claridad.",
    "footer.contact": "Contacto",
    "footer.hours": "Horario de Atención",
    "footer.location": "Ubicación",
    "footer.quickLinks": "Enlaces Rápidos",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage === "EN" || savedLanguage === "ES") {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (isClient) {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.EN] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
