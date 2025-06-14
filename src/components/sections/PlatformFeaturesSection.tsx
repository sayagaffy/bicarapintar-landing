"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, CheckCircle, Zap } from "lucide-react";

const PlatformFeaturesSection = () => {
  const features = {
    bicaraChat: {
      icon: MessageSquare,
      title: "Smart AI Communication",
      description:
        "Enterprise-grade conversational AI with advanced reasoning capabilities",
      features: [
        "Smart Q&A with RAG - Instant answers with deep knowledge base access",
        "Multi-language Support - 30+ languages including Indonesian and regional languages",
        "Rich Interactions - Buttons, cards, carousel with API-driven actions",
        "Agentic Workflows - Multi-step automatic orchestration without manual intervention",
        "Seamless Handoff - Smooth transfer to human agents with complete context",
        "Real-time Analytics - Monitoring dashboard for continuous optimization",
      ],
      color: "quantum-teal",
    },
    bicaraVoice: {
      icon: Phone,
      title: "Enterprise AI Voice",
      description: "Advanced voice AI with natural conversation capabilities",
      features: [
        "Accurate ASR - High-precision transcription with advanced noise filtering",
        "Natural TTS & Voice Cloning - Natural voices in Indonesian and English from 2-minute samples",
        "Smart IVR & Routing - Automatic menu navigation with intelligent routing",
        "Emotion Detection - Real-time sentiment and emotion analysis for appropriate responses",
        "Post-call Analytics - Detailed KPIs and topic clustering for business insights",
        "Multi-channel Integration - Seamless connection across voice, chat, and video",
      ],
      color: "royal-purple",
    },
  };

  return (
    <section id="platform" className="bg-droplet/20 section-spacing">
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
            BicaraPintar Platform Features
          </h2>
          <p className="mx-auto max-w-3xl text-light-gray text-xl">
            Enterprise-grade AI communication solutions designed for
            scalability, reliability, and seamless integration with your
            existing systems.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="gap-8 lg:gap-12 grid lg:grid-cols-2">
          {Object.entries(features).map(([key, feature], index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-void-black/80 backdrop-blur-sm p-8 border border-charcoal hover:border-royal-purple/30 rounded-2xl h-full transition-all duration-300 card-hover">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`
                      w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0
                      ${
                        feature.color === "quantum-teal"
                          ? "bg-quantum-teal/10 border border-quantum-teal/20"
                          : "bg-royal-purple/10 border border-royal-purple/20"
                      }
                    `}
                    >
                      <Icon
                        className={`
                        w-8 h-8
                        ${
                          feature.color === "quantum-teal"
                            ? "text-quantum-teal"
                            : "text-royal-purple"
                        }
                      `}
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 font-goli font-semibold text-arctic-white text-2xl">
                        {feature.title}
                      </h3>
                      <p className="text-light-gray">{feature.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {feature.features.map((item, featureIndex) => {
                      const [title, description] = item.split(" - ");
                      return (
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
                          <CheckCircle
                            className={`
                            w-5 h-5 flex-shrink-0 mt-0.5
                            ${
                              feature.color === "quantum-teal"
                                ? "text-quantum-teal"
                                : "text-royal-purple"
                            }
                          `}
                          />
                          <div>
                            <span className="font-medium text-arctic-white">
                              {title}
                            </span>
                            {description && (
                              <span className="text-light-gray">
                                {" "}
                                - {description}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Interactive Elements */}
                  <div className="mt-8 pt-6 border-charcoal border-t">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`
                            w-2 h-2 rounded-full animate-pulse
                            ${
                              feature.color === "quantum-teal"
                                ? "bg-quantum-teal"
                                : "bg-royal-purple"
                            }
                          `}
                          ></div>
                          <span className="text-light-gray text-sm">
                            Live System
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-quantum-teal" />
                          <span className="text-light-gray text-sm">
                            Enterprise Ready
                          </span>
                        </div>
                      </div>
                      <button
                        className={`
                        text-sm font-medium hover:underline transition-colors
                        ${
                          feature.color === "quantum-teal"
                            ? "text-quantum-teal hover:text-quantum-teal/80"
                            : "text-royal-purple hover:text-royal-purple/80"
                        }
                      `}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-royal-purple/10 to-quantum-teal/10 p-8 border border-royal-purple/20 rounded-2xl">
            <h3 className="mb-4 font-goli font-semibold text-arctic-white text-2xl">
              Ready to Experience BicaraPintar?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-light-gray">
              See how our AI communication platform can transform your customer
              experience with proven enterprise-grade solutions.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button className="btn-primary">Schedule Free Demo</button>
              <button className="btn-secondary">
                Download Technical Specs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
