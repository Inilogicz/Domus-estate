"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  body: string
  showScroll?: boolean
  className?: string
}

export default function HeroSection({ title, subtitle, body, showScroll = false }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/domus-bg.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-playfair text-[#F5DABD] text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">{title}</h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl tracking-[0.3em] font-light opacity-90"
            >
              {subtitle}
            </motion.p>
          )}
          {body && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg font-light opacity-80 mt-4"
            >
              {body}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-[#F5DABD] cursor-pointer"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
