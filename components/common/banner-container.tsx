import React from "react";
import styled from "@emotion/styled";

type ContainerProps = {
  height: string;
  width: string;
  margin: string;
  variantColor: string;
};

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  background-color: ${({ variantColor }: { variantColor: string }) =>
    variantColor ? variantColor : "#f9f9f9"};
  border-radius: 30px;
`;

const BannerContainer = ({
  children,
  variantColor,
  height,
  width,
  margin,
}: {
  children: React.ReactNode;
  variantColor: string;
  height: string;
  width: string;
  margin: string;
}) => {
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      variantColor={variantColor}
    >
      {children}
    </Container>
  );
};

export default BannerContainer;
