import React from "react";
import styles from "../styles/Contact.module.scss";
import Circle from "../components/Circle";

const contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-50vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input type="text" className={styles.inputS} placeholder="Username" />
        <input
          type="number"
          className={styles.inputS}
          placeholder="Phone Number"
        />
        <input type="email" className={styles.inputL} placeholder="Email" />
        <input type="text" className={styles.inputL} placeholder="Subject" />
        <textarea
          placeholder="Message"
          rows={6}
          className={styles.textArea}
        ></textarea>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default contact;
