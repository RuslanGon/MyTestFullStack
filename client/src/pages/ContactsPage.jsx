import React, { useEffect } from 'react'
import styles from "./Students.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectContactsError, selectContactsLoading } from '../redux/contacts/selectors.js'
import { apiRequestContacts, apiRequestDeleteContactsById } from '../redux/contacts/operations.js'
import Loader from '../components/Loader.jsx';
import Error from '../components/Error.jsx';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const loading = useSelector(selectContactsLoading)
  const error = useSelector(selectContactsError)

useEffect(() => {
  dispatch(apiRequestContacts())
}, [dispatch])  

const deleteUser = async (id) => {
  dispatch(apiRequestDeleteContactsById(id))
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contacts</h1>
      {loading && <Loader />}
      {error && <Error />}
      <div className={styles.actions}>
        <Link to='/addcontact' className={styles.addButton}>Add contact</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.list}>
          {contacts.map((contact) => (
            <div key={contact._id} className={styles.studentCard}>
              <h2>{contact.name}</h2>
              <p>Number: {contact.number}</p>
              <button type="button" onClick={() => deleteUser(contact._id)}
                className={styles.deleteButton} >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactsPage