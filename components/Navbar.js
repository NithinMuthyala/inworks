"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.ghmc'), href: '/ghmc' },
    { name: t('nav.whyChooseUs'), href: '/why-choose-us' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.aboutUs'), href: '/about' },
    { name: t('nav.testimonials'), href: '/testimonials' },
    { name: t('nav.contactUs'), href: '/contact' },
  ];

  const isTransparent = !scrolled && pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-2 sm:py-4' : 'bg-white shadow-lg py-1 sm:py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className={`text-xl sm:text-2xl font-bold font-poppins transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-primary'}`}>
              {t('nav.logo')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${isTransparent ? 'text-white' : 'text-primary'} ${pathname === link.href ? 'text-secondary font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer ${isTransparent ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
            >
              <Globe size={16} />
              <span className="text-xs font-bold uppercase">{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            <Link href="/contact" className="bg-secondary text-white px-6 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-all transform hover:scale-105 shadow-md cursor-pointer">
              {t('nav.bookConsultation')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-colors cursor-pointer ${isTransparent ? 'text-white' : 'text-primary'}`}
            >
              <Globe size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors cursor-pointer ${isTransparent ? 'text-white' : 'text-primary'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-between items-center px-3 py-3.5 sm:py-4 text-sm sm:text-base font-medium border-b border-gray-100 hover:text-secondary transition-colors ${pathname === link.href ? 'text-secondary bg-gray-50' : 'text-primary'}`}
                >
                  {link.name}
                  <ChevronRight size={16} />
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-primary text-white px-6 py-3.5 sm:py-4 rounded-md font-bold text-center text-sm sm:text-base shadow-lg">
                  {t('nav.bookConsultation')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
