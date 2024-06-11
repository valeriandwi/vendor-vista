import { FilterOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import React from "react";
import MaterialItem from "./material-item";
import AppDrawer from "@/components/app-drawer";
import useDrawer from "@/hooks/useDrawer";
import MaterialForm from "./form";

const Material: React.FC = () => {
  const { open, onClose, showDrawer } = useDrawer();

  return (
    <>
      <div className="flex flex-row space-x-8 items-center mb-8 ">
        <Typography className="text-4xl font-bold h-full">Materials</Typography>
        <div className="flex flex-row space-x-2 h-full">
          {[...new Array(5)].map((_, index) => (
            <Button key={index}>Material {index}</Button>
          ))}
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center mb-8">
        <Input placeholder="Search" size="large" />
        <div className="whitespace-nowrap font-bold">
          Filter & Sort <FilterOutlined />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MaterialItem showDrawer={showDrawer} />
        <MaterialItem showDrawer={showDrawer} />
        <MaterialItem showDrawer={showDrawer} />
        <MaterialItem showDrawer={showDrawer} />
      </div>
      <AppDrawer onClose={onClose} open={open} title={"Place Bid"}>
        <MaterialForm />
      </AppDrawer>
    </>
  );
};

export default Material;
