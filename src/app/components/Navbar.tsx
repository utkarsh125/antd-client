"use client";

import { Button, ConfigProvider } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setTimeout(() => {
      setMenuOpen(!menuOpen);
    }, 100);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins, sans-serif",
          colorText: "#fff",
          colorPrimary: "#1D4ED8",
          controlHeight: 40,
          borderRadius: 8,
          colorBgContainer: "transparent",
        },
        components: {
          Button: {
            colorBgTextHover: "#1D4ED8",
            colorText: "#fff",
            colorPrimaryHover: "#2563EB",
            colorBgTextActive: "#1E40AF",
            borderRadius: 8,
            colorBorder: "#fff",
          },
        },
      }}
    >
      <div className="flex justify-between items-center py-4 px-6 rounded-3xl mb-5 bg-gradient-to-tr from-gray-900 to-gray-800 shadow-lg">
        <div className="flex gap-2 items-center">
          <Link href={`/`} className="flex items-center gap-2">
            <Image src="/trash-mail.png" width={50} height={50} alt="logo" />
            <h2 className="text-xl tracking-tight font-bold text-blue-500">
              trashmails.
            </h2>
          </Link>
        </div>

        <div className="hidden md:flex gap-6">
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Pricing
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Docs
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            About
          </Button>
        </div>

        <Link
          href="/sign-in"
          className="transform hover:-translate-y-1 duration-300 hidden md:inline-block"
        >
          <Button
            type="primary"
            className="!text-white !bg-blue-500 !rounded-lg !px-6 !py-2 !shadow-lg transition-all duration-300 hover:!bg-blue-600 hover:!shadow-xl"
          >
            Get Started
          </Button>
        </Link>

        <div className="md:hidden">
          <Button
            type="text"
            className="!text-white"
            icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {menuOpen && (
        <div
          className="flex flex-col items-center bg-gradient-to-tr from-gray-900 to-gray-800 text-white py-4 px-4 md:hidden rounded-3xl shadow-lg transition-all duration-300"
          style={{ marginTop: "1rem" }}
        >
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 w-full text-center transition-all duration-300 mb-2"
            onClick={toggleMenu}
          >
            Pricing
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 w-full text-center transition-all duration-300 mb-2"
            onClick={toggleMenu}
          >
            Docs
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 w-full text-center transition-all duration-300 mb-2"
            onClick={toggleMenu}
          >
            About
          </Button>
          <Link href="/sign-in">
            <Button
              type="primary"
              className="mt-4 w-full text-center !bg-blue-500 !rounded-lg !shadow-lg transition-all duration-300 hover:!bg-blue-600 hover:!shadow-xl"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </Link>
        </div>
      )}
      <div className={`${menuOpen ? "mt-6" : ""}`}></div>
    </ConfigProvider>
  );
};

export default Navbar;
