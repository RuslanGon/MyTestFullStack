import React, { useEffect, useState } from "react";
import styles from "./Students.module.css";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectStudents } from "../redux/students/selectors.js";
import { apiRequestDeleteStudentById, apiRequestStudents } from "../redux/students/operations.js";

const Students = () => {
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  const dispatsh = useDispatch()
  const students = useSelector(selectStudents)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatsh(apiRequestStudents())
  },[dispatsh])

  const deleteUser = async (id) => {
  dispatsh(apiRequestDeleteStudentById(id))
  };
  
  const handleClick = () => {
    setQuery(filter);
  };

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredStudents = (students || []).filter(
    (student) =>
      student.name?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Students</h1>
      <div className={styles.container}>
        <div className={styles.list}>
          {loading && <Loader />}
          {error && <Error />}
          {filteredStudents.map((student) => (
            <div key={student._id} className={styles.studentCard}>
              <h2>{student.name}</h2>
              <p>Age: {student.age}</p>
              <span>Gender: {student.gender}</span>
              <Link to={`/edit/${student._id}`} className={styles.link}>Edit</Link>
              <button type="button" onClick={() => deleteUser(student._id)} 
              className={styles.deleteButton}>Delete</button>
              
            </div>
          ))}
        </div>

        <div className={styles.sidebar}>
          <h3>Search student</h3>
          <input className={styles.input} type="text" placeholder="Enter name"value={filter}
            onChange={onChange}/>
          <button onClick={handleClick} className={styles.button}> Find by name </button>
        </div>
      </div>
    </div>
  );
};

export default Students;