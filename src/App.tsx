import React from "react";
import Counter from "./Counter";
import styles from "./App.module.css";
import Sphere from "./Sphere";

const App = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h4>WEBSITES SHOULD BE</h4>
      <h2>MORE LIKE TV SHOWS</h2>
      <Counter />

      <Sphere id="1" x={90} y={90} radius={30} color="#5cabff" />
      <Sphere id="2" x={530} y={90} radius={30} color="#d93c2b" />
      <Sphere id="3" x={610} y={90} radius={30} color="white" />
    </div>
  );
};

export default App;
