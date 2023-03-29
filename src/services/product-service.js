import apiFetch from "./api-fetch";

export async function getAllProducts() {
  const products = await apiFetch("products");
  return products;
}

export async function getProduct(id) {
  const product = await apiFetch(`products/${id}`);
  return product;
}
