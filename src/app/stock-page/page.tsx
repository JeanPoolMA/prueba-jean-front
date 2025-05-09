"use client";

import { useProductStockQuery } from "@/features/productStocks/productStockQuery/query";
import { Button, Flex, Spin } from "antd";
import Link from "next/link";
import ProductStockTable from "../components/stockTable/stockTable";

export default function PageProduct() {
  const { isPending, data } = useProductStockQuery();
  return (
    <>
      <Flex justify="space-between" align="center" style={{ margin: 8 }}>
        <div>
          <Link href="/stock-page/create/new">
            <Button type="primary">Añadir Stock</Button>
          </Link>
        </div>
      </Flex>

      <Spin spinning={isPending} tip="Cargando stocks...">
        <ProductStockTable data={data?.stocks || []} />
      </Spin>
    </>
  );
}
