import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Students.module.css";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(false);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    async function fetchStudents() {
      try {
        setLoading(true);
        // const { data } = await axios.get( "http://localhost:3001/students");
        const { data } = await axios.get( "https://mytestfullstack.onrender.com/students");
        setStudents(data.data);
      } catch (error) {
        console.log(error);
        SetError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchStudents();
  }, []);

  const deleteUser = async (id) => {
    try {
      // await axios.delete(`http://localhost:3001/students/${id}`);
      await axios.delete(`https://mytestfullstack.onrender.com/students/${id}`);
      // обновляем UI
      setStudents((prev) =>
        prev.filter((student) => student._id !== id)
      );
    } catch (error) {
      console.error(error);
      SetError(true);
    }
  };
  


  const handleClick = () => {
    setQuery(filter);
  };

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
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
              <button type="button" onClick={() => deleteUser(student._id)} className={styles.deleteButton}>Delete</button>
              <Link to={`/edit/${student._id}`} className={styles.link}>Edit</Link>
            </div>
          ))}
        </div>

        <div className={styles.sidebar}>
          <h3>Search student</h3>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter name"
            value={filter}
            onChange={onChange}
          />
          <button onClick={handleClick} className={styles.button}>
            Find by name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;