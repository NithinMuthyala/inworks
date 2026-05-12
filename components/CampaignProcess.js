"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Lightbulb, Rocket, BarChart2 } from "lucide-react";

const icons = [Search, Lightbulb, Rocket, BarChart2];

export default function CampaignProcess() {
  const { t } = useLanguage();
  const items = t("process.items");

  return (
    <section className="py-20 sm:py-32 bg-[#001C3D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059] rounded-full blur-[150px] opacity-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059] rounded-full blur-[150px] opacity-10 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-block px-5 py-2 bg-white/5 border border-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            Our Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-6">
            {t("process.heading")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A systematic, data-driven approach to ensure every campaign reaches its maximum potential.
          </p>
        </motion.div>

        {/* Steps Grid - Forced to 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Array.isArray(items) &&
            items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group h-[320px] sm:h-[350px] w-full"
                >
                  <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-[#C5A059]/10">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-[#C5A059] text-[#001C3D] font-bold flex items-center justify-center text-lg shadow-lg shadow-[#C5A059]/30 group-hover:scale-110 transition-transform duration-500">
                      {i + 1}
                    </div>

                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-all duration-500">
                      <Icon
                        size={32}
                        className="text-[#C5A059] group-hover:text-[#001C3D] transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white font-poppins mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
