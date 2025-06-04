'use client';

import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Global Trading',
      description: 'Facilitating commodity exchanges between suppliers and buyers across international markets with efficiency and reliability.',
      icon: '🌐',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Flexible Payment',
      description: 'Adaptable payment processes tailored to meet the specific needs and conditions of our diverse client base.',
      icon: '💳',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Secure Transactions',
      description: 'Ensuring all deals are closed smoothly and safely with robust security measures and transparent processes.',
      icon: '🔒',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Competitive Pricing',
      description: 'Offering market-competitive prices while maintaining the highest quality standards for all commodities.',
      icon: '📊',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Customized Logistics',
      description: 'Tailored logistics solutions to meet the unique needs of every client, ensuring efficient and timely delivery.',
      icon: '🚢',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure all products meet or exceed international standards.',
      icon: '✓',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Global Network',
      description: 'Extensive network of distribution representatives working globally to ensure efficiency across Europe, Asia, South America, Africa, and North America.',
      icon: '🔄',
      color: 'from-gold/70 to-gold/30',
    },
    {
      title: 'Product Expertise',
      description: 'Specialized knowledge in metals, agricultural commodities, fish products, and energy resources.',
      icon: '🧠',
      color: 'from-gold/70 to-gold/30',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-black/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Chadmont LLC offers a comprehensive range of services designed to optimize the commodity trading experience for all our clients.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl relative group hover:futuristic-border transition-all duration-300"
            >
              <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="text-4xl mb-4">{service.icon}</div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;