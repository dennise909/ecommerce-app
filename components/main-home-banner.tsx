import React from "react";
import { Row } from "antd";
import BannerContainer from "../components/common/banner-container";
const HomeBanner: React.FC = () => {
  return (
    <BannerContainer
      height="90%"
      width="95%"
      margin="2rem"
      variantColor="#2c4c41"
      borderRadius="15px"
      backgroundImage={
        "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
      }
    >
      <Row>
        <h3>Holaaa</h3>
      </Row>
    </BannerContainer>
  );
};

export default HomeBanner;
