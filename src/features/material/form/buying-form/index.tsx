import { Button, Form, Input, Typography } from "antd";
import React from "react";
import SupplierTable from "../supplier-table";
import { ColumnsType } from "antd/es/table";

export interface BuyingFormProps {
  isBidding: boolean;
  columns: ColumnsType;
}

const BuyingForm: React.FC<BuyingFormProps> = ({ isBidding, columns }) => {
  return (
    <>
      <Typography className="mt-4 text-gray-600 text-lg font-bold mb-4">
        <span>
          {isBidding
            ? "You are about to place a bid for ...."
            : "You are about to buy"}
        </span>
      </Typography>
      <SupplierTable columns={columns} />
      <Typography className="mt-8 mb-2 font-bold text-lg text-blackPrimary">
        Place Your Order
      </Typography>
      <Form>
        <div className="p-0 flex flex-row space-x-2">
          <Form.Item name="bidAmount" className="mb-2 w-full">
            <Input
              placeholder="Enter your bid amount"
              className="w-full"
              size="large"
              type="number"
            />
          </Form.Item>
          <Form.Item name="quantity" className="mb-2 w-full">
            <Input
              placeholder="Enter your quantity"
              className="w-full"
              size="large"
              type="number"
            />
          </Form.Item>
        </div>
        {isBidding && <div>Current lowest price : $0.1</div>}
        <Form.Item>
          <Button type="primary" size="large" className="w-full mt-8">
            <span>{isBidding ? "Place a Bid" : "Buy"}</span>
          </Button>
          <Button type="text" className="w-full mt-2" size="large">
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BuyingForm;
