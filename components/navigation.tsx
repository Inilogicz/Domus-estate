"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact us", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-white">
              {/* <div className="font-playfair text-lg font-bold tracking-wider">DOMUS</div>
              <div className="text-xs tracking-[0.2em] opacity-80">RESIDENTIAL</div> */}
              <Image src="/Domus-logo.png" width={80} height={80} alt="Domus Logo" />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-justify mx-auto space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-white hover:text-domus-cream transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-white hover:text-domus-cream py-2 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
