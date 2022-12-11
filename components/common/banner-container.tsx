import React from "react";
import styled from "@emotion/styled";

type ContainerProps = {
  height: string;
  width: string;
  margin: string;
  variantColor: string;
  borderRadius: string;
};

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  background-color: ${({ variantColor }: { variantColor: string }) =>
    variantColor ? variantColor : "#f9f9f9"};
  background-style: var(--background-style);
  border-radius: ${(props) => props.borderRadius};
`;

const BannerContainer = ({
  children,
  variantColor,
  height,
  width,
  margin,
  borderRadius,
}: //
{
  children: React.ReactNode;
  variantColor?: string;
  height: string;
  width: string;
  margin?: string;
  borderRadius?: string;
}) => {
  return (
    <Container
      height={height}
      width={width}
      margin={margin}
      variantColor={variantColor}
      borderRadius={borderRadius}
      style={{
        ["--background-style" as any]:
          "https://unsplash.com/photos/5VkNa1LrS8A",
      }}
    >
      {children}
    </Container>
  );
};

export default BannerContainer;
