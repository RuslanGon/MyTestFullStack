import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apiRequestStudentById, apiRequestEditStudent } from "../redux/students/operations";
import { selectLoading, selectError, selectCurrentStudent } from "../redux/students/selectors";
import Loader from "../components/Loader";
import Error from "../components/Error";
import styles from "./AddStudent.module.css"; // <- подключаем стили

const studentSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  age: Yup.number().min(1, "Must be at least 1").required("Required"),
  gender: Yup.string().oneOf(["male", "female", "other"], "Invalid gender").required("Required"),
  avgMark: Yup.number().min(0, "Must be 0 or more").max(12, "Too high").required("Required"),
  onDuty: Yup.boolean()
});

const EditStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const student = useSelector(selectCurrentStudent);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiRequestStudentById(id));
  }, [dispatch, id]);

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(apiRequestEditStudent({ id, updatedData: values })).unwrap();
      actions.resetForm();
      navigate("/students");
    } catch (err) {
      console.error(err);
    }
  };

  if (!student) return <Loader />;

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: student.name || "",
        age: student.age || "",
        gender: student.gender || "male",
        avgMark: student.avgMark || "",
        onDuty: student.onDuty || false
      }}
      validationSchema={studentSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formContainer}>
        <h2>Edit Student</h2>

        {loading && <Loader />}
        {error && <Error message={error} />}

        <label className={styles.label}>
          Name:
          <Field type="text" name="name" placeholder="Student name" className={styles.input} />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </label>

        <label className={styles.label}>
          Age:
          <Field type="number" name="age" placeholder="Age" className={styles.input} />
          <ErrorMessage name="age" component="span" className={styles.error} />
        </label>

        <label className={styles.label}>
          Average Mark:
          <Field type="number" name="avgMark" placeholder="Avg mark" step="0.1" className={styles.input} />
          <ErrorMessage name="avgMark" component="span" className={styles.error} />
        </label>

        <span className={styles.label}>Gender:</span>
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

        <label className={styles.checkboxLabel}>
          <Field type="checkbox" name="onDuty" />
          On Duty
        </label>

        <button type="submit" className={styles.submitButton}>
          Save 👨‍🎓
        </button>
      </Form>
    </Formik>
  );
};

export default EditStudent;