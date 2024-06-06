import { Button, Form, Input, Typography } from "antd";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2">
      <div
        className="w-1/2 h-screen bg-center rounded-r-xl"
        style={{ backgroundImage: "url(./assets/bg-login.jpg)" }}
      />
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-3/4">
          <Typography className="text-2xl text-center mb-8">
            Welcome Back !
          </Typography>
          <Form layout="vertical">
            <Form.Item name="name" label="Name">
              <Input className="w-full" size="large" />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input className="w-full" size="large" type="password" />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" className="w-full">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
