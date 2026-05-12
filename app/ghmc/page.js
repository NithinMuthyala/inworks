"use client";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Users, Zap, TrendingUp, Building2, Megaphone } from "lucide-react";

export default function GHMCPage() {
  const { t } = useLanguage();
  const ghmc = t('ghmc');

  if (!ghmc) return null;

  return (
    <>
      <PageBanner 
        title={ghmc.heading} 
        description={ghmc.subheading}
      />

      {/* Latest Updates Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4F7FA] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  Election Intelligence
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#001C3D] font-poppins mb-6">
                  {ghmc.update.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {ghmc.update.content}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 text-center">
                  <div className="text-3xl font-bold text-[#C5A059] mb-1">300</div>
                  <div className="text-xs text-gray-500 uppercase font-bold">Proposed Wards</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 text-center">
                  <div className="text-3xl font-bold text-[#C5A059] mb-1">3</div>
                  <div className="text-xs text-gray-500 uppercase font-bold">Potential Zones</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 text-center col-span-2">
                  <div className="text-xl font-bold text-[#001C3D] mb-1">Direct Election</div>
                  <div className="text-xs text-gray-500 uppercase font-bold">Mayoral Proposal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Serve Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#001C3D] font-poppins mb-4">
              {ghmc.whatWeServe.title}
            </h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ghmc.whatWeServe.items.map((item, i) => {
              const iconsList = [MapPin, Zap, Building2, Megaphone];
              const Icon = iconsList[i % iconsList.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-[#F4F7FA] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#001C3D] transition-colors duration-300">
                    <Icon size={24} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001C3D] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Make You Win Section */}
      <section className="py-20 sm:py-32 bg-[#001C3D] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6">
              {ghmc.howToWin.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Winning an urban election like GHMC requires a mix of high-tech digital outreach and granular booth-level management.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {ghmc.howToWin.items.map((item, i) => {
              const winIcons = [TrendingUp, Users, Zap];
              const Icon = winIcons[i % winIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-[#C5A059] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#C5A059]/20">
                    <Icon size={32} className="text-[#001C3D]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
