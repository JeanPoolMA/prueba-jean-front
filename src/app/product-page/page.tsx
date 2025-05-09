"use client";

import { Button, Flex, Input, Space, Spin } from "antd";
import Link from "next/link";
import ProductTable from "../components/productTable/productTable";
import CategoryTable from "../components/categoryTable/categoryTable";
import {
  useCategoryQuery,
  useProductQuery,
} from "@/features/product/productQuery/query";
import { useMemo, useState } from "react";
import { debounce } from "lodash";

export default function PageProduct() {
  const { isPending: isProductPending, data: productData } = useProductQuery();
  const { isPending: isCategoryPending, data: categoryData } =
    useCategoryQuery();
  const [name, setName] = useState<string>("");

  const debounceSearch = useMemo(
    () =>
      debounce((value: string) => {
        setName(value);
      }, 500),
    []
  );
  const filteredProducts = productData?.products?.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
  return (
    <>
      <Flex justify="space-between" align="center" style={{ margin: 8 }}>
        <div>
          <Link href="/product-page/create/new">
            <Button type="primary">Añadir Producto</Button>
          </Link>
        </div>
      </Flex>

      <Space wrap>
        <Input
          placeholder="Buscar por nombre"
          id="name"
          autoComplete="off"
          onChange={(e) => {
            debounceSearch(e.target.value);
            setName(e.target.value);
          }}
          allowClear
          value={name}
          count={{
            max: 255,
            exceedFormatter: (txt, { max }) => txt.slice(0, max),
          }}
        />
      </Space>
      <Spin spinning={isProductPending} tip="Cargando productos...">
        <ProductTable data={filteredProducts || []} />
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
