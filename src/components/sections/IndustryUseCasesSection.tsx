"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Truck, Cpu, CheckCircle2, TrendingUp } from "lucide-react";

const IndustryUseCasesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      subtitle: "Proven Patient Communication Solutions",
      description:
        "Successful implementation of appointment automation with measurable results",
      features: [
        "Appointment optimization with measurable time reduction",
        "Multi-language patient support proven effective",
        "Integration with hospital systems with minimal disruption",
        "AI-powered patient flow optimization currently running",
      ],
      status: "✅ Currently Operational",
      results: ["75% time reduction", "90% patient satisfaction"],
      color: "magma",
      gradient: "from-magma/20 to-royal-purple/10",
    },
    {
      icon: Truck,
      title: "Transportation",
      subtitle: "Enhanced Passenger Experience",
      description:
        "Track record of booking automation implementation with high success rate",
      features: [
        "Booking automation system with proven high accuracy",
        "Voice-enabled customer service already deployed",
        "Successful integration with operational systems",
        "GPS monitoring with intelligent alerts (proven concept)",
      ],
      status: "✅ Successfully Deployed",
      results: ["50% call reduction", "85% automation rate"],
      color: "quantum-teal",
      gradient: "from-quantum-teal/20 to-royal-purple/10",
    },
    {
      icon: Cpu,
      title: "IoT & Monitoring",
      subtitle: "Intelligent Analytics Solutions",
      description:
        "Successful implementation of automated reporting from IoT data",
      features: [
        "Automated reporting from IoT data currently operational",
        "Natural language interface with real-time monitoring",
        "Intelligent alerting system (deployed)",
        "Fatigue detection system with measurable safety improvements",
      ],
      status: "✅ Live System",
      results: ["Real-time monitoring", "Measurable safety improvements"],
      color: "royal-purple",
      gradient: "from-royal-purple/20 to-quantum-teal/10",
    },
  ];

  return (
    <section id="solutions" className="bg-void-black section-spacing">
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
            Industry Solutions with{" "}
            <span className="text-gradient">Proven Results</span>
          </h2>
          <p className="mx-auto max-w-3xl text-light-gray text-xl">
            Real implementations across healthcare, transportation, and IoT
            sectors delivering measurable improvements and operational
            excellence.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="space-y-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`
                  grid lg:grid-cols-2 gap-8 lg:gap-12 items-center
                  ${isReversed ? "lg:grid-cols-2" : ""}
                `}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`
                        w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 border
                        ${
                          industry.color === "magma"
                            ? "bg-magma/10 border-magma/20"
                            : industry.color === "quantum-teal"
                            ? "bg-quantum-teal/10 border-quantum-teal/20"
                            : "bg-royal-purple/10 border-royal-purple/20"
                        }
                      `}
                      >
                        <Icon
                          className={`
                          w-8 h-8
                          ${
                            industry.color === "magma"
                              ? "text-magma"
                              : industry.color === "quantum-teal"
                              ? "text-quantum-teal"
                              : "text-royal-purple"
                          }
                        `}
                        />
                      </div>
                      <div>
                        <h3 className="mb-2 font-goli font-bold text-arctic-white text-3xl">
                          {industry.title}
                        </h3>
                        <p
                          className={`
                          text-lg font-medium mb-3
                          ${
                            industry.color === "magma"
                              ? "text-magma"
                              : industry.color === "quantum-teal"
                              ? "text-quantum-teal"
                              : "text-royal-purple"
                          }
                        `}
                        >
                          {industry.subtitle}
                        </p>
                        <p className="text-light-gray">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {industry.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + featureIndex * 0.1,
                          }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle2
                            className={`
                            w-5 h-5 flex-shrink-0 mt-0.5
                            ${
                              industry.color === "magma"
                                ? "text-magma"
                                : industry.color === "quantum-teal"
                                ? "text-quantum-teal"
                                : "text-royal-purple"
                            }
                          `}
                          />
                          <span className="text-light-gray">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Status & Results */}
                    <div className="flex sm:flex-row flex-col gap-4">
                      <div
                        className={`
                        inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border
                        ${
                          industry.color === "magma"
                            ? "bg-magma/10 text-magma border-magma/20"
                            : industry.color === "quantum-teal"
                            ? "bg-quantum-teal/10 text-quantum-teal border-quantum-teal/20"
                            : "bg-royal-purple/10 text-royal-purple border-royal-purple/20"
                        }
                      `}
                      >
                        <div
                          className={`
                          w-2 h-2 rounded-full mr-2 animate-pulse
                          ${
                            industry.color === "magma"
                              ? "bg-magma"
                              : industry.color === "quantum-teal"
                              ? "bg-quantum-teal"
                              : "bg-royal-purple"
                          }
                        `}
                        ></div>
                        {industry.status}
                      </div>
                      <div className="flex items-center space-x-4 text-light-gray text-sm">
                        {industry.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="flex items-center space-x-1"
                          >
                            <TrendingUp className="w-4 h-4 text-quantum-teal" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isReversed ? "lg:order-1" : ""}`}>
                    <div
                      className={`
                      relative bg-gradient-to-br ${industry.gradient} rounded-2xl p-8 border border-charcoal/50
                    `}
                    >
                      {/* Mock Dashboard */}
                      <div className="bg-void-black/80 backdrop-blur-sm p-6 border border-charcoal/50 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-goli font-semibold text-arctic-white">
                            {industry.title} Metrics
                          </h4>
                          <div className="flex items-center space-x-2">
                            <div
                              className={`
                              w-2 h-2 rounded-full animate-pulse
                              ${
                                industry.color === "magma"
                                  ? "bg-magma"
                                  : industry.color === "quantum-teal"
                                  ? "bg-quantum-teal"
                                  : "bg-royal-purple"
                              }
                            `}
                            ></div>
                            <span className="text-light-gray text-xs">
                              Live Data
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {industry.results.map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="flex justify-between items-center"
                            >
                              <span className="text-light-gray text-sm">
                                {result.includes("%")
                                  ? "Improvement"
                                  : "Status"}
                              </span>
                              <span
                                className={`
                                text-sm font-medium
                                ${
                                  industry.color === "magma"
                                    ? "text-magma"
                                    : industry.color === "quantum-teal"
                                    ? "text-quantum-teal"
                                    : "text-royal-purple"
                                }
                              `}
                              >
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="bg-charcoal rounded-full w-full h-2">
                            <motion.div
                              className={`
                                h-2 rounded-full
                                ${
                                  industry.color === "magma"
                                    ? "bg-magma"
                                    : industry.color === "quantum-teal"
                                    ? "bg-quantum-teal"
                                    : "bg-royal-purple"
                                }
                              `}
                              initial={{ width: 0 }}
                              whileInView={{ width: "85%" }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.5 + index * 0.2,
                                duration: 1,
                              }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Badges */}
                      <motion.div
                        className={`
                          absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm
                          ${
                            industry.color === "magma"
                              ? "bg-magma/90 text-arctic-white border-magma/20"
                              : industry.color === "quantum-teal"
                              ? "bg-quantum-teal/90 text-void-black border-quantum-teal/20"
                              : "bg-royal-purple/90 text-arctic-white border-royal-purple/20"
                          }
                        `}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        Deployed
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCasesSection;
