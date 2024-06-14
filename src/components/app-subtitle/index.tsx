import { Typography, TypographyProps } from "antd";
import React from "react";
import clsx from "clsx";

interface AppSubtitleProps {
  children: React.ReactNode;
  props?: TypographyProps;
  className?: string;
}

const AppSubtitle: React.FC<AppSubtitleProps> = ({
  children,
  props,
  className,
}) => {
  return (
    <Typography className={clsx(className, "text-xl text-gray-500")} {...props}>
      {children}
    </Typography>
  );
};

export default AppSubtitle;
