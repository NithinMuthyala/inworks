"use client";
import PageBanner from "@/components/PageBanner";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner 
        title={t('nav.testimonials')} 
        description="Hear from the leaders and campaign managers who have experienced the power of our data-driven strategies."
      />
      <Testimonials />
      <CTASection />
    </>
  );
}
