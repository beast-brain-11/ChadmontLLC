'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductDialog from './ProductDialog';

const Products = () => {
  // Set default category to 'all' so all products are shown
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  // Categories definition remains for product filtering logic
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'edibleOils', name: 'Edible Oils' },
    { id: 'sugarSweeteners', name: 'Sugar & Sweeteners' },
    { id: 'spicesHerbs', name: 'Spices & Herbs' },
    { id: 'freshProduce', name: 'Fresh Produce' },
    { id: 'grainsRice', name: 'Grains & Rice' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'gold', name: 'Gold' },
    { id: 'copper', name: 'Copper' },
    { id: 'aluminum', name: 'Aluminum' },
    { id: 'dieselFuel', name: 'Diesel Fuel' },
    { id: 'aviationFuel', name: 'Aviation Fuel' },
  ];

  const products = [
    // Edible Oils
    {
      name: 'Canola Oil',
      description: 'Canola oil is a versatile vegetable oil derived from canola plant seeds.',
      category: 'edibleOils',
      icon: '🫒',
    },
    {
      name: 'Sunflower Oil',
      description: 'Derived from sunflower seeds, this oil is esteemed in culinary circles.',
      category: 'edibleOils',
      icon: '🌻',
    },
    {
      name: 'Edible Oil(Palm)',
      description: 'This oil, derived from palm fruits, is highly regarded in culinary circles.',
      category: 'edibleOils',
      icon: '🌴',
    },
    // Sugar & Sweeteners
    {
      name: 'ICUMSA 45 sugar',
      description: 'Highest quality refined sugar for beverages and food industry.',
      category: 'sugarSweeteners',
      icon: '🍬',
    },
    // Spices & Herbs
    {
      name: 'Cardamom',
      description: 'Premium quality spices for culinary and medicinal applications.',
      category: 'spicesHerbs',
      icon: '🌶️',
    },
    // Fresh Produce
    {
      name: 'G9 Cavendish Bananas',
      description: 'The banana variety, renowned for its extended shelf life and sweetness.',
      category: 'freshProduce',
      icon: '🍌',
    },
    {
      name: 'Spunta Potatoes',
      description: 'The potato is noted for its firm, yellow flesh and smooth texture.',
      category: 'freshProduce',
      icon: '🥔',
    },
    // Grains & Rice
    {
      name: 'Durum Wheat',
      description: 'This wheat variety, known for its high protein content.',
      category: 'grainsRice',
      icon: '🌾',
    },
    {
      name: 'Basmati Rice',
      description: 'This rice variety is a long-grain type cultivated primarily in the Indian subcontinent.',
      category: 'grainsRice',
      icon: '🍚',
    },
    // Seafood
    {
      name: 'Horse Mackerel',
      description: 'This fish is a small, pelagic species renowned for its firm texture.',
      category: 'seafood',
      icon: '🐟',
    },
    {
      name: 'Atlantic Mackerel',
      description: 'This fish, known for its robust flavor, is rich in natural fats.',
      category: 'seafood',
      icon: '🦐',
    },
    {
      name: 'Pacific Mackerel',
      description: 'This species in question bears resemblance to the Atlantic mackerel.',
      category: 'seafood',
      icon: '🐠',
    },
    {
      name: 'Argentine Red Shrimp',
      description: 'This exceptional variety of shrimp is renowned for its delightful sweetness.',
      category: 'seafood',
      icon: '🦞',
    },
    {
      name: 'European Sardines',
      description: 'These small fish are known for their high nutritional value.',
      category: 'seafood',
      icon: '🎣',
    },
    // Gold
    {
      name: 'Gold',
      description: 'Gold is an exceptionally versatile metal, widely utilized in jewelry, electronics, and financial sectors.',
      category: 'gold',
      icon: '🥇',
    },
    // Copper
    {
      name: 'Copper',
      description: 'This metal is highly versatile, finding eodensive use in electrical wiring, construction, and various industrial applications.',
      category: 'copper',
      icon: '🔶',
    },
    // Aluminum
    {
      name: 'Aluminium',
      description: 'This is a versatile and lightweight metal known for its exceptional resistance to corrosion.',
      category: 'aluminum',
      icon: '⚙️',
    },
    // Diesel Fuel
    {
      name: 'EN590 Diesel (1Oppm)',
      description: 'EN590 is the European standard for ultra-low sulfur diesel fuel, designed for maximum performance.',
      category: 'dieselFuel',
      icon: '🛢️',
    },
    // Aviation Fuel
    {
      name: 'Jet Aviation',
      description: 'Jet A-1 is a high-quality aviation turbine fuel used in commercial and military aircraft worldwide.',
      category: 'aviationFuel',
      icon: '✈️',
    },
  ];

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('./catalogue.json');
        const data = await response.json();
        const details = data.reduce((acc, item) => {
          acc[item.name] = item;
          return acc;
        }, {});
        setProductDetails(details);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-black relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With a wide variety of products from metals to agricultural commodities, Chadmont pursues a unique perspective and market standing to set it apart from its competitors.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Category filter bar removed as requested */}

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-xl relative group hover:futuristic-border transition-all duration-300"
            >
              <button
                onClick={() => handleOpenDialog(product)}
                className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-pointer"
              />
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                {product.description}
              </p>
              <div className="absolute top-4 right-4 px-2 py-1 bg-black/80 border border-gold/20 rounded-full text-xs text-gold-pale">
                {categories.find(cat => cat.id === product.category)?.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {isDialogOpen && selectedProduct && productDetails[selectedProduct.name] && (
        <ProductDialog
          product={{...selectedProduct, ...productDetails[selectedProduct.name]}}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
};

export default Products;