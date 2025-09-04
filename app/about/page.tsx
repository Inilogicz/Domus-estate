"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/contact-hero-section"
import Footer from "@/components/footer"
// import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Isabella Cruz",
      role: "Lead Property Management Administrator",
      image: "/issabella.png"
    },
    {
      name: "Olive Hayes",
      role: "Olive Hayes - Head of Customer Success",
      image: "/olive.png"
    },
    {
      name: "Amani Baker",
      role: "PR & Marketing Manager",
      image: "/Amani.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection title="About us" />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Domus Residential Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Domus Residential</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Domus Residential, we're redefining property management with a blend of human touch and cutting-edge AI. With over 15 years of 
              industry experience, our mission is to create a seamless, supportive experience for every tenant and landlord we serve.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our innovative AI team—Oliver, Isabella, and Arham—is at the heart of our operations, ensuring exceptional customer success, smooth 
              property administration, and standout PR. At Domus Residential, we're not just managing properties—we're building a community 
              where innovation truly feels like home.
            </p>
          </div>

          {/* The Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-left">
                  <div className="mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-auto object-cover rounded-10 shadow-md"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reach Us Now Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Reach Us Now</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Domus Residential, we're not just managing properties—we're building a community where innovation truly feels like home.
            </p>
            <button className="bg-gray-600 text-white px-6 py-3 hover:bg-gray-700 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}