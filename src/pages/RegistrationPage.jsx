import React from "react";
import { Form, Input, Button } from "antd";
import { auth } from "../../Firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {

  const auth = getAuth();

  const onFinish = (values) => {
    console.log("Received values of form:", values);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User created:", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error creating user:", errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
