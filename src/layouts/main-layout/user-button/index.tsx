import { Avatar, Dropdown, MenuProps } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "viewProfile",
    label: <a>View Profile</a>,
  },
  {
    key: "logout",
    label: <a>Logout</a>,
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
