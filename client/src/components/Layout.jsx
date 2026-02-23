import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import axios from "axios";


const Layout = ({ children }) => {

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}`: styles.link;
  };
  const navigate = useNavigate();
 
  const handleLogout = async () => {
    try {
      // Отправляем POST на сервер
      await axios.post("https://mytestfullstack.onrender.com/auth/logout",
        {},
        { withCredentials: true } 
      );

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Можно показать уведомление пользователю
    }
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
            <button onClick={handleLogout} className={styles.getNavLinkClassbut}>
              Logout
            </button>

            <NavLink to="/login" className={getNavLinkClass}>
              Login
            </NavLink>

            <NavLink to="/register" className={getNavLinkClass}>
              Register
            </NavLink>
          </div>
        </nav>
      </header>

      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout;
