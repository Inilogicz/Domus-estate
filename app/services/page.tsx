"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection title="Services" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-8">Coming Soon</h2>
          <p className="text-gray-600 text-lg">
            This page is currently under development. Please check back soon for detailed information about our property
            management services.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
