"use client";
import PageBanner from "@/components/PageBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner 
        title={t('nav.whyChooseUs')} 
        description="Discover why top political leaders and parties trust us with their campaign strategy and execution."
      />
      <WhyChooseUs />
      <Stats />
      <CTASection />
    </>
  );
}
