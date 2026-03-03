import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError, selectAuthLoading } from "../redux/auth/selectors.js";
import { apiLogin } from "../redux/auth/operations.js";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(2, "Too Short!").required("Required"),
});

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loading = useSelector(selectAuthLoading)
  const error = useSelector(selectAuthError)

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(apiLogin(values)).unwrap(); 
      actions.resetForm();
      navigate("/students");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {loading && <Loader />}
      {error && <Error message={error} />}
      
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formContainer}>
          <label>
            Email:
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="span" className={styles.error} />
          </label>

          <label>
            Password:
            <Field type="password" name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="span" className={styles.error} />
          </label>

          <button type="submit" className={styles.submitButton}>
            Login
          </button>

          <p className={styles.registerText}>
            Don't have an account?{" "}
            <Link to="/register" className={styles.registerLink}>
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;