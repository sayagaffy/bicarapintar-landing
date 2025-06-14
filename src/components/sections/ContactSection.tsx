"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
} from "lucide-react";
import { validateEmail } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    "Healthcare",
    "Transportation",
    "Financial Services",
    "Manufacturing",
    "Technology",
    "Education",
    "Government",
    "Other",
  ];

  const timelines = [
    "Urgent (Within 1 month)",
    "1-3 months",
    "3-6 months",
    "Planning phase (6+ months)",
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Bandung HQ",
      value:
        "Jl. Simponi No.21, Turangga\nKec. Lengkong, Bandung\nWest Java 40264",
    },
    {
      icon: MapPin,
      label: "Jakarta Office",
      value:
        "Royal Spring Residence\nBlok Platinum No.10\nJati Padang, Jakarta 12540",
    },
  ];

  const contactPersons = [
    {
      name: "Wisnu D. Yudha",
      email: "wisnu@bicarapintar.ai",
      phone: "(+62) 8119409188",
    },
    {
      name: "Dimmy Harfahmy",
      email: "dimmy@bicarapintar.ai",
      phone: "(+62) 81218887742",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select your industry";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would normally send to your backend
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        industry: "",
        message: "",
        timeline: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-void-black section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-goli font-bold text-arctic-white text-4xl lg:text-5xl">
            Ready to Transform Your{" "}
            <span className="text-gradient">Customer Experience?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-light-gray text-xl">
            Let&apos;s discuss how BicaraPintar can optimize your business
            operations with AI solutions proven effective across various
            industries.
          </p>
        </motion.div>

        <div className="gap-12 grid lg:grid-cols-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-droplet/50 backdrop-blur-sm p-8 border border-charcoal rounded-2xl">
              <h3 className="mb-6 font-goli font-semibold text-arctic-white text-2xl">
                Schedule Free Consultation
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 w-16 h-16 text-quantum-teal" />
                  <h4 className="mb-2 font-goli font-semibold text-arctic-white text-xl">
                    Thank You!
                  </h4>
                  <p className="mb-6 text-light-gray">
                    We've received your request and will contact you within 24
                    hours.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="gap-6 grid md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-light-gray text-sm">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-void-black/50 px-4 py-3 border border-charcoal focus:border-royal-purple rounded-lg focus:outline-none focus:ring-1 focus:ring-royal-purple w-full text-arctic-white transition-colors placeholder-muted-gray"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-magma text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-light-gray text-sm">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-void-black/50 px-4 py-3 border border-charcoal focus:border-royal-purple rounded-lg focus:outline-none focus:ring-1 focus:ring-royal-purple w-full text-arctic-white transition-colors placeholder-muted-gray"
                        placeholder="your.email@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-magma text-sm">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="gap-6 grid md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-light-gray text-sm">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-void-black/50 px-4 py-3 border border-charcoal focus:border-royal-purple rounded-lg focus:outline-none focus:ring-1 focus:ring-royal-purple w-full text-arctic-white transition-colors placeholder-muted-gray"
                        placeholder="Your company name"
                      />
                      {errors.company && (
                        <p className="mt-1 text-magma text-sm">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-light-gray text-sm">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="bg-void-black/50 px-4 py-3 border border-charcoal focus:border-royal-purple rounded-lg focus:outline-none focus:ring-1 focus:ring-royal-purple w-full text-arctic-white transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="mt-1 text-magma text-sm">
                          {errors.industry}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-light-gray text-sm">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="bg-void-black/50 px-4 py-3 border border-charcoal focus:border-royal-purple rounded-lg focus:outline-none focus:ring-1 focus:ring-royal-purple w-full text-arctic-white transition-colors"
                    >
                      <option value="">Select implementation timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-light-gray text-sm">
                      Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-void-black/50 px-4 py-3 border border-charcoal focus:border-royal-purple rounded-lg focus:outline-none focus:ring-1 focus:ring-royal-purple w-full text-arctic-white transition-colors resize-none placeholder-muted-gray"
                      placeholder="Tell us about your specific requirements, challenges, or questions..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-magma text-sm">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex sm:flex-row flex-col gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      rightIcon={<ArrowRight className="w-5 h-5" />}
                      className="flex-1"
                    >
                      Schedule Consultation
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      leftIcon={<Download className="w-5 h-5" />}
                    >
                      Download Guide
                    </Button>
                  </div>

                  <div className="pt-4 border-charcoal border-t text-center">
                    <div className="flex justify-center items-center space-x-6 text-muted-gray text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Response within 24 hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>No sales pressure guarantee</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="space-y-8">
              {/* Alternative CTAs */}
              <div className="space-y-4">
                <h4 className="font-goli font-semibold text-arctic-white text-xl">
                  Other Ways to Connect
                </h4>

                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<Play className="w-5 h-5" />}
                  className="justify-center w-full"
                >
                  View Live Demo
                </Button>

                <Button
                  variant="tertiary"
                  size="lg"
                  leftIcon={<Download className="w-5 h-5" />}
                  className="justify-center w-full"
                >
                  Implementation Guide
                </Button>
              </div>

              {/* Office Locations */}
              <div>
                <h4 className="mb-6 font-goli font-semibold text-arctic-white text-xl">
                  Office Locations
                </h4>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex flex-shrink-0 justify-center items-center bg-royal-purple/10 border border-royal-purple/20 rounded-lg w-12 h-12">
                          <Icon className="w-5 h-5 text-royal-purple" />
                        </div>
                        <div>
                          <h5 className="mb-1 font-medium text-arctic-white">
                            {info.label}
                          </h5>
                          <p className="text-light-gray text-sm whitespace-pre-line">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Persons */}
              <div>
                <h4 className="mb-6 font-goli font-semibold text-arctic-white text-xl">
                  Contact Team
                </h4>
                <div className="space-y-6">
                  {contactPersons.map((person, index) => (
                    <div
                      key={index}
                      className="bg-droplet/30 p-4 border border-charcoal rounded-lg"
                    >
                      <h5 className="mb-2 font-goli font-medium text-arctic-white">
                        {person.name}
                      </h5>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-light-gray text-sm">
                          <Mail className="w-4 h-4" />
                          <a
                            href={`mailto:${person.email}`}
                            className="hover:text-quantum-teal transition-colors"
                          >
                            {person.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2 text-light-gray text-sm">
                          <Phone className="w-4 h-4" />
                          <a
                            href={`tel:${person.phone}`}
                            className="hover:text-quantum-teal transition-colors"
                          >
                            {person.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-quantum-teal/10 to-royal-purple/10 p-6 border border-quantum-teal/20 rounded-lg">
                <h5 className="mb-4 font-goli font-medium text-arctic-white">
                  Why Choose BicaraPintar?
                </h5>
                <div className="space-y-3 text-light-gray text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="flex-shrink-0 w-4 h-4 text-quantum-teal" />
                    <span>Direct access to technical team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="flex-shrink-0 w-4 h-4 text-quantum-teal" />
                    <span>Proven track record across industries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="flex-shrink-0 w-4 h-4 text-quantum-teal" />
                    <span>Local team with global standards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="flex-shrink-0 w-4 h-4 text-quantum-teal" />
                    <span>Flexible engagement models</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
