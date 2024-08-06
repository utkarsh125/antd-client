import { AppDispatch, RootState } from '../redux/store';
import { Badge, Button, Form, Input, Modal } from 'antd';
import { Bookmark, ChevronRight, Inbox, Send, Star, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { moveToTrash, sendEmail, setFilter, setSelectedEmail, toggleImportant, toggleRead, toggleStarred } from '../redux/features/emailSlice';
import { useDispatch, useSelector } from 'react-redux';

// Define the Email type if it's not imported from a separate file
interface Email {
  id: number;
  sender: string;
  subject: string;
  date: string;
  isRead: boolean;
  isStarred: boolean;
  isImportant: boolean;
  folder: 'primary' | 'promotions' | 'social' | 'updates' | 'trash' | 'sent'; // Add 'sent' folder
  content: string;
}

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { emails, filter, selectedEmail } = useSelector((state: RootState) => state.email);
  const [isComposeModalVisible, setComposeModalVisible] = useState(false);
  const [form] = Form.useForm();

  const filteredEmails = emails.filter((email) => email.folder === filter).slice(0, 20);

  const handleFilterChange = (newFilter: 'primary' | 'promotions' | 'social' | 'updates' | 'trash' | 'sent') => {
    dispatch(setFilter(newFilter));
  };

  const handleToggleRead = (id: number) => {
    dispatch(toggleRead(id));
  };

  const handleToggleStarred = (id: number) => {
    dispatch(toggleStarred(id));
  };

  const handleToggleImportant = (id: number) => {
    dispatch(toggleImportant(id));
  };

  const handleMoveToTrash = (id: number) => {
    dispatch(moveToTrash(id));
  };

  const handleEmailClick = (id: number) => {
    const email = emails.find((email) => email.id === id);
    if (email) {
      dispatch(setSelectedEmail(id));
    } else {
      console.error("Email not found");
      dispatch(setSelectedEmail(null)); // or handle as needed
    }
  };

  const handleCompose = () => {
    setComposeModalVisible(true);
  };

  const handleComposeCancel = () => {
    setComposeModalVisible(false);
  };

  const handleComposeFinish = (values: { to: string; subject: string; content: string }) => {
    const newEmail: Email = {
      id: emails.length + 1,
      sender: 'You',
      subject: values.subject,
      date: new Date().toLocaleDateString(),
      isRead: true,
      isStarred: false,
      isImportant: false,
      folder: 'sent',
      content: values.content,
    };
    dispatch(sendEmail(newEmail));
    form.resetFields();
    setComposeModalVisible(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 p-4">
        <Button type="primary" className="w-full mb-6" onClick={handleCompose}>Compose</Button>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer" onClick={() => handleFilterChange('primary')}>
            <Inbox className="text-xl" />
            <span>Inbox</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer" onClick={() => handleFilterChange('updates')}>
            <Star className="text-xl" />
            <span>Updates</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer" onClick={() => handleFilterChange('social')}>
            <Send className="text-xl" />
            <span>Social</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer" onClick={() => handleFilterChange('promotions')}>
            <Bookmark className="text-xl" />
            <span>Promotions</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer" onClick={() => handleFilterChange('trash')}>
            <Trash2 className="text-xl" />
            <span>Trash</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer" onClick={() => handleFilterChange('sent')}>
            <Send className="text-xl" />
            <span>Sent</span>
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 bg-white p-4 border-r border-gray-200">
        <div className="space-y-2">
          {filteredEmails.map((email) => (
            <div
              key={email.id}
              className="flex justify-between items-center py-2 border-b border-gray-200 cursor-pointer"
              onClick={() => handleEmailClick(email.id)}
            >
              <div className="flex items-center space-x-2">
                <input type="checkbox" onChange={() => handleToggleRead(email.id)} checked={email.isRead} />
                <Star
                  className={`cursor-pointer ${email.isStarred ? 'text-yellow-400' : 'text-gray-400'}`}
                  onClick={(e) => { e.stopPropagation(); handleToggleStarred(email.id); }}
                />
                <Bookmark
                  className={`cursor-pointer ${email.isImportant ? 'text-red-500' : 'text-gray-400'}`}
                  onClick={(e) => { e.stopPropagation(); handleToggleImportant(email.id); }}
                />
                <span className={`${email.isRead ? 'text-gray-500' : 'font-bold text-black'}`}>
                  {email.sender}
                </span>
              </div>
              <div className="flex space-x-4">
                <span>{email.date}</span>
                <Trash2 className="text-gray-400 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleMoveToTrash(email.id); }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Details */}
      <div className="flex-1 bg-gray-50 p-4">
        {selectedEmail ? (
          <div>
            <h2 className="text-xl font-bold">{selectedEmail.subject}</h2>
            <p className="text-gray-600">From: {selectedEmail.sender}</p>
            <p className="mt-4">{selectedEmail.content}</p>
          </div>
        ) : (
          <div className="text-gray-500">
            <ChevronRight /> No email selected or email not found.
          </div>
        )}
      </div>

      {/* Compose Modal */}
      <Modal title="Compose Email" visible={isComposeModalVisible} onCancel={handleComposeCancel} footer={null}>
        <Form layout="vertical" form={form} onFinish={handleComposeFinish}>
          <Form.Item label="To" name="to" rules={[{ required: true, message: 'Please enter the recipient\'s email!' }]}>
            <Input placeholder="Recipient's email" />
          </Form.Item>
          <Form.Item label="Subject" name="subject" rules={[{ required: true, message: 'Please enter the email subject!' }]}>
            <Input placeholder="Email subject" />
          </Form.Item>
          <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please enter the email content!' }]}>
            <Input.TextArea rows={4} placeholder="Write your email here..." />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Dashboard;