import React, { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchStudents() {
      const { data } = await axios.get("http://localhost:3001/students");
      console.log(data);
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
    <div>
      <h1>Get all Students</h1>
      <input type="text" placeholder="enter name" value={filter} onChange={onChange}/>
      <button onClick={handleClick}>Find by name</button>
      {Array.isArray(students) && filteredStudents.map((student) => (
          <ul key={student._id}>
            <li>
              <h2>Name: {student.name}</h2>
              <p>Age: {student.age}</p>
              <span>Gender: {student.gender}</span>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Students;
