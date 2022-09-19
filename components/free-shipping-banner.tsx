import { Row } from "antd";
import React from "react";
import { css, cx } from "@emotion/css";
import BannerContainer from "./common/banner-container";

const styles = {
  row: css`
    margin-top: 10px;
    margin-inline: 0px;
    padding: 3rem 1rem 0;
  `,
};

const FreeShippingBanner: React.FC = () => {
  return (
    <BannerContainer variantColor="green">
      <Row justify="start" align="bottom" className={styles.row}>
        <h2 className="font-sans text-base">Free Shipping</h2>
        <p>by courier to the house</p>
      </Row>
    </BannerContainer>
  );
};

export default FreeShippingBanner;
