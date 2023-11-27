import React from "react";
import { Link } from "react-router-dom";
import {
  BarChartOutlined,
  HomeOutlined,
  MenuOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

// Add new menu items to sidebar
function getItem(label, key, icon) {
  return {
    label,
    key,
    icon,
  };
}

// Function to add hyperlinks to menu items
function getLink(label, path) {
  return (
    <Link to={path} rel="noopener noreferrer">
      {label}
    </Link>
  );
}

const topMenu = [
  getItem(getLink("Home", "/"), "home", <HomeOutlined />),
  getItem(
    getLink("Dashboard", "/dashboard"),
    "dashboard",
    <BarChartOutlined />
  ),
  getItem(
    getLink("Transactions", "/transactions"),
    "transactions",
    <MenuOutlined />
  ),
  getItem(getLink("Profile", "/profile"), "profile", <UserOutlined />),
  getItem("Settings", "settings", <SettingOutlined />),
];

const bottomMenu = [getItem(getLink("Logout", "/logout"), "logout", <LogoutOutlined />)];

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        <Menu
          defaultSelectedKeys={["home"]}
          defaultOpenKeys={["home"]}
          mode="inline"
          theme="dark"
          items={topMenu}
        />
      </div>
      <div>
        <Menu
          style={{ marginBottom: "auto" }}
          mode="inline"
          theme="dark"
          items={bottomMenu}
        />
      </div>
    </div>
  );
};

export default Sidebar;
