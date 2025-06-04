'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-black/80 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 text-center text-gray-400 text-sm mt-4"
        >
          <p className="mb">&copy; {currentYear} Chadmont LLC. All rights reserved.</p>
          <p className="mb">Disclaimer: This website is for informational purposes only. All product specifications and details are subject to change without notice.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
