"use client";

import React from "react";
import { motion } from "framer-motion";

const TrustedBySection = () => {
  const clients = [
    { name: "DynEd", logo: "DE" },
    { name: "Remotivi", logo: "RM" },
    { name: "Jakarta Labs", logo: "JL" },
    { name: "Air Liquide", logo: "AL" },
    { name: "Dharma Group", logo: "DG" },
  ];

  return (
    <section className="bg-void-black section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-goli font-semibold text-arctic-white text-2xl">
            Trusted by Companies Across Various Sectors
          </h2>
          <p className="mx-auto max-w-2xl text-light-gray">
            Successful implementations in healthcare, transportation, and IoT
            monitoring with solutions proven to deliver measurable value.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center bg-droplet/30 border border-charcoal/50 hover:border-royal-purple/30 rounded-lg w-24 h-16 transition-all duration-200"
            >
              <div className="opacity-60 hover:opacity-100 font-medium text-light-gray text-sm transition-opacity">
                {client.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="flex sm:flex-row flex-col justify-center items-center gap-6 text-muted-gray text-sm">
            <div className="flex items-center space-x-2">
              <div className="bg-quantum-teal rounded-full w-2 h-2"></div>
              <span>Trusted by 50+ Indonesian Enterprises</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-royal-purple rounded-full w-2 h-2"></div>
              <span>Serving various regulated industries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-magma rounded-full w-2 h-2"></div>
              <span>Partnership with leading technology companies</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
