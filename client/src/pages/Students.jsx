import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Students.module.css";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(false);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  const [showEmpty, setShowEmpty] = useState(false);

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

  // Таймер на 5 секунд для "No students found"
  useEffect(() => {
    if (!loading && students.length === 0) {
      const timer = setTimeout(() => {
        setShowEmpty(true);
      }, 5000);

      return () => clearTimeout(timer); // очистка таймера
    } else {
      setShowEmpty(false);
    }
  }, [loading, students]);

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

          {!loading && filteredStudents.length === 0 && showEmpty && (
            <p className={styles.empty}>No students found</p>
          )}

          {filteredStudents.map((student) => (
            <div key={student._id} className={styles.studentCard}>
              <h2>{student.name}</h2>
              <p>Age: {student.age}</p>
              <span>Gender: {student.gender}</span>
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