import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React, { CSSProperties } from "react";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    className="text-base text-amber-400"
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const Searchbar = () => (
  <Space direction="vertical" className="w-full align-middle">
    <Search onSearch={onSearch} enterButton />
  </Space>
);

export default Searchbar;
