// components/ProductDetails.js
"use client";

import React from "react";
import Image from "next/image";

const ProductDetails = ({
  product,
  selectedColor,
  selectedSize,
  onColorSelect,
  onSizeSelect,
  onAddToCart,
  availableSizesForColor,
}) => {
  // pick selected variant based on chosen color
  const selectedVariant = product.variants.find(
    (v) => v.color === selectedColor
  );

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="md:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600} // fixed width for consistency
          height={600} // fixed height for consistency
          className="object-contain"
          priority={true} // ensures above-the-fold product loads first
            unoptimized

        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {product.name}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          {product.description}
        </p>

        <p className="text-5xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>

        {/* Color Selector */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Color: {selectedColor}
          </h3>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.color}
                className={`w-10 h-10 rounded-full border-2 ${
                  selectedColor === variant.color
                    ? "border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-300"
                } focus:outline-none transition-all duration-200`}
                style={{ backgroundColor: variant.hex }}
                onClick={() => onColorSelect(variant.color)}
                title={variant.color}
              ></button>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Size: {selectedSize || "Select a size"}
          </h3>
          <div className="flex flex-wrap gap-3">
            {availableSizesForColor.map((size) => (
              <button
                key={size}
                className={`px-5 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                } focus:outline-none`}
                onClick={() => onSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="w-full py-4 bg-blue-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
