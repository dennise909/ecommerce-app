import {
  DropboxOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Searchbar from "../components/searchbar";
import { Col, Row, Menu, theme } from "antd";
import "antd/dist/reset.css";

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
const items3 = [
  { label: "News", key: "news" },
  { label: "Marketplace", key: "market" },
  { label: "Templates", key: "templates" },
  { label: "Support", key: "support" },
];

const { useToken } = theme;

const Homeheader = ({ Header }: any) => {
  const { token } = useToken();
  return (
    <>
      <Header style={{ backgroundColor: token.colorPrimaryBackground }}>
        <div className="logo" />
        {/* agregar container */}
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
export default Homeheader;
