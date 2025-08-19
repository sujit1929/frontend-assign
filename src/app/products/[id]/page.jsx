import ProductViewMainPage from '@/components/MainPage/ProductViewMainPage';
import { getProductById } from '../../../../services/Product/ProductService';

export default async function ProductPage(props) {
  const params = await props.params;
  const { id } = params;

  console.log("id from params", id);

  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return <ProductViewMainPage product={product} />;
}
