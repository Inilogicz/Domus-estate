"use client"

import { motion, AnimatePresence } from "framer-motion"
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

  // Animation variants for the overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  // Staggered animation for the list items
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-50 px-6 py-6"
      >
        <div className="max-w-7xl flex items-center justify-between mx-auto">
          {" "}
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-white">
                <Image
                  src="/domus-logo.png"
                  width={300}
                  height={40}
                  alt="Domus Logo"
                  className="h-20 w-auto"
                />
              </div>
            </Link>
          </motion.div>
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {" "}
            {[
              { name: "Home", href: "/" },
              { name: "About us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact us", href: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/book"
                className="bg-white text-black px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 z-50">
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#2d2d2d] flex flex-col items-center justify-center"
          >
            <motion.div variants={listVariants} initial="hidden" animate="visible" className="text-center">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="my-5">
                  <Link
                    href={item.href}
                    className="block text-white text-3xl font-light tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="my-8">
                <Link
                  href="/book"
                  className="inline-block bg-[#F5DABD] text-white px-8 py-3 text-xl font-medium tracking-wider hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
