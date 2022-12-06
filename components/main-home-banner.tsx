import React from "react";
import { Row } from "antd";
import styled from "@emotion/styled";
import BannerContainer from "../components/common/banner-container";
import Image from "next/image";
import image1 from "../assets/image1.jpg";

const HomeBanner: React.FC = () => {
  return (
    <BannerContainer
      height="15rem"
      width="28rem"
      margin="2rem"
      variantColor="#2c4c41"
    >
      <Row>
        <h3>Holaaa</h3>
        <Image
          src={image1}
          alt="Clothes pictures"
          width="350px"
          height="300px"
        ></Image>
      </Row>
    </BannerContainer>
  );
};

export default HomeBanner;
