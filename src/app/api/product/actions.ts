"use server";

import { ProductCreate } from "@/models/ProductStock";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "GET",
  });
  return await response.json();
}

export async function getProductById(id: string) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "GET",
  });

  return await response.json();
}

export async function createProduct({ formData }: { formData: ProductCreate }) {
  await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return { success: true };
}

export async function updateProduct({
  id,
  formData,
}: {
  id: string;
  formData: ProductCreate;
}) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return { success: true, id: data.id };
}
