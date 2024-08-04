"use client"

import { Button, ConfigProvider } from "antd";
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Poppins, sans-serif',
          colorText: '#fff',
          colorPrimary: '#1D4ED8', // Tailwind's blue-500
          controlHeight: 40,
        },
        components: {
          Button: {
            colorBgTextHover: '#134ED8',
            // colorText: '#134ED8', this is not working for some reason
            borderRadius: 5,
          },
        },
      }}
    >
      <div className="flex justify-between items-center py-4 px-6 rounded-3xl mb-5">
        <div className="flex gap-2 items-center">
          <Image src="/trash-mail.png" width={50} height={50} alt="logo" />
          <h2 className="text-xl tracking-tight font-bold text-blue-500">
            trashmails.
          </h2>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 !hover:bg-white transition-all duration-300 transform hover:-translate-y-1"

          >
            Pricing
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 !hover:bg-white transition-all duration-300 transform hover:-translate-y-1"

          >
            Docs
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 !hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            About
          </Button>
        </div>

        <Link href="/sign-in" className="transform hover:-translate-y-1 duration-300 hidden md:inline-block">
          <Button type="primary" className="">
            Get Started
          </Button>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <Button
            type="text"
            className="!text-white !hover:text-blue-500"
            icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center bg-black text-white py-4 md:hidden">
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 !hover:bg-white w-full text-center transition-all duration-300"
            onClick={toggleMenu}
          >
            Pricing
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 !hover:bg-white w-full text-center transition-all duration-300"
            onClick={toggleMenu}
          >
            Docs
          </Button>
          <Button
            type="text"
            className="!text-white !hover:text-blue-500 !hover:bg-white w-full text-center transition-all duration-300"
            onClick={toggleMenu}
          >
            About
          </Button>
          <Link href="/sign-in">
            <Button
              type="primary"
              className="mt-4 w-full text-center"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </ConfigProvider>
  );
};

export default Navbar;
