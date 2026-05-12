"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function SectionBanner({ sectionKey = "banner" }) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-[#001C3D]" />
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
      <div className="absolute -top-20 -left-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-[#C5A059] opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-[#C5A059] opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp}>
          <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs font-bold uppercase tracking-widest text-[#C5A059] border border-[#C5A059] rounded-full">
            Partner With Experts
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins leading-tight mb-4 sm:mb-6"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t(`${sectionKey}.heading`)}
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(`${sectionKey}.subheading`)}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#C5A059] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-base sm:text-lg hover:bg-[#b38d44] transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#C5A059]/30"
          >
            {t(`${sectionKey}.cta`)}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
