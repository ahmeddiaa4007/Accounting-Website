import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, LineChart, FileText, PiggyBank, Building2, FileCheck } from 'lucide-react';

const services = [
  {
    icon: <Calculator />,
    title: "Tax Planning & Preparation",
    description: "Strategic tax planning and accurate preparation to minimize liabilities and ensure compliance."
  },
  {
    icon: <LineChart />,
    title: "Financial Analysis",
    description: "In-depth analysis of financial data to drive informed business decisions."
  },
  {
    icon: <FileText />,
    title: "Bookkeeping Services",
    description: "Comprehensive bookkeeping to maintain accurate financial records."
  },
  {
    icon: <PiggyBank />,
    title: "Investment Advisory",
    description: "Expert guidance on investments and portfolio management."
  },
  {
    icon: <Building2 />,
    title: "Business Consulting",
    description: "Strategic consulting to optimize operations and drive growth."
  },
  {
    icon: <FileCheck />,
    title: "Audit & Assurance",
    description: "Thorough auditing services to ensure financial accuracy and compliance."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4 w-12 h-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}