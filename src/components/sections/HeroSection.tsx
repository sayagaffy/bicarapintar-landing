"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  const valueProps = [
    "Track record of successful implementations across various sectors",
    "Average 40-60% improvement in operational efficiency",
    "Proven integration with existing enterprise systems",
    "Indonesian team with demonstrated expertise",
  ];

  const stats = [
    { number: "15+", label: "Successful Enterprise Implementations" },
    { number: "40-60%", label: "Average Operational Improvement" },
    { number: "High", label: "Client Satisfaction" },
    { number: "10+", label: "Different Systems Successfully Integrated" },
  ];

  return (
    <section className="relative flex items-center bg-hero-gradient pt-20 lg:pt-24 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="top-1/4 left-1/4 absolute bg-royal-purple/10 blur-3xl rounded-full w-64 h-64"></div>
        <div className="right-1/4 bottom-1/4 absolute bg-quantum-teal/5 blur-3xl rounded-full w-96 h-96"></div>
      </div>

      <div className="z-10 relative section-container">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-royal-purple/10 px-4 py-2 border border-royal-purple/20 rounded-full font-medium text-quantum-teal text-sm"
            >
              ✨ AI Platform with Proven Implementation Track Record
            </motion.div>

            {/* Main Headline */}
            <header className="space-y-4">
              <motion.h1
                className="font-goli font-bold text-4xl md:text-5xl lg:text-6xl leading-tight hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                AI Communication Platform with{" "}
                <span className="text-gradient">Proven Implementation</span>
              </motion.h1>

              <motion.p
                className="text-light-gray text-xl lg:text-2xl leading-relaxed hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We have successfully implemented AI solutions for companies in
                healthcare, transportation, and IoT monitoring sectors. Our
                track record shows measurable improvements in operational
                efficiency and customer satisfaction.
              </motion.p>
            </header>

            {/* Value Props */}
            <motion.section
              className="space-y-3 value-props"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              aria-labelledby="value-props-heading"
            >
              <h2 id="value-props-heading" className="sr-only">
                Key Value Propositions
              </h2>
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle
                    className="flex-shrink-0 mt-0.5 w-5 h-5 text-quantum-teal"
                    aria-hidden="true"
                  />
                  <span className="text-light-gray">{prop}</span>
                </motion.div>
              ))}
            </motion.section>

            {/* CTA Buttons */}
            <motion.div
              className="flex sm:flex-row flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollToElement("contact")}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToElement("demo")}
                leftIcon={<Play className="w-5 h-5" />}
              >
                View Live Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 border-charcoal border-t"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="mb-4 text-muted-gray text-sm">
                Trusted by companies across various sectors
              </p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="font-medium text-light-gray text-xs">
                  HEALTHCARE
                </div>
                <div className="font-medium text-light-gray text-xs">
                  TRANSPORTATION
                </div>
                <div className="font-medium text-light-gray text-xs">
                  IOT MONITORING
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Dashboard */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-droplet/50 shadow-2xl backdrop-blur-sm p-8 border border-charcoal rounded-2xl">
                <div className="mb-6">
                  <h3 className="mb-2 font-goli font-semibold text-arctic-white text-lg">
                    Implementation Metrics
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="bg-quantum-teal rounded-full w-2 h-2 animate-pulse"></div>
                    <span className="text-quantum-teal text-sm">
                      Live Performance Data
                    </span>
                  </div>
                </div>

                <div className="gap-4 grid grid-cols-2">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-void-black/50 p-4 border border-charcoal/50 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="mb-1 font-goli font-bold text-gradient text-2xl">
                        {stat.number}
                      </div>
                      <div className="text-light-gray text-xs leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-light-gray">
                      Operational Efficiency
                    </span>
                    <span className="text-quantum-teal">+60%</span>
                  </div>
                  <div className="bg-charcoal rounded-full w-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-royal-purple to-quantum-teal rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 1, duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="-top-4 -right-4 absolute bg-royal-purple/90 shadow-lg backdrop-blur-sm p-3 border border-royal-purple/20 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="font-medium text-arctic-white text-xs">
                  ✓ Enterprise Deployed
                </div>
              </motion.div>

              <motion.div
                className="-bottom-4 -left-4 absolute bg-quantum-teal/90 shadow-lg backdrop-blur-sm p-3 border border-quantum-teal/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <div className="font-medium text-void-black text-xs">
                  ⚡ 24/7 Operational
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
