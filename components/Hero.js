"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const trustLines = t("hero.trustLines");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001C3D]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001C3D] via-[#002d61] to-[#001020]" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#C5A059] opacity-5"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 16}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Gold accent line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-xs sm:text-sm text-white/80 font-medium">Professional Political Consulting</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-[1.1] mb-6"
            >
              {t("hero.heading")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero.subheading")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C5A059] text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base hover:bg-[#b38d44] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#C5A059]/30"
              >
                {t("hero.cta1")}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                {t("hero.cta2")}
              </Link>
            </motion.div>

            {/* Trust Lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              {Array.isArray(trustLines) && trustLines.map((line, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-white/70 text-xs sm:text-sm text-left">{line}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="w-[420px] h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-[#C5A059]/20 shadow-2xl relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 rounded-3xl bg-[#C5A059] flex items-center justify-center mb-8 shadow-xl shadow-[#C5A059]/20">
                    <svg viewBox="0 0 48 48" className="w-14 h-14" fill="none">
                      <circle cx="24" cy="12" r="8" fill="#001C3D" />
                      <path d="M4 44c0-11 8.95-20 20-20s20 9 20 20" stroke="#001C3D" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M34 28l6 6M34 34l6-6" stroke="#001C3D" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold font-poppins mb-4">Precision Campaigns</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">Dominating constituencies through real-time data and field intelligence.</p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[{ label: "Success", val: "87%" }, { label: "States", val: "12+" }].map((s) => (
                      <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="text-[#C5A059] font-bold text-2xl">{s.val}</div>
                        <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">War Room</div>
                  <div className="text-sm font-bold text-[#001C3D]">Active Operations</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
