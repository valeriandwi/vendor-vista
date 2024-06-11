import { Drawer } from "antd";
import React from "react";

interface AppDrawerProps {
  placement?: "top" | "right" | "bottom" | "left";
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  title?: string;
}

const AppDrawer: React.FC<AppDrawerProps> = ({
  placement = "right",
  onClose,
  open,
  children,
  title,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      closable={false}
      onClose={onClose}
      open={open}
      key={placement}
      width={"30%"}
    >
      {children}
    </Drawer>
  );
};

export default AppDrawer;
