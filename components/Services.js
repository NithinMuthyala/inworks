"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Vote, Smartphone, BarChart2, Share2, Layout, Newspaper,
  ClipboardList, Globe, CheckCircle2,
} from "lucide-react";

const icons = [Vote, Smartphone, BarChart2, Share2, Layout, Newspaper, ClipboardList, Globe];

export default function Services() {
  const { t } = useLanguage();
  const items = t("services.items");

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4F7FA] rounded-full -translate-y-1/2 translate-x-1/2 -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001C3D] font-poppins">
            {t("services.heading")}
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {Array.isArray(items) &&
            items.map((item, i) => {
              const Icon = icons[i % icons.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                  className="bg-[#F4F7FA]/50 hover:bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    {/* Icon & Title Row */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex-shrink-0 flex items-center justify-center group-hover:bg-[#001C3D] transition-colors duration-300">
                        <Icon
                          size={20}
                          className="text-[#001C3D] group-hover:text-[#C5A059] transition-colors duration-300"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#001C3D] font-poppins leading-tight pt-1">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-500 mb-5 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-auto pt-4 border-t border-gray-200/50">
                      <ul className="space-y-2">
                        {item.includes.map((inc, j) => (
                          <li
                            key={j}
                            className="flex items-start space-x-2 text-[11px] sm:text-xs text-gray-700"
                          >
                            <CheckCircle2
                              size={12}
                              className="text-[#C5A059] flex-shrink-0 mt-0.5"
                            />
                            <span className="font-medium leading-tight">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="h-1 w-0 bg-[#C5A059] group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
