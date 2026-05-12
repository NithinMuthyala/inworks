"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const socials = [
  { name: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { name: "X", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { name: "YouTube", d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" },
  { name: "Instagram", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" },
];

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", party: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const info = t("contact.info");
  const formLabels = t("contact.form");

  const contactItems = [
    { icon: <Phone size={20} />, value: info?.phone },
    { icon: <Mail size={20} />, value: info?.email },
    { icon: <MapPin size={20} />, value: info?.address },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001C3D] font-poppins">
            {t("contact.heading")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-[#001C3D] rounded-2xl p-8 sm:p-10 text-white overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-2">{t("contact.heading")}</h3>
              <p className="text-gray-400 text-sm mb-8">We&apos;re here to help you win.</p>

              <div className="space-y-6">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 text-sm pt-2.5 leading-relaxed break-words">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Follow Us</p>
                <div className="flex space-x-3">
                  {socials.map((s, i) => (
                    <button key={i} aria-label={s.name} className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d={s.d} /></svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#C5A059] opacity-5 translate-x-4 translate-y-4 pointer-events-none" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001C3D] font-poppins mb-2">Inquiry Sent!</h3>
                  <p className="text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: formLabels?.name, type: "text" },
                      { name: "phone", label: formLabels?.phone, type: "tel" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-sm font-semibold text-[#001C3D] mb-2">{f.label}</label>
                        <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none transition-colors bg-[#F4F7FA]" placeholder={f.label} />
                      </div>
                    ))}
                  </div>
                  {[
                    { name: "email", label: formLabels?.email, type: "email" },
                    { name: "party", label: formLabels?.party, type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-semibold text-[#001C3D] mb-2">{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none transition-colors bg-[#F4F7FA]" placeholder={f.label} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-[#001C3D] mb-2">{formLabels?.message}</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none transition-colors bg-[#F4F7FA] resize-none" placeholder={formLabels?.message} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center space-x-2 bg-[#001C3D] text-white font-bold py-4 rounded-xl hover:bg-[#C5A059] transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-70 cursor-pointer">
                    {loading ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <><Send size={18} /><span>{formLabels?.submit}</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
