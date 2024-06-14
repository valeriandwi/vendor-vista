import { Button } from "antd";
import { ColumnsType } from "antd/es/table";

export const materialSupplierTableColumn: ColumnsType = [
  {
    key: "materialName",
    dataIndex: "materialName",
    title: "Material Name",
  },
  {
    key: "sellPrice",
    dataIndex: "sellPrice",
    title: "Sell Price",
  },
  {
    key: "bidPrice",
    dataIndex: "bidPrice",
    title: "Bid Price",
  },
  {
    key: "action",
    title: "Action",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render: (_: unknown, record) => (
      <div className="flex flex-row space-x-2">
        <Button size="large" type="primary" onClick={() => console.log(record)}>
          Bid
        </Button>
        <Button size="large" type="primary" onClick={() => console.log(record)}>
          Buy
        </Button>
      </div>
    ),
  },
];
