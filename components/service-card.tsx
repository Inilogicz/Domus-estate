import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion

interface ServiceCardProps {
  title: string;
  image: string;
  href: string;
}

export function ServiceCard({ title, image, href }: ServiceCardProps) {
  return (
    <motion.div // Use motion.div for animation
      className="bg-[#C5D5E273] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow gap-6"
      whileHover={{ scale: 1.03 }} // Animate on hover: scale up slightly
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Animate to: fully visible and in original position
      transition={{ duration: 0.3 }} // Animation duration
    >
      <div className="aspect-[4/3] relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 bg-[#C5D5E273] text-center mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <a
          href={href}
          className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          Book now
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}