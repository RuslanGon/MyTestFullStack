import React, { useEffect } from 'react'
import styles from "./Students.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectContactsError, selectContactsLoading } from '../redux/contacts/selectors.js'
import { apiRequestContacts } from '../redux/contacts/operations.js'

const ContactsPage = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const loading = useSelector(selectContactsLoading)
  const error = useSelector(selectContactsError)

useEffect(() => {
  dispatch(apiRequestContacts())
  console.log(apiRequestContacts);
}, [dispatch])  

  return (
    <div className={styles.page}>
    <h1 className={styles.title}>Contacts</h1>
    {loading && <Loader />}
        {error && <Error />}
    <div className={styles.container}>
      <div className={styles.list}>
       
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
    </div>
  </div>
  )
}

export default ContactsPage