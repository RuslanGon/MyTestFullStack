import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Students.module.css";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchStudents() {
      const { data } = await axios.get("http://localhost:3001/students");
      setStudents(data.data);
    }
    fetchStudents();
  }, []);

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
          {filteredStudents.length === 0 && (
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
          <input className={styles.input} type="text" placeholder="Enter name" value={filter}
            onChange={onChange}/>
          <button onClick={handleClick} className={styles.button}>Find by name </button>
        </div>
      </div>
    </div>
  );
};

export default Students;
