import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React from "react";

const suffix = (
  <AudioOutlined
    className="text-base text-amber-400"
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const styles = {
  nameCell: css({
    padding: "16px",
  }),
};
const RoundSearch = styled(Input.Search)`
  input.ant-input {
    border-radius: 10px;
    padding-left: 50rem;
  }
  button {
    border-radius: 0px 10px 10px 0px !important;
  }
  .ant-input-group-addon {
    border-radius: 10px;
  }
`;
const onSearch = (value) => console.log(value);

const Searchbar = () => (
  <Space direction="vertical" align="center" className={styles.nameCell}>
    <RoundSearch onSearch={onSearch} enterButton />
  </Space>
);

export default Searchbar;
