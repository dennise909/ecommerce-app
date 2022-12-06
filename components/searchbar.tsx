import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styled from "@emotion/styled";
import React from "react";
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
const RoundSearch = styled(Input.Search)`
  input.ant-input {
    border-radius: 25px;
  }
  button {
    border-radius: 0px 25px 25px 0px !important;
  }
  .ant-input-group-addon {
    border-radius: 25px;
  }
`;
const onSearch = (value) => console.log(value);

const Searchbar = () => (
  <Space direction="vertical" className="w-full align-middle">
    <RoundSearch onSearch={onSearch} enterButton />
  </Space>
);

export default Searchbar;
