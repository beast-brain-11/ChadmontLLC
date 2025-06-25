'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const ProductDialog = ({ product, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-800 rounded-xl shadow-lg p-8 w-3/4 max-w-4xl relative flex flex-col"
        style={{ maxHeight: '75vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="text-5xl mb-4 text-gold">{product.icon}</div>
        <h3 className="text-3xl font-bold mb-4 text-white">{product.name}</h3>
        <p className="text-gray-300 mb-4">{product.description}</p>
        {product["Origin & Quality"] && (
          <div className="text-gray-300 mb-4 p-4 rounded-md bg-black/20">
            <h4 className="font-semibold text-lg text-gold">Origin & Quality:</h4>
            <p className="mb-2">{product["Origin & Quality"]}</p>
          </div>
        )}
        {product["Logistics & Export"] && (
          <div className="text-gray-300 mb-4 p-4 rounded-md bg-black/20">
            <h4 className="font-semibold text-lg text-gold">Logistics & Export:</h4>
            <p className="mb-2">{product["Logistics & Export"]}</p>
          </div>
        )}
        {!['EN590 Diesel (1Oppm)', 'Jet Aviation', 'D6 Virgin FUEL'].includes(product.name) && (
          <>
            <div className="text-gray-300 mb-4 p-4 rounded-md bg-black/20">
              <h4 className="font-semibold text-lg text-gold">Uses:</h4>
              <p className="mb-2">{product.uses}</p>
            </div>
            <div className="text-gray-300 mb-4 p-4 rounded-md bg-black/20">
              <h4 className="font-semibold text-lg text-gold">Storage:</h4>
              <p className="mb-2">{product.storage}</p>
            </div>
          </>
        )}
        <div className="text-gray-300 mb-6 p-4 rounded-md bg-black/20">
          <h4 className="font-semibold text-lg text-gold">Specifications:</h4>
          <p className="mb-2">{product.specifications}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDialog;