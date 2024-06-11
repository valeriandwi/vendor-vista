import useMaterial from "@/stores/material-store";
import { Button } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { BuyingFormProps } from "../buying-form";

const withBuyForm = (Component: React.ComponentType<BuyingFormProps>) => {
  const NewComponent: React.FC = () => {
    const { setSelectedSupplier } = useMaterial();

    const buyColumn: ColumnsType = [
      {
        key: "supplierName",
        dataIndex: "supplierName",
        title: "Supplier Name",
      },
      { key: "buyPrice", dataIndex: "buyPrice", title: "Price" },
      { key: "minOrder", dataIndex: "minOrder", title: "Min Order" },
      {
        key: "action",
        dataIndex: "action",
        title: "Action",
        render: (_, record) => (
          <>
            <Button
              type="primary"
              onClick={() => setSelectedSupplier(record.id)}
            >
              Select
            </Button>
          </>
        ),
      },
    ];

    return <Component isBidding={false} columns={buyColumn} />;
  };

  return NewComponent;
};

export default withBuyForm;
