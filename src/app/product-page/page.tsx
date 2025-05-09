"use client";

import { Button, Flex, Spin } from "antd";
import Link from "next/link";
import ProductTable from "../components/productTable/productTable";
import CategoryTable from "../components/categoryTable/categoryTable";
import {
  useCategoryQuery,
  useProductQuery,
} from "@/features/product/productQuery/query";

export default function PageProduct() {
  const { isPending: isProductPending, data: productData } = useProductQuery();
  const { isPending: isCategoryPending, data: categoryData } =
    useCategoryQuery();
  return (
    <>
      <Flex justify="space-between" align="center" style={{ margin: 8 }}>
        <div>
          <Link href="/product-page/create/new">
            <Button type="primary">Añadir Producto</Button>
          </Link>
        </div>
      </Flex>

      <Spin spinning={isProductPending} tip="Cargando productos...">
        <ProductTable data={productData?.products || []} />
      </Spin>
      <div style={{ marginTop: 30, textAlign: "center" }}>
        <h2>Lista de Totales Por Categorias</h2>
      </div>
      <Spin spinning={isCategoryPending} tip="Cargando categorias...">
        <CategoryTable data={categoryData?.categories || []} />
      </Spin>
    </>
  );
}
