import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import "./../App.css";

export const ApiEndpointGenerator = (apiConfig, onSubmit) => {
  const [form] = Form.useForm();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentFormInput, setCurrentFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseJson, setResponseJson] = useState("");

  const response = {
    status: 200,
    statusText: "OK",
    data: {
      userID: "60a6b0b9c9b0c2b4b8b0b0b0",
      note: "test",
      amount: 100,
      category: "test",
    },
  };

  const onFinish = (values) => {
    //get values from formInput
    console.log("currentFormInput: ", currentFormInput);
    const fieldValue = JSON.parse(form.getFieldValue(`${currentFormInput}`));
    setResponseJson(JSON.stringify(response, null, 2));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("currentFormInput: ", currentFormInput);
    console.log("Failed:", errorInfo);
  };

  //reads the json file and creates a header for each api endpoint.
  //each header contains a form, button, description and maybe input
  return (
    <div>
      <Collapse
        style={{
          textAlign: "left",
          background: "#ffffff",
        }}
        defaultActiveKey={selectedIndex}>
        {apiConfig.map((section, index) => {
          const { input, label, name, rules, description, method, value } =
            section;
          return (
            <Collapse.Panel key={index} header={`${method}: ${label}`}>
              <Form
                form={form}
                name={`${name}-form`}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Typography.Text>{description}</Typography.Text>
                {input === "textarea" && (
                  <Form.Item name={`${name}-textarea`} rules={rules} noStyle>
                    <Input.TextArea
                      rows={7}
                      placeholder={JSON.stringify(value, null, 2)}
                      defaultValue={JSON.stringify(value, null, 2)}
                    />
                  </Form.Item>
                )}
                {input === "text" && (
                  <Form.Item name={`${name}-text`} rules={rules} noStyle>
                    <Input placeholder={value} />
                  </Form.Item>
                )}
                <Row>
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
                        type="primary"
                        onClick={() => {
                          setCurrentFormInput(`${name}-${input}`);
                        }}
                        htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                  <Card
                    title="Response"
                    bordered={false}
                    style={{ width: "100%" }}>
                    <Typography.Text>
                      <pre> {responseJson}</pre>
                    </Typography.Text>
                  </Card>
                </Row>
              </Form>
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default ApiEndpointGenerator;
