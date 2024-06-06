import { Avatar, Dropdown, MenuProps } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a>View Profile</a>,
  },
];

const UserButton: React.FC = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      arrow
      className="cursor-pointer"
    >
      <Avatar size={"default"} icon={<UserOutlined />} />
    </Dropdown>
  );
};

export default UserButton;
