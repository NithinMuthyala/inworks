"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t("testimonials.items");
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  if (!Array.isArray(items)) return null;

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[#F4F7FA] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Voice of Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001C3D] font-poppins">
            {t("testimonials.heading")}
          </h2>
          <div className="flex justify-center mt-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#C5A059] fill-[#C5A059]" size={16} />
            ))}
          </div>
        </motion.div>

        {/* Desktop View: Interactive Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white rounded-[2rem] p-10 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F4F7FA] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Quote size={48} className="text-[#C5A059]/20 absolute top-8 right-8 group-hover:text-[#C5A059]/40 transition-colors duration-500" />
              
              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10 text-lg">
                &ldquo;{item.quote}&rdquo;
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001C3D] to-[#002d61] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#001C3D] text-lg">{item.author}</div>
                  <div className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Election Partner</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet View: Premium Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-gray-50 text-center"
              >
                <Quote size={40} className="text-[#C5A059]/20 mx-auto mb-6" />
                <p className="text-gray-700 italic leading-relaxed mb-8 text-lg sm:text-xl">
                  &ldquo;{items[current].quote}&rdquo;
                </p>
                <div className="inline-flex items-center space-x-4 text-left">
                  <div className="w-14 h-14 rounded-2xl bg-[#001C3D] flex items-center justify-center text-white font-bold text-xl">
                    {items[current].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#001C3D] text-lg">{items[current].author}</div>
                    <div className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Client Leader</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-between items-center mt-10">
              <div className="flex space-x-2">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-[#C5A059]" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#001C3D] hover:text-white hover:border-[#001C3D] transition-all cursor-pointer bg-white"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#001C3D] hover:text-white hover:border-[#001C3D] transition-all cursor-pointer bg-white"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
