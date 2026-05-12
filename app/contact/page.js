"use client";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner 
        title={t('nav.contactUs')} 
        description="Ready to build a winning campaign? Get in touch with our expert consultants today."
      />
      <ContactForm />
    </>
  );
}
