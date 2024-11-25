import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: "2024 Tax Strategy Guide for Small Businesses",
    excerpt: "Discover the latest tax strategies and deductions available for small businesses in 2024.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    date: "Mar 15, 2024",
    author: "Sarah Johnson",
    category: "Tax Planning"
  },
  {
    title: "Digital Transformation in Financial Services",
    excerpt: "How technology is revolutionizing accounting and financial management practices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    date: "Mar 12, 2024",
    author: "Michael Chen",
    category: "Technology"
  },
  {
    title: "ESG Reporting: A Complete Guide",
    excerpt: "Understanding environmental, social, and governance reporting requirements and best practices.",
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80",
    date: "Mar 10, 2024",
    author: "Emily Rodriguez",
    category: "Compliance"
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles and updates on finance and accounting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}