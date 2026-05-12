"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#001C3D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C5A059 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, #C5A059 0%, transparent 50%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-4 sm:mb-6">
            Take Action
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins leading-tight mb-4 sm:mb-6">
            {t("cta.heading")}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cta.content")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#C5A059] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-md hover:bg-[#b38d44] transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#C5A059]/20 group text-sm sm:text-base"
            >
              <Phone size={18} />
              <span>{t("cta.buttons.contact")}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-md hover:bg-white/10 hover:border-white transition-all duration-300 group text-sm sm:text-base"
            >
              <span>{t("cta.buttons.book")}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
