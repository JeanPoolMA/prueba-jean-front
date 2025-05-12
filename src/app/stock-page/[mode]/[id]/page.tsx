"use client";

import { useParams } from "next/navigation";
import { useGetProductStockById } from "@/features/productStocks/productStockQuery/query";
import ProductStockForm from "./StockForm";

export default function ProductStockPage() {
  const params = useParams<{ mode: string; id: string }>();
  const mode =
    params.mode === "edit" || params.mode === "new" ? params.mode : "new";
  const id = Number(params.id);

  const { data } = useGetProductStockById(id, mode);
  return (
    <>
      <ProductStockForm id={id} stock={data} mode={mode} />
    </>
  );
}
