import React from "react";
import "./Headers.css";
import styles from "./Headers.module.css";

function Headers() {
  const style = {
    color: "red",
    backgroundColor: "#baf3ba",
    fontSize: "50px",
    padding: "10px",
    fontFamily: "sans-serif",
  };
  return (
    <div>
      {/* <h1 style={style}>Styling headers</h1> */}
      <h1 className={styles.classHead}>This is Module CSS</h1>
      <p>This is Inline CSS </p>
    </div>
  );
}

export default Headers;
