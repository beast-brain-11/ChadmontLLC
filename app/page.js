'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Hero />
        <About />
        <Services />
        <GlobalNetwork />
        <Products />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}