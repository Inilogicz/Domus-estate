"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/contact-hero-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: "/ig.png", href: "#", label: "Instagram" },
    { icon: "/x.png", href: "#", label: "Twitter" },
    { icon: '/fb.png', href: "#", label: "Facebook" },
    { icon: "/x.png", href: "#", label: "LinkedIn" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with reduced height */}
      <HeroSection
        title="Contact us"
        body=""
        // Use padding to control the height instead of a fixed min-height
        // className="py-24"
      />

      {/* Contact Form Section */}
      <section className="py-20 px-15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-8 leading-relaxed font-playfair text-lg">
                Please feel free to contact us and we will get back to you as soon as we can.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Type your full name"
                    value={formData.name}
                    onChange={handleChange}
                    // Adjusted input styling to match the image
                    className="border-0 border-b  rounded-none px-2 py-6 bg-[#DAD1D721] focus:border-gray-600 focus:ring-0 border-b-black border-1"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-0 border-b  rounded-none px-2 py-6 bg-[#DAD1D721] focus:border-gray-600 focus:ring-0 border-b-black border-1"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Textarea
                    name="message"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-0 border-b  rounded-none px-2 py-3 bg-[#DAD1D721] focus:border-gray-600 focus:ring-0 resize-none border-b-black border-1"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    // Adjusted button color to match the image
                    className="w-full bg-slate-300 hover:bg-slate-400/90 text-gray-800 py-6 rounded-none font-medium tracking-widest"
                  >
                    SEND
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="font-playfair text-2xl font-normal text-gray-800 mb-4">Visit us</h3>
                <p className="text-gray-600 font-playfair">
                  258 Starbuck road, south
                  <br />
                  london 2166
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-normal text-gray-800 mb-4">Talk to us</h3>
                <p className="text-gray-600 mb-2 font-playfair">+44 432 123 123</p>
                <p className="text-gray-600 font-playfair">hello@domusresidential.com</p>
              </div>

              <div>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-800 hover:text-gray-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Image src={social.icon} alt={social.label} width={20} height={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}