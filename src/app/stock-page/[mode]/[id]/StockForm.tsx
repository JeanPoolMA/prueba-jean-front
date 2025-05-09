"use client";

import { useProductQuery } from "@/features/product/productQuery/query";
import {
  useCreateProductStock,
  useUpdateProductStock,
} from "@/features/productStocks/productStockMutation/mutation";
import { ProductStock } from "@/models/ProductStock";
import { Button, Flex, Form, InputNumber, Select, Spin } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ProductStockFormProps {
  id: number;
  stock: ProductStock | undefined;
  mode: "edit" | "new" | "create";
}

export default function ProductStockForm({
  id,
  stock,
  mode,
}: ProductStockFormProps) {
  const [form] = useForm();
  const router = useRouter();
  const createMutation = useCreateProductStock();
  const updateMutation = useUpdateProductStock();
  const productQuery = useProductQuery();
  const handleSubmit = async () => {
    const values = form.getFieldsValue();

    if (mode === "edit" && id) {
      updateMutation.mutate(
        {
          id: id,
          formData: values,
        },
        {
          onSuccess: () => router.push("/stock-page"),
        }
      );
    } else {
      createMutation.mutate(
        {
          formData: values,
        },
        {
          onSuccess: () => router.push("/stock-page"),
        }
      );
    }
  };

  const isLoading =
    (mode === "edit" && !stock) ||
    createMutation.isPending ||
    updateMutation.isPending;

  return (
    <>
      <Spin spinning={isLoading} style={{ height: "100vh" }}>
        {mode === "edit" && !stock ? null : (
          <div>
            <Form
              key={mode === "edit" ? stock?.id : "new"}
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              initialValues={{
                name: stock?.quantity || "",
                productId: stock?.productId || undefined,
                quantity: stock?.quantity || "",
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <>
                <Form.Item
                  label="Producto"
                  name="productId"
                  rules={[
                    { required: true, message: "El producto es requerido" },
                  ]}
                  style={{ width: "30%" }}
                >
                  <Select
                    showSearch
                    placeholder="Seleccione un producto"
                    optionFilterProp="label"
                    disabled={mode !== "new"}
                    options={productQuery.data?.products?.map((product) => ({
                      label: product.name,
                      value: product.id,
                    }))}
                  />
                </Form.Item>
              </>
              <Form.Item
                label="Cantidad"
                name="quantity"
                rules={[
                  { required: true, message: "La cantidad es requerida" },
                ]}
                style={{ width: "30%" }}
              >
                <InputNumber min={1} style={{ width: "100%" }} />
              </Form.Item>

              <Flex gap={20} className="button-stock">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {mode === "edit" ? "Actualizar" : "Crear"}
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link href="/stock-page">
                    <Button danger>Cancelar</Button>
                  </Link>
                </Form.Item>
              </Flex>
            </Form>
          </div>
        )}
      </Spin>
    </>
  );
}
