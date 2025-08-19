// services/Product/ProductService.js
import { BASE_URL } from "../../constant/app.constant";
import { getData } from "../../utils/apiClient";

export async function getAllProduct() {
    return await getData(`${BASE_URL}/api/products`);
}

export async function getProductById(id) {
    try {
        return await getData(`${BASE_URL}/api/products/${id}`);
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null; // Return null on a failed fetch
    }
}
