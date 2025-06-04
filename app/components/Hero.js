'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-cyber-gradient opacity-20"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Global Commodity Trading</span>
            <br />
            <span className="text-white">Reimagined</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bridging the gap between commodity suppliers and buyers on the global market with flexibility, innovation, and safety.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a 
              href="#about" 
              className="px-8 py-3 bg-gradient-to-r from-futuristic-cyan to-futuristic-blue text-black font-medium rounded-full inline-block hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              Discover More
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-futuristic-purple/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute -top-32 -right-32 w-96 h-96 bg-futuristic-cyan/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </section>
  );
};

export default Hero;