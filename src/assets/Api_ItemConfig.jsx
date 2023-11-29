//KEPT FOR REFERENCE ONLY, REPLACED BY ApiEndpointGenerator.jsx. Will be removed after migration is complete.
import React from "react";
import { Button, Col, Row, Typography, Form, Input } from "antd";
import "./../App.css";

const Api_ItemConfig = () => {
  const [form] = Form.useForm();

  const panelStyle = {
    background: "#ffffff",
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const exampleJSON = {
    key1: "value1",
    key2: "value2",
    key3: {
      nestedKey1: "nestedValue1",
      nestedKey2: "nestedValue2",
    },
  };

  return [
    {
      key: "uploadTransactions",
      label: "POST: Upload Transactions",
      children: (
        <Form
          form={form}
          name="POST"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <div
            style={{
              padding: "10px 50px 20px 50px",
            }}>
            <Row>
              <Col span={24}>
                <Typography.Text>
                  Description: Adds transactions to user id
                </Typography.Text>
              </Col>
              <Form.Item
                noStyle
                name="createTransactionTextArea"
                rules={[
                  { required: true, message: "Please input your transaction!" },
                ]}>
                <Input.TextArea
                  rows={7}
                  placeholder={JSON.stringify(exampleJSON, null, 2)} //2 spaces indentation
                />
              </Form.Item>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  verticalAlign: "middle",
                  padding: "20px 0px 0px 0px",
                }}>
                <Form.Item noStyle shouldUpdate={true}>
                  <Button
                    className="submitApiButton"
                    id="createTransactionButton"
                    type="primary"
                    htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <div></div>,
      style: panelStyle,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <div></div>,
      style: panelStyle,
    },
  ];
};

export default Api_ItemConfig;
