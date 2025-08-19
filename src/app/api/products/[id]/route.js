// app/api/products/[id]/route.js
import { products } from '@/data/products';

export async function GET(req, { params }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return new Response(JSON.stringify({ message: "Not Found" }), { status: 404 });
  }
  return new Response(JSON.stringify(product), { status: 200 });
}
