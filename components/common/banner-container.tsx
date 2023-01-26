import React from "react";
import styled from "@emotion/styled";

type ContainerProps = {
  height: string;
  width: string;
  margin: string;
  variantColor: string;
  borderRadius: string;
  backgroundImage?: any;
  backgroundSize?: any;
};

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  background-color: ${({ variantColor }: { variantColor: string }) =>
    variantColor ? variantColor : "#f9f9f9"};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  background-position: center;
  border-radius: ${(props) => props.borderRadius};
  max-width: 100%;
`;

const BannerContainer = ({
  children,
  variantColor,
  height,
  width,
  margin,
  borderRadius,
  backgroundImage,
  backgroundSize,
}: //
{
  children: React.ReactNode;
  variantColor?: string;
  height: string;
  width: string;
  margin?: string;
  borderRadius?: string;
  backgroundImage?: any;
  backgroundSize?: any;
}) => {
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      variantColor={variantColor}
      borderRadius={borderRadius}
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
    >
      {children}
    </Container>
  );
};

export default BannerContainer;
