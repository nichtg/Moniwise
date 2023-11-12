import { Button, Col, Collapse, Row, Typography, theme } from "antd";
import "./../App.css";

export const getItems = (panelStyle, createTransaction) => [
  {
    key: "uploadTransactions",
    label: "Upload Transactions",
    children: (
      <Row>
        <Col span={24}>
          <Typography.Text>Short writeup of function and required parameters (if any)</Typography.Text>
        </Col>
        <Col span={24}>
          <div className="collapseDiv">
            <Button
              className="submitApiButton"
              id="createTransactionButton"
              type="primary"
              onClick={createTransaction}>
              Submit
            </Button>
          </div>
        </Col>
      </Row>
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
