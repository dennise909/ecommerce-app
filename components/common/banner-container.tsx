import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 8rem;
  width: 15rem;
  margin: 1rem;
  background-color: ${({ variantColor }: { variantColor: string }) =>
    variantColor ? variantColor : "#f9f9f9"};
  border-radius: 30px;
`;

const BannerContainer = ({
  children,
  variantColor,
}: {
  children: React.ReactNode;
  variantColor: string;
}) => {
  return <Container variantColor={variantColor}>{children}</Container>;
};

export default BannerContainer;
