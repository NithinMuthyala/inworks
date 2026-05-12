"use client";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import CampaignProcess from "@/components/CampaignProcess";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner 
        title={t('nav.services')} 
        description="End-to-end campaign planning, execution, and monitoring for political candidates and parties."
      />
      <Services />
      <CampaignProcess />
      <CTASection />
    </>
  );
}
