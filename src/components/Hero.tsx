import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-overlay opacity-10"
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
          alt="Background pattern"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Financial Solutions for
            <span className="text-blue-600"> Your Success</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Expert accounting services tailored to your business needs. We help you make informed decisions and grow your business with confidence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
              title: "Growth Strategy",
              description: "Develop and implement strategies for sustainable business growth"
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Risk Management",
              description: "Protect your assets with comprehensive risk assessment"
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: "Expert Support",
              description: "24/7 access to our team of certified accountants"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}