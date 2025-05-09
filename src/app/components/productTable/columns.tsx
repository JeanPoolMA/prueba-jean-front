import { Button, Flex, TableProps } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Product } from "@/models/ProductStock";

interface GetProductResponseColumnsProps {
  handleEdit: (id: string) => void;
}

export const getProductResponseColumns = ({
  handleEdit,
}: GetProductResponseColumnsProps): TableProps<Product>["columns"] => [
  { title: "Producto", dataIndex: "name", key: "name" },
  { title: "Categoria", dataIndex: "categoryName", key: "categoryName" },
  { title: "Stock", dataIndex: "quantity", key: "quantity", width: "100px" },
  {
    title: "Acciones",
    dataIndex: "id",
    render: (id: string) => {
      return (
        <>
          <Flex gap={10}>
            <Button
              onClick={() => handleEdit(id)}
              color="primary"
              variant="outlined"
              size="small"
            >
              <EditOutlined />
            </Button>
          </Flex>
        </>
      );
    },
  },
];
