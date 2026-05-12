"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you fill out a form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and political affiliation/organization details."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about your campaign, and to provide you with information or advertising relating to our services."
    },
    {
      title: "3. Data Security",
      content: "We take the security of your data seriously. We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information."
    },
    {
      title: "4. Information Sharing",
      content: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential."
    },
    {
      title: "5. Your Rights",
      content: "You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at the email provided in our contact section."
    },
    {
      title: "6. Changes to this Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    }
  ];

  return (
    <>
      <PageBanner 
        title="Privacy Policy" 
        description="Your trust is our priority. Learn how we handle and protect your data."
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <p className="mb-10 text-lg">
              At PoliticalConsult, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-[#001C3D] font-poppins mb-4">
                    {section.title}
                  </h2>
                  <p className="leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-[#F4F7FA] rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#001C3D] font-poppins mb-4">Contact Us</h3>
              <p className="mb-0">
                If you have any questions about this Privacy Policy, please contact us at:<br/>
                <span className="font-bold text-[#C5A059]">privacy@politicalconsult.in</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
