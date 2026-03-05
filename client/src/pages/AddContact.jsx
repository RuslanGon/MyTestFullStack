import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./AddStudent.module.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsError, selectContactsLoading } from "../redux/contacts/selectors.js";
import { apiRequestAddContact } from "../redux/contacts/operations.js";


const initialValues = {
  name: "",
  number: "",
};

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(1, "Must be at least 7").required("Required"),
});

const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const loading = useSelector(selectContactsLoading)
  const error = useSelector(selectContactsError)

  const handleSubmit = async (values, actions) => {
    dispatch(apiRequestAddContact(values));
    actions.resetForm(); 
    navigate("/contacts");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={styles.formContainer}>
        <h2>Add new Contact</h2>
        {loading && <Loader />}
          {error && <Error />}
        <label>
          Name:
          <Field type="text" name="name" placeholder="Student name" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </label>
        <label>
          Number:
          <Field type="text" name="number" placeholder="number" />
          <ErrorMessage name="number" component="span" className={styles.error} />
        </label>
        <button type="submit" className={styles.submitButton}>
          Add contact 👨‍🎓
        </button>
      </Form>
    </Formik>
  );
};

export default AddContact;
