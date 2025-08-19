// src/app/api/products/route.js
import { products } from '@/data/products';

export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
