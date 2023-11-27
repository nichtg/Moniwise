import { Button, Col, Collapse, Row, Typography, theme } from "antd";
import "./../App.css";
import TextArea from "antd/es/input/TextArea";

export const getItems = (panelStyle, createTransaction) => [
  {
    key: "uploadTransactions",
    label: "POST: Upload Transactions",
    children: (
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
          <TextArea
            id="createTransactionTextArea"
            rows={4}
            placeholder="JSON"
          />
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "end",
              verticalAlign: "middle",
              padding: "20px 0px 0px 0px",
            }}>
            <Button
              className="submitApiButton"
              id="createTransactionButton"
              type="primary"
              onClick={createTransaction}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
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

export const panelStyle = {
  background: "#ffffff",
};
