import { Menu } from "antd";
import React from "react";

const MenuItem: React.FC = () => {
  const items = [
    {
      key: "dashboard",
      label: "Dashboard",
    },
    {
      key: "materials",
      label: "Materials",
    },
    {
      key: "suppliers",
      label: "Suppliers",
    },
    {
      key: "bidding_history",
      label: "Bidding History",
    },
  ];
  return <Menu items={items} mode="horizontal" className="w-full" />;
};

export default MenuItem;
