'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-5 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/0 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working with Chadmont LLC? Reach out to us to discuss how we can help with your commodity trading needs.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 text-left max-w-xl w-full bg-black/60 mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold/70 to-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-black text-xl">📍</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Headquarters</h4>
                <p className="text-gray-300">
                  382 NE 191st ST #813167<br />
                  Miami, FL 33179<br />
                  United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold/70 to-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-black text-xl">📧</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Email</h4>
                <p className="text-gray-300">tim@chadmontllc.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold/70 to-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-black text-xl">📞</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Phone</h4>
                <p className="text-gray-300">+1 (813) 990-9338</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold/70 to-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-black text-xl">🌐</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Global Network</h4>
                <p className="text-gray-300">Representatives across six continents</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
