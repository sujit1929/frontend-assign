import { BASE_URL } from "../../constant/app.constant";
import { getData, getDataById } from "../../utils/apiClient";

export async function getAllProduct() {
    return await getData(`${BASE_URL}/api/products`,);
}
export async function getProductById(id) {
    return await getData(`${BASE_URL}/api/products/${id}`);
}