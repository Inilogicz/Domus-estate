"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
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
    <footer className="bg-domus-blue py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
             
              <div className="text-gray-800">
              < Image src="/Domus-logo.png" width={120} height={120} alt="Domus Logo" /> 
              </div>
            </div>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-800 mb-4">About us</h3>
            <p className="text-gray-700 text-sm">Properties and Services</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
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
          >
            <h3 className="font-semibold text-gray-800 mb-4">Social media</h3>
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
