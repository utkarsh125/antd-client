"use client";

import { Button, Input } from 'antd';

import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r rounded-3xl from-blue-900 via-blue-900 to-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
          Your <span className='text-blue-300'>All-in-One</span> Email Client
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          Manage all your emails seamlessly with our powerful and intuitive platform.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            type="primary"
            style={{
              backgroundColor: '#3b82f6', // Tailwind's bg-blue-500
              borderColor: '#3b82f6',
              color: 'white',
              boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
            }}
            className="hover:bg-blue-600"
          >
            Get Started
          </Button>
          <Input.Search
            placeholder="Enter your email"
            enterButton="Subscribe"
            size="large"
            style={{
              backgroundColor: '#1f2937', 
              borderColor: '#1f2937',
              color: '#d1d5db', 
              boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.25)',
            }}
          />
        </div>
      </div>
      <div className="mt-12">
        <Image
          src="/hero-mail.png" 
          alt="Email client mockup"
          width={1280}
          height={800}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
