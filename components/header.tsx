import {
  DropboxOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Searchbar from "../components/searchbar";
import { Layout, Col, Row, Menu } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "../styles/Header.module.css";
import CustomMenu from "./menu";
import PromoBanner from "./side-promo-banner";
import FreeShippingBanner from "./free-shippig-banner";

const { Header, Content } = Layout;
const items1 = [
  {
    route: "/about",
    icon: <DropboxOutlined />,
    label: "About",
    key: "1",
  },
  {
    route: "/favorite",
    icon: <HeartOutlined />,
    label: "Favorite",
    key: "2",
  },
  {
    route: "/favorite",
    icon: <ShoppingCartOutlined />,
    label: "Favorite",
    key: "3",
  },
];
const items3 = [
  { label: "News", key: "news" },
  { label: "Marketplace", key: "market" },
  { label: "Templates", key: "templates" },
  { label: "Support", key: "support" },
];
const Homeheader = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={8}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <CustomMenu items={items1}></CustomMenu>
          </Menu>
        </Col>
        <Col span={12}>
          <Searchbar />
        </Col>
      </Row>
    </Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <CustomMenu items={items3}></CustomMenu>
    </Menu>
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <PromoBanner />
      <FreeShippingBanner />
    </Content>
  </Layout>
);

export default Homeheader;
