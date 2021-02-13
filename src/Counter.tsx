import React from "react";
import useAnimationFrame from "./useAnimationFrame";

const Counter = (): JSX.Element => {
  const [count, setCount] = React.useState(0);

  useAnimationFrame((deltaTime) => {
    setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
  });

  return <div>{Math.round(count)}</div>;
};

export default Counter;
