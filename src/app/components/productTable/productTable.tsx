"use client";

import { Product } from "@/models/ProductStock";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { getProductResponseColumns } from "./columns";
import { TableRowSelection } from "antd/es/table/interface";
import { useState } from "react";

export interface Props {
  data: Product[];
}

export default function ProductTable({ data }: Props) {
  const router = useRouter();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleEdit = (id: string) => {
    router.push(`/product-page/edit/${id}`);
  };

  const columns = getProductResponseColumns({ handleEdit });

  const columnsFiltered = columns?.filter((column) => !column.hidden) ?? [];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<Product> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Table
        dataSource={data}
        columns={columnsFiltered}
        rowKey="id"
        pagination={false}
        rowSelection={rowSelection}
        scroll={{ x: "max-content", y: 400 }}
        className="custom-table"
      />
    </>
  );
}
