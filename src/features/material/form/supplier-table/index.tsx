import { Table } from "antd";
import React from "react";
import "./index.scss";
import useMaterial from "@/stores/material-store";
import { dummyData } from "../../dummyData";
import { ColumnsType } from "antd/es/table";

export interface SupplierTableProps {
  columns: ColumnsType;
}

const SupplierTable: React.FC<SupplierTableProps> = ({ columns }) => {
  const { selectedSupplier } = useMaterial();

  return (
    <Table
      columns={columns}
      dataSource={dummyData}
      pagination={false}
      rowSelection={{
        selectedRowKeys: selectedSupplier ? [selectedSupplier] : [],
        columnWidth: 0,
        renderCell: () => <></>,
        hideSelectAll: true,
      }}
      className="supplier-table"
    />
  );
};

export default SupplierTable;
