// This is the complete and final code for your frontend contact page.
// File Location: /app/contact/page.tsx

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
import Image from "next/image"

// A type to manage the different states of our form submission
type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  // State to hold the data from the form's input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State variables to track the form's submission status and feedback messages
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // This function updates the formData state whenever a user types in an input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // This function is triggered when the user clicks the "SEND" button
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setStatus("submitting"); // Set status to "submitting" to show a loading state

    try {
      // Send the form data to our backend API route at /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // If the server responds with a success status (e.g., 200)
        setStatus("success");
        setFeedbackMessage(data.message);
        setFormData({ name: "", email: "", message: "" }); // Clear the form fields
      } else {
        // If the server responds with an error status (e.g., 400, 500)
        setStatus("error");
        setFeedbackMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      // If there's a network error or the fetch itself fails
      console.error("Form submission error:", error);
      setStatus("error");
      setFeedbackMessage("Failed to send message. Please try again later.");
    }
  };

  // Data for the social media links
  const socialLinks = [
    { icon: "/ig.png", href: "#", label: "Instagram" },
    { icon: "/x.png", href: "#", label: "Twitter" },
    { icon: '/fb.png', href: "#", label: "Facebook" },
    { icon: "/x.png", href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection title="Contact us" body="" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-8 leading-relaxed font-playfair text-lg">
                Please feel free to contact us and we will get back to you as soon as we can.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full border-0 border-b rounded-none px-2 py-6 bg-gray-50 focus:border-gray-600 focus:ring-0 border-b-black"
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
                    className="w-full border-0 border-b rounded-none px-2 py-6 bg-gray-50 focus:border-gray-600 focus:ring-0 border-b-black"
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
                    className="w-full border-0 border-b rounded-none px-2 py-3 bg-gray-50 focus:border-gray-600 focus:ring-0 resize-none border-b-black"
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
                    disabled={status === 'submitting'}
                    className="w-full bg-slate-300 hover:bg-slate-400/90 text-gray-800 py-6 rounded-none font-medium tracking-widest disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'SENDING...' : 'SEND'}
                  </Button>
                </motion.div>
              </form>

              {/* This area will display success or error messages to the user */}
              {feedbackMessage && (
                <p className={`mt-4 text-sm font-medium ${
                  status === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {feedbackMessage}
                </p>
              )}
            </motion.div>

            {/* Right Column: Contact Information */}
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
                <p className="text-gray-600 mb-2 font-playfair">+44 758 532 6851</p>
                <p className="text-gray-600 font-playfair">hello@domus-res.co.uk</p>
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