import useMaterial from "@/stores/material-store";
import { Button } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { BuyingFormProps } from "../buying-form";

const withBidAmountForm = (Component: React.ComponentType<BuyingFormProps>) => {
  const NewComponent = () => {
    const { setSelectedSupplier } = useMaterial();

    const biddingColumn: ColumnsType = [
      {
        key: "supplierName",
        dataIndex: "supplierName",
        title: "Supplier Name",
      },
      { key: "bidPrice", dataIndex: "bidPrice", title: "Bid Price" },
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

    return <Component isBidding={true} columns={biddingColumn} />;
  };

  return NewComponent;
};

export default withBidAmountForm;
