'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About</span> Chadmont LLC
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 relative"
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-futuristic-gradient rounded-full opacity-70 blur-xl"></div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Our Company</h3>
            <p className="text-gray-300 mb-6 relative z-10">
              Chadmont LLC is a rapidly expanding commodity trading company dedicated to connecting
              global suppliers and buyers with efficiency and reliability. We specialize in securing
              competitive pricing, flexible payment terms, and customized logistics to meet the unique
              needs of every client.
            </p>
            <p className="text-gray-300 mb-6 relative z-10">
              Despite being founded as recently as 2023, Chadmont operates with the agility and precision
              of an established powerhouse due to the experience of its associates. We are actively
              expanding our network, forging strong partnerships, and solidifying our reputation as a
              trusted name in international trade.
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <span className="px-4 py-2 bg-black/30 rounded-full text-sm text-gold border border-gold/30">
                Founded 2023
              </span>
              <span className="px-4 py-2 bg-black/30 rounded-full text-sm text-gold border border-gold/30">
                Miami, FL, USA
              </span>
              <span className="px-4 py-2 bg-black/30 rounded-full text-sm text-gold border border-gold/30">
                Global Reach
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 relative"
          >
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-cyber-gradient rounded-full opacity-70 blur-xl"></div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Our Approach</h3>
            <p className="text-gray-300 mb-6 relative z-10">
              With a focus on trust, adaptability, and efficiency, we are building a company that ensures
              long-term success for both our partners and ourselves. With a highly committed team, our
              mission remains clear: to deliver secure, profitable, and smooth transactions in the global
              marketplace.
            </p>
            <p className="text-gray-300 mb-6 relative z-10">
              Chadmont remains flexible in its payment processes, prices, and transportation terms to accommodate 
              for the conditions of all it works with. While based in the United States, Chadmont utilizes an 
              extensive network of distribution representatives working globally to ensure the efficiency of a 
              global enterprise.
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <span className="px-4 py-2 bg-black/30 rounded-full text-sm text-gold border border-gold/30">
                Swift
              </span>
              <span className="px-4 py-2 bg-black/30 rounded-full text-sm text-gold border border-gold/30">
                Secure
              </span>
              <span className="px-4 py-2 bg-black/30 rounded-full text-sm text-gold border border-gold/30">
                Superior
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;