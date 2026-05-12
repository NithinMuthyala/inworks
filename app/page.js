import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutBrief from "@/components/AboutBrief";
import SectionBanner from "@/components/SectionBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import CampaignProcess from "@/components/CampaignProcess";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutBrief />
      {/* Banner between About and Why Choose Us */}
      <SectionBanner sectionKey="banner" />
      <WhyChooseUs />
      <Services />
      {/* Banner between Services and Process */}
      <SectionBanner sectionKey="banner" />
      <CampaignProcess />
      <Testimonials />
      <CTASection />
      <ContactForm />
    </>
  );
}
