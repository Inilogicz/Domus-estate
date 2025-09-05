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
    <section className="relative h-100 flex items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg5.jpg')`,
        }}
      />

      {/* --- NEW: DARK OVERLAY --- */}
      {/* This semi-transparent black layer sits on top of the image but behind the text. */}
      {/* z-[5] places it between the background (z-0) and the text content (z-10). */}
      <div className="absolute inset-0 bg-black/60 z-[5]" />

      {/* Content */}
      {/* The z-10 on this container ensures it stays on top of the new overlay. */}
      <div className="relative z-10 text-left text-white px-6 w-full max-w-7xl mx-auto">  
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
            <h1 className="font-nanum text-[#F5DABD] text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 ">{title}</h1>
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" // Added z-10 to ensure it's on top
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#F5DABD] cursor-pointer"
          >
            {/* <ChevronDown size={32} /> */}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}