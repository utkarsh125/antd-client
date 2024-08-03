import { Button, ConfigProvider } from "antd";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: 'Poppins, sans-serif',
      }
    }}>
      <div className="flex sm:justify-between items-center sm:flex-row flex-col">
        <div className="flex gap-2 items-center">
          <Image src="/trash-mail.png" width={50} height={50} alt="logo" />
          <h2 className="text-xl tracking-tight text-blue-500">trashmails.</h2>
        </div>
        <div>
          <Button type="text">Pricing</Button>
          <Button type="text">Docs</Button>
          <Button type="text">About</Button>
        </div>
        <Link href="/sign-in">
          <Button type="primary">Get Started</Button>
        </Link>
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
