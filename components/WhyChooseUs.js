"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  BarChart2, Brain, Megaphone, MapPin, Newspaper, Radio,
} from "lucide-react";

const icons = [BarChart2, Brain, Megaphone, MapPin, Newspaper, Radio];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const items = t("whyChooseUs.items");

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001C3D] font-poppins">
            {t("whyChooseUs.heading")}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {Array.isArray(items) &&
            items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#C5A059]/30 cursor-default"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#001C3D]/5 group-hover:bg-[#001C3D] flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-[#001C3D] group-hover:text-[#C5A059] transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#001C3D] font-poppins mb-2 sm:mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-4 sm:mt-6 h-0.5 w-0 bg-[#C5A059] group-hover:w-full transition-all duration-500 rounded-full" />
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
