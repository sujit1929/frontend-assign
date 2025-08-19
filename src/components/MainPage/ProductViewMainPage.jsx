"use client";

import ProductDetailsWrapper from "@/app/products/[id]/ProductDetailsWrapper";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getProductById } from "../../../services/Product/ProductService";
export default function ProductViewMainPage() {
    const { id } = useParams();
    console.log("params", id);
    const { data: product, error, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        staleTime: 5 * 60 * 1000,
    });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Product not found!</p>;
    return (
        <div>
            <div className="p-8 bg-white rounded-lg shadow-xl">
                <ProductDetailsWrapper product={product} />
            </div>
        </div>
    )
}
