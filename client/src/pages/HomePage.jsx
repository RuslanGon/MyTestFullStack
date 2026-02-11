import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome 👋</h1>

      <nav className={styles.nav}>
        <NavLink to="/students"
          className={({ isActive }) =>isActive ? `${styles.link} ${styles.active}`: styles.link } >
          Students
        </NavLink>

        <NavLink
          to="/add"className={({ isActive }) =>isActive? `${styles.link} ${styles.active}`: styles.link} >
          Add Student
        </NavLink>
      </nav>
    </div>
  );
};

export default HomePage;
