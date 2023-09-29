import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("MENU", "Menu", <AppstoreOutlined />, [
    getItem("Dashboard", "Dashboard", <ion-icon name="grid"></ion-icon>),
    getItem("Food Order", "Food Order", <ion-icon name="cart"></ion-icon>),
    getItem(
      "Manage Menu",
      "Manage Menu",
      <ion-icon name="document-text"></ion-icon>
    ),
    getItem(
      "Customer Review",
      "Customer Review",
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    ),
  ]),
  getItem("OTHERS", "Others", <AppstoreOutlined />, [
    getItem("Dashboard", "Dashboard", <ion-icon name="grid"></ion-icon>),
    getItem("Food Order", "Food Order", <ion-icon name="cart"></ion-icon>),
    getItem(
      "Manage Menu",
      "Manage Menu",
      <ion-icon name="document-text"></ion-icon>
    ),
    getItem(
      "Customer Review",
      "Customer Review",
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    ),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default App;
