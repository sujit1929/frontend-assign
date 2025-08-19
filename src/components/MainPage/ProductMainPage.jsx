"use client";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/ProductCard";
import { getAllProduct } from "../../../services/Product/ProductService";


export default function ProductMainPage() {
    const { data: products, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProduct,
        staleTime: 5 * 60 * 1000,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;
    return (
        <div className="flex flex-col">
            <main className="px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Welcome to MyStore</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    )
}
