"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  body: string
  images: string[]
  showScroll?: boolean
  className?: string
  interval?: number
}

// Corrected typo in the default images array ('/bg5.jpg')
const defaultImages = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.jpg', '/bg5.jpg','/bg6.jpg'];

export default function HeroSection({
  title,
  subtitle,
  body,
  images = defaultImages,
  showScroll = false,
  interval = 5000,
}: HeroSectionProps) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [images.length, interval]);

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mx-auto">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-[5]" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* --- UPDATED: Using Nanum Myeongjo for the main title --- */}
          <h1 className="font-nanum text-[#F5DABD] text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              // --- UPDATED: Also using Nanum Myeongjo for the subtitle ---
              className="font-nanum text-4xl md:text-6xl tracking-[0.2em] font-bold opacity-90"
            >
              {subtitle}
            </motion.p>
          )}

          {body && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              // --- UPDATED: Using Montserrat Extra Light for the body/tagline ---
              className="font-montserrat font-extralight text-base md:text-lg opacity-80 mt-6 tracking-[0.3em]"
            >
              {body}
            </motion.p>
          )}
        </motion.div>
      </div>

      {showScroll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#F5DABD] cursor-pointer"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}