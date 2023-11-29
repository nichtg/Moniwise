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

  const onFinish = (values) => {
    //get values from formInput
    console.log("currentFormInput: ", currentFormInput);
    console.log("Form values:", form.getFieldValue(`${currentFormInput}`));

    // onSubmit(values);
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
          const { input, label, name, rules, description, method } = section;
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
                    <Input.TextArea rows={7} />
                  </Form.Item>
                )}
                {input === "text" && (
                  <Form.Item name={`${name}-text`} rules={rules} noStyle>
                    <Input />
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
