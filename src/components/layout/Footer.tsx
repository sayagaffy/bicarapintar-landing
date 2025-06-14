"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const Footer = () => {
  const quickLinks = [
    { name: "Platform Features", href: "#platform" },
    { name: "Industry Solutions", href: "#solutions" },
    { name: "Implementation", href: "#implementation" },
    { name: "About Us", href: "#about" },
  ];

  const services = [
    { name: "BicaraChat", href: "#platform" },
    { name: "BicaraVoice", href: "#platform" },
    { name: "Custom AI Development", href: "#solutions" },
    { name: "Enterprise Integration", href: "#implementation" },
  ];

  const resources = [
    { name: "Case Studies", href: "#solutions" },
    { name: "Technical Documentation", href: "#docs" },
    { name: "Implementation Guide", href: "#guide" },
    { name: "API Reference", href: "#api" },
  ];

  const handleNavClick = (href: string) => {
    const elementId = href.replace("#", "");
    scrollToElement(elementId, 80);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-void-black border-charcoal border-t">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="gap-8 lg:gap-12 grid lg:grid-cols-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex justify-center items-center w-8 h-8">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-arctic-white"
                      fill="currentColor"
                    >
                      <path
                        d="M25,50 C25,35 35,25 50,25 C65,25 75,35 75,50 C75,65 65,75 50,75 C35,75 25,65 25,50 Z M75,50 C75,35 85,25 100,25 C85,25 75,35 75,50 C75,65 85,75 100,75 C85,75 75,65 75,50 Z"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                  <div className="font-goli font-semibold text-arctic-white text-xl">
                    bicarapintar
                  </div>
                </div>

                <p className="mb-6 text-light-gray leading-relaxed">
                  Enterprise AI communication platform with proven
                  implementation track record. Built by experienced team for
                  Indonesian enterprises with global standards.
                </p>

                {/* Company Details */}
                <div className="mb-6">
                  <h4 className="mb-3 font-goli font-medium text-arctic-white">
                    PT Bicara Pintar Indonesia
                  </h4>
                  <p className="text-muted-gray text-sm">
                    Established 2023 • Enterprise AI Solutions
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href="https://linkedin.com/company/bicarapintar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-droplet hover:bg-royal-purple/10 border border-charcoal hover:border-royal-purple rounded-lg w-10 h-10 transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-light-gray" />
                  </a>
                  <a
                    href="https://twitter.com/bicarapintar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-droplet hover:bg-royal-purple/10 border border-charcoal hover:border-royal-purple rounded-lg w-10 h-10 transition-all duration-200"
                  >
                    <Twitter className="w-5 h-5 text-light-gray" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="mb-6 font-goli font-semibold text-arctic-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-light-gray hover:text-arctic-white text-left transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="mb-6 font-goli font-semibold text-arctic-white">
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <button
                        onClick={() => handleNavClick(service.href)}
                        className="text-light-gray hover:text-arctic-white text-left transition-colors"
                      >
                        {service.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="mb-6 font-goli font-semibold text-arctic-white">
                  Resources
                </h4>
                <ul className="space-y-3">
                  {resources.map((resource) => (
                    <li key={resource.name}>
                      <button
                        onClick={() => handleNavClick(resource.href)}
                        className="text-light-gray hover:text-arctic-white text-left transition-colors"
                      >
                        {resource.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="mb-6 font-goli font-semibold text-arctic-white">
                  Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="flex-shrink-0 mt-0.5 w-4 h-4 text-quantum-teal" />
                    <div className="text-light-gray text-sm">
                      <div className="mb-1 font-medium text-arctic-white">
                        Bandung HQ
                      </div>
                      <div>Jl. Simponi No.21, Turangga</div>
                      <div>Kec. Lengkong, Bandung</div>
                      <div>West Java 40264</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="flex-shrink-0 mt-0.5 w-4 h-4 text-royal-purple" />
                    <div className="text-light-gray text-sm">
                      <div className="mb-1 font-medium text-arctic-white">
                        Jakarta Office
                      </div>
                      <div>Royal Spring Residence</div>
                      <div>Blok Platinum No.10</div>
                      <div>Jati Padang, Jakarta 12540</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-quantum-teal" />
                      <a
                        href="mailto:wisnu@bicarapintar.ai"
                        className="text-light-gray hover:text-arctic-white text-sm transition-colors"
                      >
                        wisnu@bicarapintar.ai
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-quantum-teal" />
                      <a
                        href="tel:+6281194091888"
                        className="text-light-gray hover:text-arctic-white text-sm transition-colors"
                      >
                        (+62) 8119409188
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-charcoal border-t">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-0 text-muted-gray text-sm"
            >
              © 2025 PT Bicara Pintar Indonesia. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <button
                onClick={() => handleNavClick("#privacy")}
                className="text-muted-gray hover:text-arctic-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick("#terms")}
                className="text-muted-gray hover:text-arctic-white text-sm transition-colors"
              >
                Terms of Service
              </button>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex justify-center items-center bg-royal-purple/10 hover:bg-royal-purple/20 border border-royal-purple/20 hover:border-royal-purple/40 rounded-lg w-10 h-10 transition-all duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-royal-purple" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
