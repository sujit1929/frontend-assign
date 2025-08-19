// src/app/products/[id]/page.jsx
import ProductViewMainPage from '@/components/MainPage/ProductViewMainPage';
import { getProductById } from '../../../../services/Product/ProductService';

export default async function ProductPage({ params }) {
  // ✅ Get params from Next.js
  const { id } = await params;  // <-- wait here
  console.log("id from params", id);

  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return <ProductViewMainPage product={product} />;
}
