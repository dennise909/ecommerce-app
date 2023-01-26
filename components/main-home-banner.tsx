import React from "react";
import { Row } from "antd";
import BannerContainer from "../components/common/banner-container";
const HomeBanner: React.FC = () => {
  return (
    <BannerContainer
      height="26rem"
      width="95%"
      margin="2rem 0"
      variantColor="#2c4c41"
      borderRadius="15px"
      backgroundImage={
        "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      }
      backgroundSize="cover"
    >
      <Row>
        <h3>Holaaa</h3>
      </Row>
    </BannerContainer>
  );
};

export default HomeBanner;
