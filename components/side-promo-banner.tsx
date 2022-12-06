import { Input, Row } from "antd";
import React from "react";
import styled from "@emotion/styled";
import BannerContainer from "../components/common/banner-container";

const { Search } = Input;

const RoundSearch = styled(Input.Search)<{ placeholder: string; style: any }>`
  input.ant-input {
    border-radius: 25px 0px 0px 25px;
  }
  button {
    border-radius: 25px 0px 0px 25px;
  }
`;

const onSearch = (value: string) => console.log(value);

const PromoBanner: React.FC = () => {
  return (
    <BannerContainer
      height="8rem"
      width="13rem"
      margin="2rem"
      variantColor="#2c4c41"
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
