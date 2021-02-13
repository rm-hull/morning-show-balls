import React from "react";
import Counter from "./Counter";
import styles from "./App.module.css";

const App = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h4>WEBSITES SHOULD BE</h4>
      <h2>MORE LIKE TV SHOWS</h2>
      <Counter />
    </div>
  );
};

export default App;
