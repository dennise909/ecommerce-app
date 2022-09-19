import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";

type CirclesizeProps = {
  size: string;
  spinnercolor: string;
};

const spinner2 = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const Circlesize = styled.div<CirclesizeProps>`
  //https://stackoverflow.com/questions/61416564/emotion-js-and-typescript-problems-when-passing-props-to-styled
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: calc(50% - ${(props) => props.size} / 2);
  left: calc(50% - ${(props) => props.size} / 2);
  border: 4px solid transparent;
  border-left: 4px solid ${(props) => props.spinnercolor};
  border-right: 4px solid ${(props) => props.spinnercolor};
  border-radius: 50%;
  animation: ${spinner2} 650ms linear infinite;
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
        <Circlesize size="60px" spinnercolor="#eec290"></Circlesize>
        <Circlesize size="45px" spinnercolor="#eeaa88"></Circlesize>
      </div>
    </div>
  );
};

export default LoadingStatus;
