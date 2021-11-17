import React from "react";
import styles from "../styles/Testimonials.module.scss";
import Circle from "./Circle";
import Image from "next/image";

const Testimonials = ({ users }) => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <img
              src={`/img/${user.logo}`}
              width="30px"
              height="30px"
              alt=""
            />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <img
                className={styles.avatar}
                src={`/img/${user.avatar}`}
                alt=""
                width="45px"
                height="45px"
                objectFit="cover"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
