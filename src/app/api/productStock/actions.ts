"use server";

import { ProductStockCreate } from "@/models/ProductStock";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllProductsStock() {
  const response = await fetch(`${BASE_URL}`, {
    method: "GET",
  });

  return await response.json();
}

export async function getProductStockById(productStockId: number) {
  const response = await fetch(`${BASE_URL}/${productStockId}`, {
    method: "GET",
  });

  return await response.json();
}

export async function createProductStock({
  formData,
}: {
  formData: ProductStockCreate;
}) {
  await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return { success: true };
}

export async function updateProductStock({
  id,
  formData,
}: {
  id: number;
  formData: ProductStockCreate;
}) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return { success: true, id: data.id };
}

export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/categories`, {
    method: "GET",
  });

  return await response.json();
}
