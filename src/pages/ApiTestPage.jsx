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
    <div
      id="apiDiv"
      style={{
        display: "auto",
        margin: "auto",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        background: "#040717",
      }}>
      <Row>
        <Col span={24}>
          <Typography.Title
            className="pageTitle"
            id="apiPageTitle"
            style={{
              color: "#ffffff",
            }}>
            API Test Page
          </Typography.Title>
        </Col>
        <div //this is the div that holds the collapsible menu
          style={{
            width: "100%",
            padding: "0px 100px 50px 100px",
          }}>
          <Col span={24} align="middle">
            <Collapse style={{
              textAlign: "left",
            }}
              //items are stored in a... json? i think? in Api_ItemConfig.jsx
              //ideally it should expand based on url params
              items={getItems(panelStyle, createTransaction)}
              defaultActiveKey={selectedIndex}
            />
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default ApiTestPage;
