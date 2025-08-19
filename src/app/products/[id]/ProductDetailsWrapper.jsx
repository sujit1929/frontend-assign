// app/products/[id]/ProductDetailsWrapper.jsx
'use client';

import { useState, useContext, useEffect } from 'react';
import ProductDetails from '@/components/ProductDetails';
import RecentlyViewed from '@/components/RecentlyViewed';
import { CartContext } from '@/context/CartContext';

export default function ProductDetailsWrapper({ product }) {
  // console.log("product for wrapper", product);
  const { addToCart } = useContext(CartContext);

  const [selectedColor, setSelectedColor] = useState(product.variants[0]?.color || '');
  const [selectedSize, setSelectedSize] = useState('');

  const availableSizesForColor =
    product.variants.find((variant) => variant.color === selectedColor)?.sizes || [];

  useEffect(() => {
    setSelectedSize('');
  }, [selectedColor]);

  useEffect(() => {
    if (product) {
      const stored = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
      // console.log('stored', stored);
      const filtered = stored.filter((p) => p.id !== product.id);
      // console.log('filtered', filtered);
      const updated = [product, ...filtered];
      const latestThree = updated.slice(0, 3);

      localStorage.setItem('recentlyViewed', JSON.stringify(latestThree));
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size.');
      return;
    }
    addToCart(product, selectedColor, selectedSize);
  };

  return (
    <>
      <ProductDetails
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        onColorSelect={setSelectedColor}
        onSizeSelect={setSelectedSize}
        onAddToCart={handleAddToCart}
        availableSizesForColor={availableSizesForColor}
      />
      <RecentlyViewed />
    </>
  );
}
