import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import React from "react";

interface AppButtonProps {
  size: SizeType;
  children: React.ReactNode;
  className: string;
}

const AppButton: React.FC<AppButtonProps> = ({ size, children, className }) => {
  return (
    <>
      <Button size={size} className={className}>
        {children}
      </Button>
    </>
  );
};

export default AppButton;
