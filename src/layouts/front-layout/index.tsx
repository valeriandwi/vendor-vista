import React from "react";

interface FrontLayoutProps {
  children: React.ReactNode;
}

const FrontLayout: React.FC<FrontLayoutProps> = ({ children }) => {
  return <div className=" h-screen w-screen">{children}</div>;
};

export default FrontLayout;
