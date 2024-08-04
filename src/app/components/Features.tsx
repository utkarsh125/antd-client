// Features.tsx
"use client";

import { Activity, Clock, Cloud, Shield, Users } from 'lucide-react';
import { Card, Col, Row } from 'antd';

import React from 'react';

const features = [
  {
    title: 'Secure & Private',
    description: 'Your privacy is our priority. All your emails are securely encrypted.',
    icon: <Shield size={48} />,
  },
  {
    title: 'Unlimited Storage',
    description: 'Never run out of space with our unlimited storage options.',
    icon: <Cloud size={48} />,
  },
  {
    title: 'Real-time Notifications',
    description: 'Stay updated with real-time notifications for new emails.',
    icon: <Clock size={48} />,
  },
  {
    title: 'Collaborative Inbox',
    description: 'Work together with team members in shared inboxes.',
    icon: <Users size={48} />,
  },
  {
    title: 'Advanced Analytics',
    description: 'Get detailed analytics and insights on your email activities.',
    icon: <Activity size={48} />,
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 py-16 px-4 md:px-12 rounded-3xl mt-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Key Features of TrashMail
        </h2>
        <p className="text-lg md:text-xl text-black mt-4">
          Discover why TrashMail is the best choice for managing your emails.
        </p>
      </div>
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col
            key={index}
            xs={24}    // Full width on extra small screens
            sm={12}    // Two columns on small screens
            md={8}     // Three columns on medium screens
            lg={6}     // Four columns on large screens
            xl={6}     // Four columns on extra-large screens
          >
            <Card
              hoverable
              className="transition-transform transform hover:scale-105 bg-white"
              style={{ borderRadius: '12px', overflow: 'hidden' }}
              bodyStyle={{ padding: '24px', textAlign: 'center' }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
