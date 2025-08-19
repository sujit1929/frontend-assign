// src/app/api/products/[id]/route.js
import { products } from '@/data/products';

export async function GET(request, { params }) {
  // params.id comes in as a string
  const product = products.find((p) => String(p.id) === String(params.id));

  if (!product) {
    return new Response(
      JSON.stringify({ message: "Not Found" }),
      { status: 404 }
    );
  }

  return new Response(
    JSON.stringify(product),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
