import { Menu, theme } from "antd";
import { useState } from "react";
const { useToken } = theme;

const items3 = [
  { label: "Shoes", key: "shoes" },
  { label: "Dresses", key: "dresses" },
  { label: "T-shirts", key: "tshirts" },
  { label: "Sweaters", key: "sweaters" },
  { label: "Jackets", key: "jackets" },
];
export default function MktplSider({ Sider, onClick, current }) {
  const { token } = useToken();

  const handleClick = (event) => {
    onClick(event.key);
  };

  return (
    <Sider
      style={{
        backgroundColor: token.colorPrimaryBackground,
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="inline"
        style={{
          backgroundColor: token.colorPrimaryBackground,
          marginTop: "3rem",
        }}
        defaultSelectedKeys={["1"]}
        items={items3}
      />
    </Sider>
  );
}
