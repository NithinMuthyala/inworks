"use client";
import PageBanner from "@/components/PageBanner";
import AboutBrief from "@/components/AboutBrief";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner 
        title={t('nav.aboutUs')} 
        description="Combining technology, analytics, and grassroots planning to deliver measurable election outcomes."
      />
      <AboutBrief />
      <Stats />
      <CTASection />
    </>
  );
}
