import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { requestLogout } from "../services/api.js";
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../redux/auth/selectors.js";


const Layout = ({ children }) => {

  const isSignedIn  = useSelector(selectAuthIsSignedIn)

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}`: styles.link;
  };
  const navigate = useNavigate();
 
  const handleLogout = async () => {
    try {
      await requestLogout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
     <header className={styles.header}>
  <nav className={styles.nav}>
    <div className={styles.leftLinks}>
      <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
      {isSignedIn && (
        <>
          <NavLink to="/students" className={getNavLinkClass}>Students</NavLink>
          <NavLink to="/add" className={getNavLinkClass}>Add Student</NavLink>
        </>
      )}
    </div>

    <div className={styles.rightLinks}>
      {isSignedIn ? (
        <button onClick={handleLogout} className={styles.getNavLinkClassbut}>
          Logout
        </button>
      ) : (
        <>
          <NavLink to="/login" className={getNavLinkClass}>Login</NavLink>
          <NavLink to="/register" className={getNavLinkClass}>Register</NavLink>
        </>
      )}
    </div>
  </nav>
</header>

      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout;
