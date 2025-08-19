// components/MainPage/ProductViewMainPage.jsx
"use client";

import ProductDetailsWrapper from "@/app/products/[id]/ProductDetailsWrapper";
export default function ProductViewMainPage({ product }) {
    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div>
            <div className="p-8 bg-white rounded-lg shadow-xl">
                <ProductDetailsWrapper product={product} />
            </div>
        </div>
    );
}