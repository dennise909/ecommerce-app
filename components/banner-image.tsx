import { Input, Row } from "antd";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 8rem;
  width: 15rem;
  margin: 1rem;
  background-color: #f9f9f9;
`;

const PromoBanner: React.FC = () => {
  return (
    <Container>
      <Row justify="center" className="mt-4">
        <h2 className="font-sans text-base">Have a promo code?</h2>
      </Row>
      <Row justify="center" className="mt-4 p-3">
        <a>All promotions and coupons</a>
      </Row>
    </Container>
  );
};

export default PromoBanner;
