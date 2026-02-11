import { NavLink } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}`: styles.link;
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
        <div>
        <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>

          <NavLink to="/students" className={getNavLinkClass}>
            Students
          </NavLink>

          <NavLink to="/add" className={getNavLinkClass}>
            Add Student
          </NavLink>
        </div>

         <div>
         <NavLink to="/login" className={getNavLinkClass}>
            Login
          </NavLink>

          <NavLink to="/register" className={getNavLinkClass}>
            Register
          </NavLink>
         </div>

        </nav>
      </header>

      <main className={styles.content}>
        {children}
      </main>
    </>
  );
};

export default Layout;
