import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </AnimatePresence>
  );
}

export default App;