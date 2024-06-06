import { Layout } from "antd";
import React from "react";
import Menu from "./menu";
import UserButton from "./user-button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const { Header, Content } = Layout;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header className="flex justify-between items-center bg-blackPrimary text-white">
        <div>Logo</div>
        <Menu />
        <UserButton />
      </Header>
      <Content className="p-8 min-h-[calc(100vh-64px)]">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
