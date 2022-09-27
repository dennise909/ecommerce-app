import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";

type CirclesizeProps = {
  size: string;
  spinnercolor: string;
  animationdirection?: string;
};

const spinner2 = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const Circlesize = styled.div<CirclesizeProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: calc(50% - ${(props) => props.size} / 2);
  left: calc(50% - ${(props) => props.size} / 2);
  border: 4px solid transparent;
  border-left: 4px solid ${(props) => props.spinnercolor};
  border-right: 4px solid ${(props) => props.spinnercolor};
  border-radius: 50%;
  animation: ${spinner2} 1500ms linear infinite;
  animation-direction: ${(props) =>
    props.animationdirection ? props.animationdirection : "normal"};
`;

const styles = {
  container: css({
    marginTop: "7rem",
    marginBottom: "7rem",
    display: "grid",
    placeItems: "center",
    gap: "7rem",
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
        <Circlesize
          size="60px"
          spinnercolor="#eec290"
          animationdirection="reverse"
        ></Circlesize>
        <Circlesize size="45px" spinnercolor="#eeaa88"></Circlesize>
      </div>
    </div>
  );
};

export default LoadingStatus;
