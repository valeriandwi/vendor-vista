import { Button, Tag, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

export const supplierTableColumn: ColumnsType = [
  {
    key: "supplierName",
    dataIndex: "supplierName",
    title: "Supplier Name",
    render: (supplierName: string) => (
      <div className="flex flex-row gap-2">
        <img src="#" width={"24"} height={"24"} />
        <Typography>{supplierName}</Typography>
      </div>
    ),
  },
  {
    key: "materials",
    dataIndex: "materials",
    title: "Materials",
    render: (materials: string[]) => (
      <div className="flex flex-row gap-2">
        {materials.map((material, index) => (
          <Tag key={index}>{material}</Tag>
        ))}
      </div>
    ),
  },
  {
    key: "overallRating",
    dataIndex: "overallRating",
    title: "Overall Rating",
  },
  {
    key: "successRate",
    dataIndex: "successRate",
    title: "Success Rate",
  },
  {
    key: "action",
    title: "Action",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render: (_: unknown, record) => (
      <Link to={record.id}>
        <Button size="large" type="primary" onClick={() => console.log(record)}>
          Show Detail
        </Button>
      </Link>
    ),
  },
];
