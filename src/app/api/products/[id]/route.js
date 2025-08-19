import { products } from '@/data/products';

export async function GET(request, context) {
  const params = await context.params;  
  const product = products.find((p) => String(p.id) === String(params.id));

  if (!product) {
    return new Response(
      JSON.stringify({ message: "Not Found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify(product),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
