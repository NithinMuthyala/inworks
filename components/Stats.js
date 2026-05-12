"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ""));
    if (isNaN(numericTarget)) { setCount(target); return; }
    let start = 0;
    const step = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({ stat, index }) {
  const suffix = stat.value.replace(/[0-9]/g, "").trim();
  const { count, ref } = useCountUp(stat.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 text-center backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-2"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C5A059] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-[#C5A059] mb-3">
          {typeof count === "number" ? `${count}${suffix}` : count}
        </div>
        <div className="text-white/60 text-sm sm:text-base font-medium tracking-wide uppercase">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const stats = t("stats");

  return (
    <section className="py-20 bg-[#001C3D] relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Array.isArray(stats) && stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
