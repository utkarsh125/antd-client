"use client";

import { Button, Dropdown, Form, Input, Menu, MenuProps, Modal, Progress, Radio } from "antd";
import { DeleteOutlined, DownOutlined, EditOutlined, InboxOutlined, PlusOutlined, SendOutlined, SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { addEmail, markAsRead, moveToTrash, selectEmail } from "../redux/features/emailSlice";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import { LucideMail } from "lucide-react";
import { RadioChangeEvent } from 'antd/es/radio'; // Added import
import { RootState } from "../redux/store";
import { setActiveFolder } from "../redux/features/folderSlice";
import { setTheme } from "../redux/features/themeSlice";

const { TextArea } = Input;

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state: RootState) => state.email.emails);
  const selectedEmailId = useSelector((state: RootState) => state.email.selectedEmailId);
  const activeFolder = useSelector((state: RootState) => state.folder.activeFolder);
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const [isNewMailModalVisible, setNewMailModalVisible] = useState(false);
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

  const filteredEmails = emails.filter((email) => email.folder === activeFolder);

  const showEmail = (id: string) => {
    dispatch(selectEmail(id));
    dispatch(markAsRead(id)); // Mark email as read when opened
  };

  const closeModal = () => {
    dispatch(selectEmail(""));
  };

  const handleDeleteEmail = (id: string) => {
    dispatch(moveToTrash(id)); // Move email to Trash when deleted
  };

  const handleNewMail = () => {
    setNewMailModalVisible(true);
  };

  const handleSendMail = (values: { subject: string; body: string }) => {
    dispatch(
      addEmail({
        folder: "sent",
        ...values,
        sender: "you@trashmails.com",
        receiver: "recipient@example.com", // You can set this dynamically as needed
        sentAt: new Date().toLocaleString(),
        receivedAt: new Date().toLocaleString(),
        read: false,
      })
    );
    setNewMailModalVisible(false);
  };

  const handleThemeChange = (e: RadioChangeEvent) => {
    dispatch(setTheme(e.target.value as 'light' | 'dark'));
  };

  const renderEmailList = () => (
    <ul className="space-y-2">
      {filteredEmails.map((email) => (
        <li
          key={email.id}
          className={`p-3 rounded-xl ${currentTheme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'} shadow-sm cursor-pointer hover:bg-blue-50 transition-all duration-200 ${
            email.read ? "text-gray-600" : "font-semibold"
          }`}
          onClick={() => showEmail(email.id)}
        >
          <h4 className="text-lg truncate">{email.subject}</h4>
          <p className="truncate">{email.sender}</p>
          <div className="flex justify-end">
            <Button
              type="text"
              size="small"
              className="text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteEmail(email.id);
              }}
              icon={<DeleteOutlined />}
            />
          </div>
        </li>
      ))}
    </ul>
  );

  const renderEmailContent = () => {
    const email = emails.find((email) => email.id === selectedEmailId);
    if (!email) return null;

    return (
      <div>
        <h3 className="font-medium text-lg mb-2">{email.subject}</h3>
        <p className="text-gray-600 mb-1">From: {email.sender}</p>
        <p className="text-gray-600 mb-1">To: {email.receiver}</p>
        <p className="text-gray-600 mb-1">Sent: {email.sentAt}</p>
        <p className="text-gray-600 mb-4">Received: {email.receivedAt}</p>
        <div className="whitespace-pre-wrap">{email.body}</div>
      </div>
    );
  };

  const menuItems: MenuProps["items"] = [
    {
      label: "New Mail",
      key: "1",
      icon: <PlusOutlined />,
      onClick: handleNewMail,
    },
    {
      label: "Settings",
      key: "2",
      icon: <SettingOutlined />,
      onClick: () => setSettingsModalVisible(true),
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50'} p-4 lg:p-6`}>
      {/* Header */}
      <header className={`bg-white p-2 rounded-xl shadow-sm flex justify-between items-center mb-3 ${currentTheme === 'dark' && 'bg-gray-700 text-white'}`}>
        <div className="flex items-center gap-2">
          <Image src="/hero.png" height={35} width={35} alt="logo" />
          <h1 className="text-lg text-blue-600 font-medium">TrashMails Dashboard</h1>
        </div>
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
          <Button className="text-blue-600" type="text">
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </header>

      {/* Storage Bar */}
      <div className={`bg-white p-3 rounded-xl shadow-sm flex items-center mb-3 ${currentTheme === 'dark' && 'bg-gray-700 text-white'}`}>
        <LucideMail className="text-blue-600 mr-2" size={20} />
        <Progress percent={70} showInfo={false} strokeColor="#1890ff" className="flex-1" />
        <span className="ml-4 text-gray-500 text-sm">15 GB of 20 GB used</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className={`w-full lg:w-64 p-2 rounded-xl shadow-sm mb-3 lg:mb-0 lg:mr-3 ${currentTheme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}>
          <h2 className="text-lg text-blue-600 font-medium mb-3">Folders</h2>
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
            className={`text-white ${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-white'}`} // Updated className
          />
        </aside>

        {/* Email List */}
        <main className={`flex-1 p-2 bg-white rounded-xl shadow-sm overflow-y-auto ${currentTheme === 'dark' && 'bg-gray-700 text-white'}`}>
          <h2 className="text-xl mb-3 text-blue-600 font-medium capitalize">{activeFolder}</h2>
          {renderEmailList()}
        </main>
      </div>

      {/* Email View Modal */}
      <Modal
        title="Email Content"
        open={!!selectedEmailId}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
        className="rounded-xl"
        bodyStyle={{ maxHeight: "60vh", overflowY: "auto" }}
        width="80%" // Adjust the width as needed
      >
        {renderEmailContent()}
      </Modal>

      {/* New Mail Modal */}
      <Modal
        title="Compose New Mail"
        open={isNewMailModalVisible}
        onCancel={() => setNewMailModalVisible(false)}
        footer={null}
        className="rounded-xl"
      >
        <Form layout="vertical" onFinish={handleSendMail}>
          <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="body" label="Body" rules={[{ required: true, message: "Please enter the email body" }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Settings Modal */}
      <Modal
        title="Settings"
        open={isSettingsModalVisible}
        onCancel={() => setSettingsModalVisible(false)}
        footer={null}
        className="rounded-xl"
      >
        <h3 className="font-medium mb-3">Theme</h3>
        <Radio.Group value={currentTheme} onChange={handleThemeChange}>
          <Radio.Button value="light">Light</Radio.Button>
          <Radio.Button value="dark">Dark</Radio.Button>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default DashboardPage;
