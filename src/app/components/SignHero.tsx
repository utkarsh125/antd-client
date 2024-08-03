"use client";

import { Button, Checkbox, Form, Input } from "antd";

import type { FormProps } from "antd";
import { GoogleCircleFilled } from "@ant-design/icons";
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
    <div className="flex min-h-screen bg-gray-900 text-white rounded-3xl overflow-hidden">
      {/* Sidebar */}
      <div className="relative hidden md:flex w-1/2 lg:w-1/2 bg-white p-8 shadow-lg">
        <Image
          src="/mail.jpg" // Replace with actual path of the uploaded image
          alt="Dashboard"
          layout="fill"
          objectFit="cover"
          className="object-right rounded-l-3xl overflow-hidden"
        />
      </div>

      {/* Sign-in Form */}
      <div className="relative flex w-full md:w-1/2 lg:w-1/2 justify-center items-center p-8">
        <div className="w-full max-w-md z-10">
          <h1 className="text-2xl font-semibold mb-6 text-white">Sign in</h1>
          <p className="text-sm text-gray-300 mb-4">
            No Setup Required.{" "}
            <a href="#" className="text-blue-400">
              Sign up for free.
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

            <div className="flex justify-between items-center mb-6">
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
            <Button type="default" className="w-full flex items-center gap-2" icon={<GoogleCircleFilled />}>
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
