"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Home, Sparkles } from "lucide-react"

type Service = {
  title: string;
  imageUrl: string;
};
export default function HomePage() {
const services: Service[] = [
  {
    title: "Lifestyle",
    imageUrl: "/left.png",
  },
  {
    title: "Residential Management",
    imageUrl: "/centre.png",
  },
  {
    title: "Housekeeping",
    imageUrl: "/right.png",
  },
];

const customers = [
  { id: 1, imageUrl: '/cus1.png' },
  { id: 2, imageUrl: '/cus2.png' },
  { id: 3, imageUrl: '/cus3.png' },
];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <HeroSection title="DOMUS" subtitle="RESIDENTIAL" body="PROPERTY & SERVICE" showScroll={true} />

      <section className="bg-[#dbe1e8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Star is now hidden on mobile and appears on medium screens and up */}
              <div className="absolute -left-2 -top-2 hidden md:block">
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.17991 31.03L19.1778 31.1912C19.3812 31.1951 19.5803 31.2505 19.7565 31.3522C19.9327 31.4539 20.0802 31.5987 20.1853 31.7729L28.8239 46.4129C28.9566 46.6344 29.1579 46.8066 29.3973 46.9034C29.6367 47.0003 29.9011 47.0165 30.1506 46.9497C30.4 46.8828 30.6209 46.7366 30.7798 46.533C30.9387 46.3294 31.0269 46.0796 31.0311 45.8214L31.1923 28.8236C31.1962 28.6201 31.2516 28.421 31.3534 28.2448C31.4551 28.0686 31.5998 27.9211 31.7741 27.816L46.414 19.1775C46.6355 19.0447 46.8077 18.8434 46.9046 18.604C47.0014 18.3646 47.0177 18.1002 46.9508 17.8508C46.884 17.6013 46.7377 17.3805 46.5342 17.2216C46.3306 17.0627 46.0808 16.9744 45.8226 16.9702L28.8247 16.809C28.6213 16.8051 28.4222 16.7497 28.246 16.648C28.0698 16.5462 27.9223 16.4015 27.8172 16.2273L19.1787 1.58731C19.0459 1.36583 18.8446 1.19362 18.6052 1.09677C18.3658 0.999909 18.1014 0.983669 17.8519 1.05051C17.6025 1.11734 17.3816 1.26362 17.2227 1.46719C17.0638 1.67076 16.9756 1.92055 16.9714 2.17875L16.8102 19.1766C16.8063 19.38 16.7509 19.5791 16.6491 19.7553C16.5474 19.9315 16.4027 20.0791 16.2285 20.1842L1.58847 28.8227C1.36699 28.9555 1.19478 29.1568 1.09793 29.3962C1.00107 29.6356 0.98483 29.9 1.05167 30.1494C1.1185 30.3989 1.26478 30.6197 1.46835 30.7786C1.67192 30.9375 1.92171 31.0257 2.17991 31.03Z" fill="url(#paint0_linear_52_468)" stroke="#FCD34D" strokeWidth="0.609375" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_52_468" x1="9.33142" y1="9.33593" x2="38.6711" y2="38.6643" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FCD966"/>
                      <stop offset="0.5" stopColor="#FCD966"/>
                      <stop offset="1" stopColor="#FCCD34"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Padding is now responsive: none on mobile, pl-10 on medium screens and up */}
              <span className="md:pl-10 text-gray-800 font-medium tracking-widest text-2xl md:text-2xl">
                TRUSTED
              </span>
            </div>
            {/* Responsive padding also applied here */}
            <h2 className="md:pl-10 font-playfair text-4xl md:text-6xl font-normal text-gray-800 mt-4">
              PROPERTY
              <br />
              MANAGEMENT
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex flex-col items-start">
              <p className="text-gray-700 text-left mb-8 text-base md:text-lg max-w-md">
                We build relationships based on integrity and mutual respect. Let us show you what it means to have a true partner in property management.
              </p>
              {/* Corrected flexbox logic: use space-y for vertical spacing */}
              <div className="flex flex-col items-start space-y-8">
                <div className="flex -space-x-4">
                  {customers.map((customer) => (
                    <img
                      key={customer.id}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                      src={customer.imageUrl}
                      alt={`Customer ${customer.id}`}
                    />
                  ))}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#dbe1e8] border-2 border-gray-600">
                    <span className="text-gray-600 text-2xl font-semibold">+</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-5xl text-left font-bold text-gray-800">2k+</div>
                  <div className="text-gray-700 text-left text-sm tracking-wider">Happy Customers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Services Section */}
     <section>
      <div className="grid grid-cols-1 md:grid-cols-[25%_50%_25%]">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className="h-80 md:h-96 bg-cover bg-center bg-no-repeat overflow-hidden filter grayscale"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${service.imageUrl}')`,
              }}
            >
              {/* --- THIS IS THE UPDATED PART --- */}
              <div className="absolute inset-0 flex flex-col justify-end px-8 pb-3 text-white">
                <h3 className="font-playfair text-lg font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Bespoke Service Section */}
 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-normal text-gray-800 mb-6 leading-tight">
                Bespoke Property
                <br />
                Management
                <br />
                Service
              </h2>
              <p className="text-gray-600 mb-8">
                Tailored to your exact requirements
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-slate-300 hover:bg-slate-400/90 text-gray-800 px-8 py-3 font-medium tracking-wide">
                  SEE MORE
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="h-[700px] w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/frame-26.png')`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact us Session */}
       <section
      className="h-130 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image-11.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Main Heading */}
          <h2 className="font-playfair text-2xl md:text-xl font-normal text-stone-200 mb-8 leading-snug">
            Contact our dedicated team today
            <br />
            and begin your bespoke management journey
          </h2>

          {/* Contact Button with Animation */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/contact">
              <button className="bg-slate-300 hover:bg-slate-400/90 text-gray-800 px-10 py-3 font-medium tracking-wide">
              Contact Us
              </button>
            </a>
            </motion.div>
          </motion.div>
      </div>
    </section>

      <Footer />
    </div>
  )
}
