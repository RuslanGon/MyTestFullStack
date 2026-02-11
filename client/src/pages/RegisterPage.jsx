import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./LoginPage.module.css"; // используем те же стили, что для логина
import { Link } from "react-router-dom";

const registerSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(2, "Too Short!").required("Required"),
});

const RegisterPage = () => {

  const handleSubmit = async (values) => {
    console.log("Register values:", values);
    // сюда можно добавить axios POST на /register
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formContainer}>
          <label>
            Name:
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="span" className={styles.error} />
          </label>

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
            Register
          </button>

          <p className={styles.registerText}>
            Already have an account?{" "}
            <Link to="/login" className={styles.registerLink}>
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
