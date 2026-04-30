/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Users,
  Bell,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    icon: <Info className="w-5 h-5 text-blue-600" />,
    content:
      "We value your trust. This Privacy Policy explains how TrustLoan collects, uses, and protects your information when you apply for a loan through our platform.",
  },
  {
    id: "data-collection",
    title: "Information We Collect",
    icon: <Eye className="w-5 h-5 text-blue-600" />,
    content:
      "To process your application, we collect personal details (name, SSN, address), financial records (income, bank statements), and employment history. We may also obtain credit reports from third-party bureaus.",
  },
  {
    id: "data-usage",
    title: "How We Use Data",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    content:
      "Your data is used primarily to evaluate creditworthiness, verify identity, prevent fraud, and comply with legal requirements. We also use aggregated data to improve our lending models.",
  },
  {
    id: "security",
    title: "Security Measures",
    icon: <Lock className="w-5 h-5 text-blue-600" />,
    content:
      "We use industry-standard encryption, multi-factor authentication, and secure servers to protect your data. Access is restricted to authorized personnel only.",
  },
  {
    id: "sharing",
    title: "Third-Party Sharing",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    content:
      "We share your information with partner lenders, credit bureaus, and regulatory bodies only as necessary for loan processing or legal compliance. We do not sell your personal data to marketers.",
  },
  {
    id: "communications",
    title: "Communications",
    icon: <Bell className="w-5 h-5 text-blue-600" />,
    content:
      "We may send you updates regarding your application status or security alerts. You can manage your preferences for marketing communications in your account settings.",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">CoopLoan</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  Table of Contents
                </h2>
                <nav className="flex flex-col gap-1">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                        activeSection === section.id
                          ? "bg-blue-50 text-blue-600 shadow-sm"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${activeSection === section.id ? "rotate-90" : ""}`}
                      />
                      <span className="text-sm font-semibold">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <h3 className="font-bold mb-2">Have questions?</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Our compliance team is here to help clarify any
                  privacy-related concerns.
                </p>
                <a
                  href="mailto:privacy@cooploan.com"
                  className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-all group"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Content */}
          <section className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Our Privacy Pledge
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
                We believe financial privacy is a fundamental right. This
                document outlines our commitment to handling your data with
                integrity and transparency.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-400 font-medium">
                <span>Last Updated: April 30, 2026</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>Effective Immediately</span>
              </div>
            </motion.div>

            <div className="space-y-16 lg:space-y-24">
              {SECTIONS.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {section.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                        {section.title}
                      </h2>
                      <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <hr className="my-24 border-slate-100" />

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                Your Rights & Choice
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                You have the right request the deletion of your personal data at
                any time. If you wish to exercise these rights, please contact
                our Data Protection Officer.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/delete-account"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl hover:border-red-400 hover:shadow-lg transition-all group"
                >
                  <div className="text-left">
                    <span className="block text-sm font-bold">
                      Delete Account
                    </span>
                    <span className="text-xs text-slate-400">
                      Permanently remove all information
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-red-500" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-top border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight">
              TrustLoan Security Hub
            </span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Security Audit
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Cookie Policy
            </a>
          </div>
          <p className="text-xs text-slate-400">
            &copy; 2026 TrustLoan Inc. All rights reserved. Registered with
            NMLS.
          </p>
        </div>
      </footer>
    </div>
  );
}
