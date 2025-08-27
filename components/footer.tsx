"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ]

  const socialLinks = [
    { icon: "/ig.png", href: "#", label: "Instagram" },
    { icon: "/x.png", href: "#", label: "Twitter" },
    { icon: '/fb.png', href: "#", label: "Facebook" },
    { icon: "/x.png", href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-[#dbe1e8] py-16"> {/* Used the brand's light blue and increased padding */}
      <div className="max-w-7xl mx-auto px-6">
        {/*
          --- UPDATED GRID ---
          - Uses a larger vertical gap on mobile (gap-y-10) for better stacking.
          - The grid structure itself is correct for responsiveness.
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-8 text-left">
          
          {/* Logo and Company Info */}
          {/*
            --- UPDATED LOGO COLUMN ---
            - Spans 2 columns on small screens for better balance before breaking to 4.
            - md:col-span-1 ensures it takes up 1 of 4 columns on medium screens and up.
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1" // Logo takes its own space
          >
            {/* The Link tag makes the logo clickable, which is good practice */}
            <div className="flex items-center">
              <Link href="/" className="mr-3">
                <Image src="/Domus-logo.png" width={100} height={100} alt="Domus Logo" />
              </Link>
      
            </div>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="ml-3"
          >
          <div className=" md:ml-9">
            <h3 className="font-semibold  text-gray-800 mb-4 tracking-wider">About us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
                  Properties and Services
                </Link>
              </li>
            </ul>
          </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="ml-3"
          >
            <h3 className="font-semibold text-gray-800 mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="ml-3"
          >
            <h3 className="font-semibold text-gray-800 mb-4 tracking-wider">Social media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                >
                  <Image src={social.icon} alt={social.label} width={20} height={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}