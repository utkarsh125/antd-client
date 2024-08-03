import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopView = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src="/trash-mail.png" width={50} height={50} alt="logo" />
        <h2 className="text-xl tracking-tight text-blue-500">trashmails.</h2>
      </div>

      <Link
        href={`https://github.com/utkarsh125`}
        className="flex gap-2 items-center hover:text-blue-500"
      >
        <h1 className="">Want to continue as a developer?</h1>
        <GithubOutlined />
      </Link>
    </div>
  );
};

export default TopView;
