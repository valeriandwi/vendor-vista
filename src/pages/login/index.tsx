import Login from "@/features/login";
import FrontLayout from "@/layouts/front-layout";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <FrontLayout>
      <Login />
    </FrontLayout>
  );
};

export default LoginPage;
