import "antd/dist/reset.css";
import { Row, Col } from "antd";
import BannerContainer from "./common/banner-container";
import PromoBanner from "./side-promo-banner";
import FreeShippingBanner from "./free-shipping-banner";
import HomeBanner from "./main-home-banner";

const Homecontent = ({ Content }) => {
  return (
    <Content
      style={{
        padding: "0 50px",
        backgroundColor: "white",
      }}
    >
      <BannerContainer height="50%" width="100%" variantColor="white">
        <Row>
          <Col span={18}>
            <HomeBanner />
          </Col>
          <Col span={6}>
            <Row justify="center">
              <PromoBanner />
            </Row>
            <Row justify="center">
              <FreeShippingBanner />
            </Row>
          </Col>
        </Row>
      </BannerContainer>
      <BannerContainer
        height="50%"
        width="100%"
        variantColor="white"
        margin="2rem 0 0 0"
      >
        <Row>All Sellers</Row>
        <Row justify="center">
          <Col span={8}>
            <FreeShippingBanner />
          </Col>
          <Col span={8}>
            <FreeShippingBanner />
          </Col>
          <Col span={8}>
            <FreeShippingBanner />
          </Col>
        </Row>
      </BannerContainer>
    </Content>
  );
};

export default Homecontent;
