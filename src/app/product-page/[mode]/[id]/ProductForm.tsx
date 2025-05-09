"use client";

import {
  useCreateProduct,
  useUpdateProduct,
} from "@/features/product/productStockMutation/mutation";
import { Product } from "@/models/ProductStock";
import { Button, Flex, Form, Input, InputNumber, Spin, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface ProductFormProps {
  id: string;
  product: Product | undefined;
  mode: "edit" | "new" | "create";
}

export default function ProductForm({ id, product, mode }: ProductFormProps) {
  const [form] = useForm();
  const router = useRouter();
  const [showStock, setShowStock] = useState(false);
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    if (mode === "edit" && id) {
      updateMutation.mutate(
        {
          id: id,
          formData: values,
        },
        {
          onSuccess: () => router.push("/product-page"),
        }
      );
    } else {
      createMutation.mutate(
        {
          formData: values,
        },
        {
          onSuccess: () => router.push("/product-page"),
        }
      );
    }
  };

  const isLoading =
    (mode === "edit" && !product) ||
    createMutation.isPending ||
    updateMutation.isPending;

  return (
    <>
      <Spin spinning={isLoading} style={{ height: "100vh" }}>
        {mode === "edit" && !product ? null : (
          <div>
            <Form
              key={mode === "edit" ? product?.id : "new"}
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              initialValues={{
                name: product?.name || "",
                categoryName: product?.categoryName || "",
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: "El nombre es requerido" }]}
                style={{ width: "30%" }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Categoria"
                name="categoryName"
                rules={[
                  { required: true, message: "La categoria es requerida" },
                ]}
                style={{ width: "30%" }}
              >
                <Input />
              </Form.Item>

              {mode === "create" && (
                <>
                  <Form.Item label="¿Añadir Stock?" style={{ width: "30%" }}>
                    <Switch onChange={setShowStock} />
                  </Form.Item>

                  {showStock && (
                    <Form.Item
                      label="Cantidad de Stock"
                      name="quantity"
                      rules={[
                        {
                          required: true,
                          message: "La cantidad es requerida",
                        },
                      ]}
                      style={{ width: "30%" }}
                    >
                      <InputNumber min={1} style={{ width: "100%" }} />
                    </Form.Item>
                  )}
                </>
              )}

              <Flex gap={20} className="button-product">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {mode === "edit" ? "Actualizar" : "Crear"}
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link href="/product-page">
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
