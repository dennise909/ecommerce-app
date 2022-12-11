import { Input, Row } from "antd";
import React from "react";
import styled from "@emotion/styled";
import BannerContainer from "../components/common/banner-container";

const RoundSearch = styled(Input.Search)<{ placeholder: string; style: any }>`
  input.ant-input {
    border-radius: 10px 0px 0px 10px;
  }
  button {
    border-radius: 10px 0px 0px 10px;
  }

  .ant-input-group-addon {
    border-radius: 10px;
  }
`;

const onSearch = (value: string) => console.log(value);

const PromoBanner: React.FC = () => {
  return (
    <BannerContainer
      margin="2rem 0 2rem 0"
      height="10rem"
      width="23rem"
      variantColor="#2c4c41"
      borderRadius="15px"
    >
      <Row justify="center" className="mt-4">
        <h2 className="font-sans text-base">Have a promo code?</h2>
      </Row>
      <Row justify="center">
        <RoundSearch
          placeholder="Enter promo code"
          onSearch={onSearch}
          style={{ borderRadius: "10px" }}
        />
      </Row>
      <Row justify="center" className="mt-4 p-3">
        <a>All promotions and coupons</a>
      </Row>
    </BannerContainer>
  );
};

export default PromoBanner;
