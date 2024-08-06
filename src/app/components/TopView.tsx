"use client";

import { Button, ConfigProvider, Dropdown } from "antd";
import { DownOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

import React from "react";
import { useRouter } from "next/navigation";

const TopView: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      onClick: () => router.push("/profile"),
    },
    {
      label: "Logout",
      key: "logout",
      icon: <HomeOutlined />,
      onClick: () => {
        router.push("/");
        console.log("Logout");
      },
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
        },
      }}
    >
      <header className="p-4 mb-4 mt-4 rounded-xl shadow-sm flex justify-between items-center bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="flex items-center gap-2">
          <h1 className="text-lg text-gray-300 font-medium">
            Signed in as <span className="font-bold">John Doe</span>
          </h1>
        </div>
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
          <Button
            className="topview-btn"
            type="text"
          >
            Account <DownOutlined />
          </Button>
        </Dropdown>
      </header>
    </ConfigProvider>
  );
};

export default TopView;
