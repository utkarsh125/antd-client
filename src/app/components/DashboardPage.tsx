"use client";

import { Button, Dropdown, Menu, Modal } from "antd";
import { MailOutlined, PlusOutlined, SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import { DownOutlined } from '@ant-design/icons';
import Image from "next/image";
import { InboxOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

const DashboardPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  const emails = [
    { id: "1", subject: "Welcome to TrashMails!", sender: "admin@trashmails.com", body: "This is your first email!" },
    { id: "2", subject: "Weekly Newsletter", sender: "news@trashmails.com", body: "Here are some updates for you." },
    { id: "3", subject: "Security Alert", sender: "security@trashmails.com", body: "Unusual login activity detected." },
    { id: "4", subject: "Security Alert", sender: "security@trashmails.com", body: "Unusual login activity detected." },
    { id: "5", subject: "Security Alert", sender: "security@trashmails.com", body: "Unusual login activity detected." },
  ];

  const showEmail = (id: string) => {
    setSelectedEmail(id);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedEmail(null);
  };

  const renderEmailList = () => (
    <ul>
      {emails.map((email) => (
        <li
          key={email.id}
          className="mb-4 p-4 rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300"
          onClick={() => showEmail(email.id)}
        >
          <h4 className="font-bold">{email.subject}</h4>
          <p className="text-gray-600">{email.sender}</p>
        </li>
      ))}
    </ul>
  );

  const renderEmailContent = () => {
    const email = emails.find((email) => email.id === selectedEmail);
    if (!email) return null;

    return (
      <div>
        <h3 className="font-bold text-lg mb-2">{email.subject}</h3>
        <p className="text-gray-600 mb-4">From: {email.sender}</p>
        <p>{email.body}</p>
      </div>
    );
  };

  const menu: MenuProps['items'] = [
    {
      label: 'New Mail',
      key: '1',
      icon: <PlusOutlined />,
      onClick: () => setIsModalVisible(true),
    },
    {
      label: 'Settings',
      key: '2',
      icon: <SettingOutlined />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <header className="bg-blue-600 p-4 flex justify-between items-center rounded-t-3xl">
        <div className="flex items-center gap-2">
            <Image src="/hero.png" height={50} width={50} alt="logo"/>
            <h1 className="text-2xl text-white font-bold">TrashMails Dashboard</h1>
        </div>
        <Dropdown menu={{ items: menu }} trigger={['click']}>
          <Button className="text-white bg-blue-800 hover:bg-blue-700" type="text">
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-900 text-white p-4 rounded-bl-3xl">
          <h2 className="text-xl mb-4">Folders</h2>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["inbox"]}
            items={[
              { key: "inbox", icon: <InboxOutlined />, label: "Inbox" },
              { key: "sent", icon: <MailOutlined />, label: "Sent" },
              { key: "drafts", icon: <MailOutlined />, label: "Drafts" },
              { key: "trash", icon: <MailOutlined />, label: "Trash" },
            ]}
          />
        </aside>

        {/* Email List */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto rounded-br-3xl">
          <h2 className="text-2xl mb-4">Inbox</h2>
          {renderEmailList()}
        </main>
      </div>

      {/* Email View Modal */}
      <Modal
        title="Email Content"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        {renderEmailContent()}
      </Modal>
    </div>
  );
};

export default DashboardPage;
