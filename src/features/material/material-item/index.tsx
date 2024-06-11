import { ShopOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";

interface MaterialItemProps {
  showDrawer: () => void;
}

const MaterialItem: React.FC<MaterialItemProps> = ({ showDrawer }) => {
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex flex-col hover:brightness-75 space-y-2">
        <img
          src="./assets/material-1.png"
          className="rounded-lg max-h-[32rem] hover:scale-[1.01] transition duration-200 cursor-pointer"
        />
        <Typography className="font-semibold text-xl text-justify leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <div className="flex flex-row justify-between text-gray-400">
          <Typography className="font-bold text-lg text-gray-500">
            $ 100.5
          </Typography>
          <Typography className="text-lg text-gray-500">
            <ShopOutlined className="mr-2" />
            25+ Vendor
          </Typography>
        </div>
      </div>
      <Button
        type="primary"
        className="w-full"
        size="large"
        onClick={() => showDrawer()}
      >
        Bid / Buy
      </Button>
    </div>
  );
};

export default MaterialItem;
