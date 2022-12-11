import React from "react";
import { Row } from "antd";
import styled from "@emotion/styled";
import BannerContainer from "../components/common/banner-container";
import image1 from "../public/assets/image1.jpg";

const HomeBanner: React.FC = () => {
  const image = `url(${image1.src}`;

  return (
    <BannerContainer
      height="90%"
      width="95%"
      margin="2rem"
      variantColor="#2c4c41"
      borderRadius="15px"
    >
      {/* <Image src={image1} alt="Clothes pictures" layout="responsive"></Image> */}
      <Row>
        <h3>Holaaa</h3>
      </Row>
    </BannerContainer>
  );
};

export default HomeBanner;
