import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./AddStudent.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";

const initialValues = {
  name: "",
  age: "",
  gender: "",
  avgMark: "",
  onDuty: false,
};

const studentSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  age: Yup.number().min(1, "Must be at least 1").required("Required"),
  gender: Yup.string().oneOf(["male", "female", "other"], "Invalid gender").required("Required"),
  avgMark: Yup.number().min(0, "Must be 0 or more").max(12, "Too high").required("Required"),
  onDuty: Yup.boolean(),
});

const AddStudent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    try {
      setLoading(true);
      setError(null);
        // const { data } = await axios.post( "http://localhost:3001/students");
      const { data } = await axios.post( "https://mytestfullstack.onrender.com/students", values);
      console.log("Created:", data);
      actions.resetForm();
      navigate("/students")
    } catch (err) {
      console.log(err);
      setError("Failed to create student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={studentSchema}
    >
      <Form className={styles.formContainer}>
        <h2>Add new Student</h2>
        {loading && <Loader />}
          {error && <Error />}

        <label>
          Name:
          <Field type="text" name="name" placeholder="Student name" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </label>

        <label>
          Age:
          <Field type="text" name="age" placeholder="Age" />
          <ErrorMessage name="age" component="span" className={styles.error} />
        </label>

        <label>
          Average Mark:
          <Field type="text" name="avgMark" placeholder="Avg mark" step="0.1" />
          <ErrorMessage
            name="avgMark"
            component="span"
            className={styles.error}
          />
        </label>
        <span>Gender:</span>
        <div className={styles.radioGroup}>
          <label>
            <Field type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="female" />
            Female
          </label>
          <label>
            <Field type="radio" name="gender" value="other" />
            Other
          </label>
        </div>
        <ErrorMessage name="gender" component="span" className={styles.error} />

        <label>
          <Field type="checkbox" name="onDuty" />
          On Duty
        </label>

        <button type="submit" className={styles.submitButton}>
          Create Student 👨‍🎓
        </button>
      </Form>
    </Formik>
  );
};

export default AddStudent;
