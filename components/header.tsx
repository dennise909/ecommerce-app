import {
  DropboxOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Searchbar from "../components/searchbar";
import { Col, Row, Menu, theme } from "antd";
import "antd/dist/reset.css";
import { MenuItemProps } from "antd/es/menu/MenuItem";

const items1 = [
  {
    route: "/about",
    icon: <DropboxOutlined />,
    key: "1",
  },
  {
    route: "/favorite",
    icon: <HeartOutlined />,
    key: "2",
  },
  {
    route: "/cart",
    icon: <ShoppingCartOutlined />,
    key: "3",
  },
];
const items3: MenuItemProps["items"] = [
  { label: "News", key: "news" },
  {
    label: <a href="/marketplace">Marketplace</a>,
    key: "market",
  },
  { label: "Templates", key: "templates" },
  { label: "Support", key: "support" },
];

const { useToken } = theme;

const Pageheader = ({ Header }: any) => {
  const { token } = useToken();
  return (
    <>
      <Header style={{ backgroundColor: token.colorPrimaryBackground }}>
        <div className="logo" />
        <Row justify="center">
          <Col span={8}>
            <Menu
              style={{ backgroundColor: token.colorPrimaryBackground }}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items1}
            ></Menu>
          </Col>
          <Col span={16}>
            <Searchbar />
          </Col>
        </Row>
      </Header>
      <Menu
        style={{ backgroundColor: token.colorPrimaryBackground }}
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items3}
      ></Menu>
    </>
  );
};
export default Pageheader;
