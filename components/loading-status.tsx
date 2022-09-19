import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";

const Circlesize = styled.div<Circlesize>`
  //https://stackoverflow.com/questions/61416564/emotion-js-and-typescript-problems-when-passing-props-to-styled
  position: absolute;
  width: ${({ size }: { size: string }) => size};
  height: ${({ size }: { size: string }) => size};
  top: calc(50% - ${({ size }: { size: string }) => size} / 2);
  left: calc(50% - ${({ size }: { size: string }) => size} / 2);
  border: 4px solid transparent;
  border-left: 4px solid
    ${({ spinnercolor }: { spinnercolor: string }) => spinnercolor};
  border-right: 4px solid
    ${({ spinnercolor }: { spinnercolor: string }) => spinnercolor};
  border-radius: 50%;
  animation: spinner2 650ms linear infinite;

  @keyframes spinner2 {
    to {
      transform: rotate(360deg);
    }
  }
`;

const styles = {
  container: css({
    marginTop: "7rem",
    marginBottom: "7rem",
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    placeItems: "center",
    gap: "7rem",
    "@media (min-width: 600px)": {
      gridTemplateRows: "repeat(2, auto)",
      gridTemplateColumns: "repeat(3, auto)",
    },
  }),
  spinner: css`
    --animation-duration: 650ms;
    position: relative;
    width: 75px;
    height: 75px;
  `,
};
const LoadingStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <Circlesize size="75px" spinnercolor="#eedd99"></Circlesize>
        <Circlesize size="50px" spinnercolor="#eec290"></Circlesize>
        <Circlesize size="35px" spinnercolor="#eeaa88"></Circlesize>
      </div>
    </div>
  );
};

export default LoadingStatus;
