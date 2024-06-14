import AppSubtitle from "@/components/app-subtitle";
import AppTitle from "@/components/app-title";
import React from "react";
import SupplierPerformance from "./performance";
import { Table } from "antd";
import { materialSupplierTableColumn } from "./constants";

const SupplierDetail: React.FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <AppTitle>Supplier Detail</AppTitle>
          <AppSubtitle className="mb-8">Information about</AppSubtitle>
        </div>
        <div>
          <img src="#" width={210} height={50} />
        </div>
      </div>
      <SupplierPerformance />
      <Table
        columns={materialSupplierTableColumn}
        dataSource={[
          {
            materialName: "test",
            sellPrice: "10",
            bidPrice: "100",
          },
        ]}
      />
    </>
  );
};

export default SupplierDetail;
