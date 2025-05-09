import { TableProps } from "antd";
import { Category } from "@/models/ProductStock";

export const getCategoryColumns = (): TableProps<Category>["columns"] => [
  { title: "Categorias", dataIndex: "categoryName", key: "categoryName" },
  {
    title: "Stock Total",
    dataIndex: "totalQuantity",
    key: "totalQuantity",
    width: "100px",
  },
];
