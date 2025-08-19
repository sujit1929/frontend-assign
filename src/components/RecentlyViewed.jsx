'use client';
import Image from "next/image";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RecentlyViewed() {
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewedProducts(storedProducts);
  }, []);

  if (recentlyViewedProducts.length === 0) {
    return null; 
  }

  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentlyViewedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block"
          >
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={128} 
                className="w-full h-32 object-cover"
                  unoptimized

              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
