import { Input, Row, Divider } from "antd";
import React from "react";
import "../styles/Home.module.css";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const ShippingBanner: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: "8rem",
          width: "15rem",
          margin: "1rem",
          backgroundColor: "#f9f9f9",
        }}
        className="rounded-lg content-center flex flex-col space-y-1"
      >
        <Row justify="center" className="mt-4">
          <h2 className="font-sans text-base">Have a promo code?</h2>
        </Row>
        <Row justify="center">
          <Search
            placeholder="Enter promo code"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Row>
        <Row justify="center" className="mt-4 p-3">
          <a>All promotions and coupons</a>
        </Row>
      </div>
    </>
  );
};

export default ShippingBanner;
