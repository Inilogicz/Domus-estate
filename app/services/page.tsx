"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/contact-hero-section"
// import { ServicesCard } from "@/components/service-card"
import { ServicesGrid } from "@/components/service-grid"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection title="Services" />

      <section className="py-20 bg-white">
        {/* <ServicesHero /> */}
        <ServicesGrid />
      </section>

      <Footer />
    </div>
  )
}
