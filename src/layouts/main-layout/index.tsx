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
      <Header className="flex justify-between items-center bg-blackPrimary text-white text-xl">
        <div className="w-full flex space-x-8">
          <div className="w-max">Logo</div>
          <Menu />
        </div>
        <UserButton />
      </Header>
      <Content className="px-16 pt-8 pb-16 min-h-[calc(100vh-64px)]">
        {children}
      </Content>
    </Layout>
  );
};

export default MainLayout;
