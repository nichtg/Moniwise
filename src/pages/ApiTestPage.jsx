import { Button, Col, Collapse, Row, Typography, theme } from "antd";
import { useState } from "react";
import "./../App.css";
import { getItems, panelStyle } from "../assets/Api_ItemConfig";

const ApiTestPage = () => {
  const [selectedIndex, setSelectedIndex] = useState("uploadTransactions");

  function createTransaction() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: "60a6b0b9c9b0c2b4b8b0b0b0",
        note: "test",
        amount: 100,
        category: "test",
      }),
    };

    fetch("http://localhost:3000/api/transaction", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div id="apiDiv" className="apiDiv">
      <Row>
        <Col span={24}>
          <Typography.Title
            className="pageTitle"
            id="apiPageTitle"
            style={{
              color: "#ffffff",
            }}
          >
            API Test Page
          </Typography.Title>
        </Col>
        <Col span={24} align="middle">
          <Collapse
            //items are stored in a... json? i think? in Api_ItemConfig.jsx
            //been a hot minute since i've touched this
            //ideally it should expand based on url params
            items={getItems(panelStyle, createTransaction)}
            defaultActiveKey={selectedIndex}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ApiTestPage;
