import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopView = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={`/`} className="flex gap-x-0.5 items-center">
        <Image src="/trash-mail.png" width={50} height={50} alt="logo" />
        <h2 className="text-xl tracking-tight text-blue-500 font-bold">trashmails.</h2>
      </Link>

      <Link
        href={`https://github.com/utkarsh125`}
        className="flex gap-2 items-center text-white hover:text-blue-500"
      >
        <h1 className="">Want to continue as a developer?</h1>
        <GithubOutlined />
      </Link>
    </div>
  );
};

export default TopView;
