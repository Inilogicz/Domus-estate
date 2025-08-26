
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

// The props for our component are updated to accept an array of image URLs
interface HeroSectionProps {
  title: string
  subtitle?: string
  body: string
  images: string[] // This is the new prop for the carousel images
  showScroll?: boolean
  className?: string
  interval?: number // Optional: sets the speed of the carousel in milliseconds
}

// A default image to prevent errors if no images are provided
const defaultImages = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.jpg', 'bg5.jpg','/bg6.jpg'];

export default function HeroSection({
  title,
  subtitle,
  body,
  images = defaultImages,
  showScroll = false,
  interval = 5000, // Default carousel speed is 5 seconds
}: HeroSectionProps) {

  // State to keep track of which image is currently showing
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This `useEffect` hook sets up the timer for the carousel
  useEffect(() => {
    // We only need a timer if there is more than one image
    if (images.length > 1) {
      const timer = setInterval(() => {
        // This function calculates the next image index, looping back to 0 at the end
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);

      // This is a cleanup function that stops the timer when the component is no longer on screen
      return () => clearInterval(timer);
    }
  }, [images.length, interval]); // This effect will re-run if the number of images or the interval speed changes

  // Animation variants for the smooth cross-fade transition
  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: ["easeInOut"] } },
    exit: { opacity: 0, transition: { duration: 1.5, ease: ["easeInOut"] } },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image Carousel Container */}
      <AnimatePresence>
        <motion.div
          // The 'key' is essential. When the index changes, Framer Motion knows to animate out the old element and animate in the new one.
          key={currentImageIndex}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[currentImageIndex]}')`,
          }}
        />
      </AnimatePresence>

      {/* NEW: Shadow Overlay */}
      {/* This semi-transparent black layer sits on top of the image but behind the text, making the text easier to read. */}
      <div className="absolute inset-0 bg-black/50 z-[5]" />

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
            transition={{ duration: 2, repeat: Infinity }} // Corrected repeat syntax
            className="text-[#F5DABD] cursor-pointer"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}