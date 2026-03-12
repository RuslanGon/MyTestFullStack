import { NavLink } from "react-router-dom";
import styles from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsSignedIn, selectAuthUserData } from "../redux/auth/selectors.js";
import { apiLogout } from "../redux/auth/operations.js";


const Layout = ({ children }) => {

  const isSignedIn  = useSelector(selectAuthIsSignedIn)
  const userData = useSelector(selectAuthUserData)

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}`: styles.link;
  };
  // const navigate = useNavigate();
  const dispatch = useDispatch()
 
  const handleLogout = async () => {
    try {
      await dispatch(apiLogout()).unwrap();
      // navigate("/login");
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
          <NavLink to="/contacts" className={getNavLinkClass}>Contacts</NavLink>
          <NavLink to="/products" className={getNavLinkClass}>Products</NavLink>
        </>
      )}
    </div>

    <div className={styles.rightLinks}>
      {isSignedIn ? (
        <>
        <p>Hi, {userData.name}</p>
        <button onClick={handleLogout} className={styles.getNavLinkClassbut}>
          Logout
        </button>
        </>
        
        
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
