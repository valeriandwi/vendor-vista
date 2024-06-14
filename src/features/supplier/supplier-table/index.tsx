import { Table } from "antd";
import React from "react";
import { supplierTableColumn } from "../constants";
import { dummyData } from "../dummyData";

const SupplierTable: React.FC = () => {
  return <Table columns={supplierTableColumn} dataSource={dummyData} />;
};

export default SupplierTable;
