'use client';

import { motion } from 'framer-motion';

const GlobalNetwork = () => {
  const regions = [
    {
      name: 'North America',
      color: 'bg-futuristic-cyan',
      delay: 0.2,
    },
    {
      name: 'South America',
      color: 'bg-futuristic-cyan',
      delay: 0.3,
    },
    {
      name: 'Europe',
      color: 'bg-futuristic-cyan',
      delay: 0.4,
    },
    {
      name: 'Asia',
      color: 'bg-futuristic-cyan',
      delay: 0.5,
    },
    {
      name: 'Africa',
      color: 'bg-futuristic-cyan',
      delay: 0.6,
    },
    {
      name: 'Oceania',
      color: 'bg-futuristic-cyan',
      delay: 0.7,
    },
  ];

  return (
    <section id="global-network" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Global Network</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            While based in the United States, Chadmont utilizes an extensive network of distribution representatives working across six continents.
          </p>
          <div className="w-20 h-1 bg-futuristic-cyan mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Regions list */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: region.delay }}
                className="glass-card p-4 text-center relative group hover:futuristic-border transition-all duration-300"
              >
                <div className={`h-2 ${region.color} rounded-t-md absolute top-0 left-0 right-0`}></div>
                <h3 className="text-lg font-medium mt-2 text-white group-hover:text-futuristic-cyan transition-colors duration-300">
                  {region.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Global Efficiency</h3>
          <p className="text-gray-300">
            Our global network ensures the efficiency of a truly international enterprise. With representatives strategically positioned across all major markets, we can respond quickly to market changes and client needs, regardless of location or time zone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetwork;