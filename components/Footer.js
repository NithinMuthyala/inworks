"use client";
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const companyLinks = t("footer.company");
  const serviceLinks = t("footer.services");
  const quickLinks = t("footer.quickLinks");
  const contactInfo = t("contact.info");

  const columns = [
    { 
      title: "Company", 
      links: companyLinks, 
      hrefs: ["/about", "/services", "/", "/privacy-policy"] 
    },
    { 
      title: "Services", 
      links: serviceLinks, 
      hrefs: ["/services", "/services", "/ghmc", "/services"] 
    },
    { 
      title: "Quick Links", 
      links: quickLinks, 
      hrefs: ["/", "/testimonials", "/contact"] 
    },
  ];

  return (
    <footer className="bg-[#001020] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl sm:text-2xl font-bold font-poppins text-white mb-3 sm:mb-4 inline-block">
              {t("nav.logo")}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Professional political consulting with data-driven strategies, digital outreach, and ground-level execution for winning campaigns.
            </p>
            {/* Contact quick info */}
            <div className="space-y-3">
              {[
                { icon: <Phone size={14} />, val: contactInfo?.phone },
                { icon: <Mail size={14} />, val: contactInfo?.email },
                { icon: <MapPin size={14} />, val: contactInfo?.address },
              ].map((c, i) => (
                <div key={i} className="flex items-center space-x-3 text-gray-400 text-sm">
                  <span className="text-[#C5A059] flex-shrink-0">{c.icon}</span>
                  <span className="break-words">{c.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col, ci) => (
            <div key={ci}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 sm:mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {Array.isArray(col.links) &&
                  col.links.map((link, li) => (
                    <li key={li}>
                      <Link
                        href={col.hrefs[li] || "/"}
                        className="group flex items-center space-x-1 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                      >
                        <ArrowRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200 text-[#C5A059]"
                        />
                        <span>{link}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">{t("footer.rights")}</p>
          <div className="flex space-x-4 sm:space-x-6 text-gray-500 text-xs sm:text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
