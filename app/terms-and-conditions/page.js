"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website’s particular services, you shall be subject to any posted guidelines or rules applicable to such services."
    },
    {
      title: "2. Service Description",
      content: "PoliticalConsult provides political consulting, campaign management, and digital strategy services. The specific scope of work for each client is defined in a separate Service Agreement."
    },
    {
      title: "3. Intellectual Property",
      content: "The website and its original content, features, and functionality are owned by PoliticalConsult and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
    },
    {
      title: "4. User Conduct",
      content: "Users agree not to use the website for any purpose that is unlawful or prohibited by these Terms. You may not use the website in any manner that could damage, disable, overburden, or impair any PoliticalConsult server."
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall PoliticalConsult, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "6. Governing Law",
      content: "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions."
    }
  ];

  return (
    <>
      <PageBanner 
        title="Terms & Conditions" 
        description="Please read these terms carefully before using our services."
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <p className="mb-10 text-lg italic">
              Last Updated: May 2026
            </p>
            
            <div className="space-y-12">
              {terms.map((term, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-[#001C3D] font-poppins mb-4">
                    {term.title}
                  </h2>
                  <p className="leading-relaxed">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-gray-100 pt-10">
              <p className="text-sm text-gray-400">
                If you have any questions regarding these terms, please contact us at <span className="text-[#C5A059] font-bold">legal@politicalconsult.in</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
