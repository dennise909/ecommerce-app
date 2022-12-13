import React from "react";
import styled from "@emotion/styled";

type ContainerProps = {
  height: string;
  width: string;
  margin: string;
  variantColor: string;
  borderRadius: string;
  image1?: any;
  backgroundImage?: any;
};

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  background-color: ${({ variantColor }: { variantColor: string }) =>
    variantColor ? variantColor : "#f9f9f9"};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  border-radius: ${(props) => props.borderRadius};
`;

const BannerContainer = ({
  children,
  variantColor,
  height,
  width,
  margin,
  borderRadius,
  backgroundImage,
}: //
{
  children: React.ReactNode;
  variantColor?: string;
  height: string;
  width: string;
  margin?: string;
  borderRadius?: string;
  backgroundImage?: any;
}) => {
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      variantColor={variantColor}
      borderRadius={borderRadius}
      backgroundImage={backgroundImage}
    >
      {children}
    </Container>
  );
};

export default BannerContainer;
