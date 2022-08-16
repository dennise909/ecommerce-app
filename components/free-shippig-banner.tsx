import { Row } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";

const Container = styled.div`
  height: 8rem;
  width: 15rem;
  margin: 1rem;
  background-color: #f9f9f9;
  border-radius: 30px;
`;

const styles = {
  row: css`
    margin-top: 10px;
  `,
  text: css``,
};

const FreeShippingBanner: React.FC = () => {
  return (
    <Container>
      <Row justify="start" align="bottom" className={styles.row}>
        <h2 className="font-sans text-base">Free Shipping</h2>
        <p>by courier to the house</p>
      </Row>
    </Container>
  );
};

export default FreeShippingBanner;
