import { Typography, TypographyProps } from "antd";
import React from "react";
import clsx from "clsx";

interface AppTitleProps {
  children: React.ReactNode;
  props?: TypographyProps;
  className?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ children, props, className }) => {
  return (
    <Typography className={clsx(className, "text-3xl font-bold")} {...props}>
      {children}
    </Typography>
  );
};

export default AppTitle;
