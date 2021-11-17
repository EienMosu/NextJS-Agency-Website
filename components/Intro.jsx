import React from "react";
import Image from "next/image";
// SASS
import styles from "../styles/Intro.module.scss";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segment s and target the right people for messages based
          on their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <img
          alt=""
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Intro;
