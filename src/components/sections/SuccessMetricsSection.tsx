"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Quote } from "lucide-react";

const SuccessMetricsSection = () => {
  const metrics = [
    {
      number: "15+",
      label: "Successful Implementations",
      description: "Enterprise projects across sectors",
      color: "quantum-teal",
    },
    {
      number: "40-60%",
      label: "Average Improvement",
      description: "Operational efficiency gains",
      color: "royal-purple",
    },
    {
      number: "High",
      label: "Client Satisfaction",
      description: "Post-implementation feedback scores",
      color: "magma",
    },
    {
      number: "10+",
      label: "Different Systems",
      description: "Successfully integrated with",
      color: "quantum-teal",
    },
  ];

  const testimonials = [
    {
      quote:
        "BicaraPintar reduced our appointment booking time by 75% while maintaining high patient satisfaction. The integration with our HIS was seamless.",
      author: "Dr. Sarah M.",
      role: "Hospital Operations Director",
      results: ["75% time reduction", "90% patient satisfaction"],
      industry: "Healthcare",
    },
    {
      quote:
        "Custom AI implementation from BicaraPintar solved our passenger communication challenges. The team understood our complex requirements.",
      author: "Budi S.",
      role: "IT Director - Major Transport Company",
      results: ["50% call reduction", "85% automation rate"],
      industry: "Transportation",
    },
  ];

  return (
    <section className="bg-droplet/10 section-spacing">
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
            Implementations Proven to{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="mx-auto max-w-3xl text-light-gray text-xl">
            Measurable outcomes from real enterprise deployments across multiple
            industries with quantified business impact.
          </p>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gap-6 grid grid-cols-2 lg:grid-cols-4 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-void-black/50 backdrop-blur-sm p-6 border border-charcoal hover:border-royal-purple/30 rounded-xl text-center transition-all duration-300"
            >
              <div
                className={`
                text-3xl lg:text-4xl font-goli font-bold mb-2
                ${
                  metric.color === "quantum-teal"
                    ? "text-quantum-teal"
                    : metric.color === "royal-purple"
                    ? "text-royal-purple"
                    : "text-magma"
                }
              `}
              >
                {metric.number}
              </div>
              <div className="mb-1 font-medium text-arctic-white">
                {metric.label}
              </div>
              <div className="text-light-gray text-sm">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="gap-8 grid lg:grid-cols-2 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-void-black/80 backdrop-blur-sm p-8 border border-charcoal hover:border-royal-purple/30 rounded-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="opacity-60 mb-4 w-8 h-8 text-quantum-teal" />

              {/* Testimonial Text */}
              <blockquote className="mb-6 text-light-gray text-lg leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="mb-1 font-goli font-semibold text-arctic-white">
                    {testimonial.author}
                  </div>
                  <div className="mb-3 text-light-gray text-sm">
                    {testimonial.role}
                  </div>
                  <div className="inline-flex items-center bg-royal-purple/10 px-3 py-1 border border-royal-purple/20 rounded-full text-royal-purple text-xs">
                    {testimonial.industry}
                  </div>
                </div>

                {/* Results */}
                <div className="text-right">
                  <div className="mb-2 text-muted-gray text-xs">Results:</div>
                  {testimonial.results.map((result, resultIndex) => (
                    <div
                      key={resultIndex}
                      className="flex justify-end items-center space-x-1 text-sm"
                    >
                      <TrendingUp className="w-3 h-3 text-quantum-teal" />
                      <span className="font-medium text-quantum-teal">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-royal-purple/10 to-quantum-teal/10 p-8 lg:p-12 border border-royal-purple/20 rounded-2xl"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-goli font-bold text-arctic-white text-3xl">
              From Consultation to Go-Live
            </h3>
            <p className="mx-auto max-w-2xl text-light-gray">
              Our proven implementation methodology ensures successful
              deployment with measurable results within weeks, not months.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-3">
            {[
              {
                phase: "Week 1-2",
                title: "Discovery & Design",
                items: [
                  "Business requirement analysis",
                  "System architecture planning",
                  "Custom solution design",
                  "Integration planning",
                ],
              },
              {
                phase: "Week 3-4",
                title: "Development & Integration",
                items: [
                  "Platform customization",
                  "System integration",
                  "Security implementation",
                  "Testing & validation",
                ],
              },
              {
                phase: "Week 5-6",
                title: "Deployment & Training",
                items: [
                  "Phased rollout",
                  "Team training",
                  "Performance optimization",
                  "Go-live support",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center items-center bg-royal-purple/20 mx-auto mb-4 border border-royal-purple/30 rounded-full w-12 h-12">
                  <span className="font-bold text-royal-purple">
                    {index + 1}
                  </span>
                </div>
                <div className="mb-2 font-medium text-quantum-teal text-sm">
                  {phase.phase}
                </div>
                <h4 className="mb-4 font-goli font-semibold text-arctic-white">
                  {phase.title}
                </h4>
                <ul className="space-y-2 text-light-gray text-sm">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-center items-center space-x-2"
                    >
                      <div className="flex-shrink-0 bg-quantum-teal rounded-full w-1 h-1"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessMetricsSection;
