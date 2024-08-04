"use client";

import { Button, Dropdown, Menu, Modal, Progress } from "antd";
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  InboxOutlined,
  PlusOutlined,
  SendOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import { LucideMail } from "lucide-react";
import type { MenuProps } from "antd";
import React from "react";
import { RootState } from "../redux/store";
import { selectEmail } from "../redux/features/emailSlice";
import { setActiveFolder } from "../redux/features/folderSlice";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state: RootState) => state.email.emails);
  const selectedEmailId = useSelector((state: RootState) => state.email.selectedEmailId);
  const activeFolder = useSelector((state: RootState) => state.folder.activeFolder);

  const filteredEmails = emails.filter((email) => email.folder === activeFolder);

  const showEmail = (id: string) => {
    dispatch(selectEmail(id));
  };

  const closeModal = () => {
    dispatch(selectEmail(""));
  };

  const renderEmailList = () => (
    <ul>
      {filteredEmails.map((email) => (
        <li
          key={email.id}
          className={`mb-2 p-4 rounded-3xl bg-white shadow-lg cursor-pointer hover:bg-blue-50 ${email.read ? '' : 'font-bold'}`}
          onClick={() => showEmail(email.id)}
        >
          <h4>{email.subject}</h4>
          <p className="text-gray-600">{email.sender}</p>
        </li>
      ))}
    </ul>
  );

  const renderEmailContent = () => {
    const email = emails.find((email) => email.id === selectedEmailId);
    if (!email) return null;

    return (
      <div>
        <h3 className="font-bold text-lg mb-2">{email.subject}</h3>
        <p className="text-gray-600 mb-4">From: {email.sender}</p>
        <p>{email.body}</p>
      </div>
    );
  };

  const menuItems: MenuProps["items"] = [
    {
      label: "New Mail",
      key: "1",
      icon: <PlusOutlined />,
      onClick: () => dispatch(selectEmail("new")),
    },
    {
      label: "Settings",
      key: "2",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <div className="min-h-screen rounded-3xl mt-10 flex flex-col bg-gray-100 p-4 lg:p-6">
      {/* Header */}
      <header className="bg-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Image src="/hero.png" height={40} width={40} alt="logo" />
          <h1 className="text-xl text-blue-600 font-semibold">TrashMails Dashboard</h1>
        </div>
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
          <Button className="text-blue-600" type="text">
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </header>

      {/* Storage Bar */}
      <div className="bg-white p-4 rounded-3xl shadow-lg flex items-center mb-4">
        <LucideMail className="text-blue-600 mr-2" size={20} />
        <Progress percent={70} showInfo={false} strokeColor="#1890ff" className="flex-1" />
        <span className="ml-4 text-gray-600">15 GB of 20 GB used</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white p-4 rounded-3xl shadow-lg mb-4 lg:mb-0 lg:mr-4">
          <h2 className="text-xl text-blue-600 font-semibold mb-4">Folders</h2>
          <Menu
            mode="inline"
            defaultSelectedKeys={["inbox"]}
            onSelect={({ key }) => dispatch(setActiveFolder(key as "inbox" | "sent" | "drafts" | "trash"))}
            items={[
              { key: "inbox", icon: <InboxOutlined />, label: "Inbox" },
              { key: "sent", icon: <SendOutlined />, label: "Sent" },
              { key: "drafts", icon: <EditOutlined />, label: "Drafts" },
              { key: "trash", icon: <DeleteOutlined />, label: "Trash" },
            ]}
          />
        </aside>

        {/* Email List */}
        <main className="flex-1 p-6 bg-white rounded-3xl shadow-lg overflow-y-auto">
          <h2 className="text-2xl mb-4 text-blue-600 font-semibold capitalize">{activeFolder}</h2>
          {renderEmailList()}
        </main>
      </div>

      {/* Email View Modal */}
      <Modal
        title="Email Content"
        visible={!!selectedEmailId}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
        className="rounded-3xl"
      >
        {renderEmailContent()}
      </Modal>
    </div>
  );
};

export default DashboardPage;
