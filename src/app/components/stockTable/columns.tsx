import { Button, Flex, TableProps } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ProductStock } from "@/models/ProductStock";

interface GetProductStockResponseColumnsProps {
  handleEdit: (id: string) => void;
}

export const getProductResponseColumns = ({
  handleEdit,
}: GetProductStockResponseColumnsProps): TableProps<ProductStock>["columns"] => [
  { title: "Producto", dataIndex: "name", key: "name" },
  {
    title: "Cantidad Ingresada",
    dataIndex: "quantity",
    key: "quantity",
    width: "100px",
  },
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
