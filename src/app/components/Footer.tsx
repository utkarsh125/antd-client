"use client";

import { Col, Row } from 'antd';
import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div
      ref={footerRef}
      className="bg-gradient-to-t rounded-3xl from-black to-gray-900 text-white py-8 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p>
              We are a team of developers passionate about creating beautiful
              and functional web applications.
            </p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="cursor-pointer mb-2">
                <a href="/pricing" className="hover:underline">Pricing</a>
              </li>
              <li className="cursor-pointer mb-2">
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li className="cursor-pointer mb-2">
                <a href="/docs" className="hover:underline">Docs</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>Email: contact@yourdomain.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} trashmails. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
