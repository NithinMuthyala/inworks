"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function AboutBrief() {
  const { t } = useLanguage();

  const highlights = [
    { icon: <Users size={20} />, label: "Expert Team" },
    { icon: <Target size={20} />, label: "Precision Strategy" },
    { icon: <TrendingUp size={20} />, label: "Proven Results" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-gradient-to-br from-[#001C3D] to-[#002d61] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, #C5A059 1px, transparent 1px),
                                      radial-gradient(circle at 70% 70%, #C5A059 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10 text-center px-6 sm:px-10">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#C5A059]/20 border-4 border-[#C5A059]/40 flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float">
                    <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16" fill="none">
                      <rect x="8" y="32" width="12" height="24" rx="2" fill="#C5A059" />
                      <rect x="26" y="20" width="12" height="36" rx="2" fill="#C5A059" opacity="0.7" />
                      <rect x="44" y="8" width="12" height="48" rx="2" fill="#C5A059" opacity="0.5" />
                      <circle cx="14" cy="28" r="4" fill="#fff" />
                      <circle cx="32" cy="16" r="4" fill="#fff" />
                      <circle cx="50" cy="4" r="4" fill="#fff" />
                      <path d="M14 28 L32 16 L50 4" stroke="#C5A059" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold font-poppins mb-2 sm:mb-3">
                    Years of Political Excellence
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Combining technology, analytics & grassroots planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating highlight card - hidden on small mobile */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="hidden sm:block absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#001C3D] font-poppins">87%</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Campaign Win Rate</div>
            </motion.div>

            {/* Gold accent box - hidden on mobile */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 bg-[#C5A059] rounded-2xl -z-10 opacity-30" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-block px-4 py-1.5 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001C3D] font-poppins leading-tight mb-4 sm:mb-6">
                {t("about.heading")}
              </h2>
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
              {t("about.content1")}
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {t("about.content2")}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center space-x-2 bg-[#F4F7FA] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[#001C3D] text-xs sm:text-sm font-medium"
                >
                  <span className="text-[#C5A059]">{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </motion.div>

            <Link
              {...fadeUp(0.5)}
              href="/why-choose-us"
              className="inline-flex items-center space-x-2 bg-[#001C3D] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-md hover:bg-[#002d61] transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <span>{t("about.cta")}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
