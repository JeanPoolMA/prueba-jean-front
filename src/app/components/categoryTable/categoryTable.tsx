import { Category } from "@/models/ProductStock";
import { Table } from "antd";
import { getCategoryColumns } from "./columns";

export interface Props {
  data: Category[];
}

export default function CategoryTable({ data }: Props) {
  const columns = getCategoryColumns();

  const columnsFiltered = columns?.filter((column) => !column.hidden) ?? [];

  return (
    <>
      <Table
        dataSource={data}
        columns={columnsFiltered}
        rowKey="categoryName"
        pagination={false}
        scroll={{ x: "max-content", y: 200 }}
        className="custom-table"
        style={{ marginTop: 10 }}
      />
    </>
  );
}
