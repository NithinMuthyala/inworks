"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PageBanner({ title, description }) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#001C3D] pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C5A059 0px,
            #C5A059 2px,
            transparent 2px,
            transparent 60px
          )`,
        }}
      />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#C5A059] opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#C5A059] opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white font-poppins mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed opacity-90">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-20 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-aspect-none" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
