"use client";

import { ProductStock } from "@/models/ProductStock";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { getProductResponseColumns } from "./columns";

export interface Props {
  data: ProductStock[];
}

export default function ProductStockTable({ data }: Props) {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/stock-page/edit/${id}`);
  };

  const columns = getProductResponseColumns({ handleEdit });

  const columnsFiltered = columns?.filter((column) => !column.hidden) ?? [];

  return (
    <>
      <Table
        dataSource={data}
        columns={columnsFiltered}
        rowKey="id"
        pagination={false}
        scroll={{ x: "max-content", y: 400 }}
        className="custom-table"
      />
    </>
  );
}
