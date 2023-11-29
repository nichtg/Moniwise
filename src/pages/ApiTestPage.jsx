import { Button, Col, Collapse, Row, Typography, theme, Form } from "antd";
import { useState } from "react";
import "./../App.css";
import ApiEndpointGenerator from "../assets/ApiEndpointGenerator";
import Api_ItemConfig from "../assets/Api_ItemConfig";
import apiConfig from "../assets/ApiConfig.json";

const ApiTestPage = () => {
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
            {/* Passes a json file containing endpoints to generate */}
            {ApiEndpointGenerator(apiConfig, createTransaction)}
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default ApiTestPage;
