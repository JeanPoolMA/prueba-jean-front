"use client";

import { useParams } from "next/navigation";
import ProductForm from "./ProductForm";
import { useGetProductById } from "@/features/product/productQuery/query";

export default function ProductPage() {
  const { mode, id } = useParams() as { mode: "edit" | "new"; id: string };

  const { data } = useGetProductById(id, mode);
  return (
    <>
      <ProductForm id={id} product={data} mode={mode} />
    </>
  );
}
