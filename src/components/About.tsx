import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Modern office"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Financial Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over two decades of experience, we've helped countless businesses
              achieve their financial goals through expert guidance and personalized
              solutions.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Award className="w-8 h-8 text-blue-600" />,
                  title: "20+ Years Experience",
                  description: "Proven track record of excellence in financial services"
                },
                {
                  icon: <Target className="w-8 h-8 text-blue-600" />,
                  title: "Result Driven",
                  description: "Focused on delivering measurable results for our clients"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Expert Team",
                  description: "Certified professionals dedicated to your success"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}