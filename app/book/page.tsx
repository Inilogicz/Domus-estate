"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/contact-hero-section" // Reusing the contact hero section
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image" // For the right column background

// A type to manage the different states of our form submission
type FormStatus = "idle" | "submitting" | "success" | "error";

export default function BookNowPage() {
  // State to hold the data from the form's input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "", // New state for the selected service
    message: "",
  });

  // State variables to track the form's submission status and feedback messages
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Options for the service dropdown
  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "block_management", label: "Block Management" },
    { value: "maintenance", label: "Maintenance" },
    { value: "house_keeping", label: "House Keeping" },
    { value: "financial_services", label: "Financial Services" },
    { value: "insurance", label: "Insurance" },
  ];

  // This function updates the formData state whenever a user types in an input or selects a dropdown option
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // Send the form data to our backend API route at /api/contact (same endpoint, but now handles 'service')
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // If the server responds with a success status (e.g., 200)
        setStatus("success");
        setFeedbackMessage(data.message);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" }); // Clear all form fields including phone
      } else {
        // If the server responds with an error status (e.g., 400, 500)
        setStatus("error");
        setFeedbackMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      // If there's a network error or the fetch itself fails
      console.error("Form submission error:", error);
      setStatus("error");
      setFeedbackMessage("Failed to send booking request. Please try again later.");
    }
  };

  // Data for the social media links (reusing from contact page)
  const socialLinks = [
    { icon: "/instagram.png", href: "https://www.instagram.com/domus_residential?igsh=Z3Qxa2JocWRjNTAz&utm_source=qr", label: "Instagram" },
    { icon: "/twitter.png", href: "https://x.com/HelloResid64891", label: "X" },
    { icon: "/in.png", href: "www.linkedin.com/in/domus-residential-b8a877380", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Updated Hero Section for "Book Now" */}
      <HeroSection title="Book Now" body="" /> 

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 mx-auto gap-16 md:gap-24">
            {/* Left Column: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Make A Booking Now</h2>
              <p className="text-gray-700 mb-8 leading-relaxed font-nanum text-lg">
                Let us know what you need, and we will be in touch as soon as we can.
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
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-0 border-b rounded-none px-2 py-6 bg-gray-50 focus:border-gray-600 focus:ring-0 border-b-black text-gray-700 appearance-none pr-8" // Added appearance-none and pr-8 for custom arrow
                    required
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.value === ""}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom arrow for the select input */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                   {/* This is intentionally an Input field, assuming it's for phone number or similar. 
                       If it's meant to be email, change type="email" and name="email" */}
                  <Input
                    type="email" // Changed to tel as per your screenshot format
                    name="email" // Assuming this is for a phone number
                    placeholder="Type your email"
                    value={formData.email} // Reusing email state for now, but ideally this would be a separate phone state
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
                   {/* This is intentionally an Input field, assuming it's for phone number or similar. 
                       If it's meant to be email, change type="email" and name="email" */}
                  <Input
                    type="phone" // Changed to tel as per your screenshot format
                    name="phone" // Assuming this is for a phone number
                    placeholder="Type your phone number"
                    value={formData.phone} // Reusing email state for now, but ideally this would be a separate phone state
                    onChange={handleChange}
                    className="w-full border-0 border-b rounded-none px-2 py-6 bg-gray-50 focus:border-gray-600 focus:ring-0 border-b-black"
                    required
                  />
                </motion.div>
            

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
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
                  transition={{ duration: 0.6, delay: 0.5 }}
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

           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}