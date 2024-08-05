"use client";

import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { GoogleCircleFilled, InboxOutlined } from "@ant-design/icons";

import Image from "next/image";
import React from "react";

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignIn: React.FC = () => {
  return (
    <div className="relative flex flex-col p-10 rounded-3xl justify-center items-center px-4 sm:px-6 lg:px-8 my-8 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-900 to-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mb-6 text-center animate-fade-in-down text-white">
        <InboxOutlined className="text-4xl sm:text-5xl lg:text-6xl" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
          An <span className="text-blue-500">Inbox</span> Like Never Before!
        </h1>
      </div>
      <div className="relative flex flex-col md:flex-row min-h-[520px] md:min-h-[620px] shadow-xl w-full max-w-6xl bg-gray-900 text-white rounded-3xl overflow-hidden">
        {/* Sidebar */}
        <div className="relative hidden md:flex w-full md:w-1/2 bg-white shadow-lg animate-fade-in-left">
          <Image
            src="/mail.jpg" // Replace with actual path of the uploaded image
            alt="Dashboard"
            layout="fill"
            objectFit="cover"
            className="object-center md:object-right rounded-l-3xl overflow-hidden"
          />
        </div>

        {/* Sign-in Form */}
        <div className="relative flex w-full md:w-1/2 justify-center items-center p-6 sm:p-8 animate-fade-in-right">
          <div className="w-full max-w-sm sm:max-w-md z-10">
            <h1 className="text-2xl font-semibold mb-4 sm:mb-6 text-white">
              Sign in
            </h1>
            <p className="text-sm text-gray-300 mb-4">
              No Setup Required.{" "}
              <a href="#" className="text-blue-400">
                Sign in to get started.
              </a>
            </p>

            <Form
              name="signin"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="form-labels"
            >
              <Form.Item<FieldType>
                label={<span className="text-white">Email</span>}
                name="email"
                rules={[{ required: true, message: "Please enter your email." }]}
              >
                <Input placeholder="Email" className="text-black" />
              </Form.Item>

              <Form.Item<FieldType>
                label={<span className="text-white">Password</span>}
                name="password"
                rules={[{ required: true, message: "Please enter your password." }]}
              >
                <Input.Password placeholder="Password" className="text-black" />
              </Form.Item>

              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-white">Remember me</Checkbox>
                </Form.Item>

                <a href="#" className="text-blue-400">
                  Forgot password?
                </a>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Sign in
                </Button>
              </Form.Item>
            </Form>

            <div className="flex items-center justify-center mt-4">
              <Button
                type="default"
                className="w-full flex items-center gap-2 justify-center"
              >
                <GoogleCircleFilled /> Sign in with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
