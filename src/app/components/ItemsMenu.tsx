import { DatabaseOutlined, ProductOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/interface";
import Link from "next/link";

export function getItemsMenu(): {
  items: ItemType[];
} {
  const items: ItemType[] = [
    {
      key: "/product-page",
      icon: <ProductOutlined />,
      label: <Link href="/product-page">Productos</Link>,
    },
    {
      key: "/stock-page",
      icon: <DatabaseOutlined />,
      label: <Link href="/stock-page">Stock</Link>,
    },
  ];

  return { items };
}
