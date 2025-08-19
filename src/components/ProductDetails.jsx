"use client";

import React from "react";
import Image from "next/image";
import SizeSelector from "./SizeSelector";

const ProductDetails = ({
  product,
  selectedColor,
  selectedSize,
  onColorSelect,
  onSizeSelect,
  onAddToCart,
  availableSizesForColor,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex justify-center items-center rounded-lg overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="object-contain rounded-md"
          priority={true}
          unoptimized
        />
      </div>

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

        <SizeSelector
          availableSizes={availableSizesForColor}
          selectedSize={selectedSize}
          onSizeSelect={onSizeSelect}
        />
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
