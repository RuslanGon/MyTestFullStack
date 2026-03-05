import axios from "axios";

export const requestStudents = async () => {
  const { data } = await axios.get("https://mytestfullstack.onrender.com/students");
  return data;
};

export const requestDeleteUser = async (id) => {
await axios.delete(`https://mytestfullstack.onrender.com/students/${id}`);
}

export const requestAddUser = async (studentData) => {
    const { data } = await axios.post("https://mytestfullstack.onrender.com/students", studentData);
    return data;
  };

export const requestStudentById = async (id) => {
  const { data } = await axios.get(`https://mytestfullstack.onrender.com/students/${id}`);
  return data;
};  

export const requestPatchStudent = async (id, updatedData) => {
    const { data } = await axios.patch(`https://mytestfullstack.onrender.com/students/${id}`,
      updatedData);
    return data;
  };

  export const requestLoginUser = async (loginData) => {
    const { data } = await axios.post( "https://mytestfullstack.onrender.com/auth/login", loginData,
      { withCredentials: true });
    return data;
  };

  export const requestRegisterUser = async (registerData) => {
    const { data } = await axios.post( "https://mytestfullstack.onrender.com/auth/register" ,registerData,
      { withCredentials: true }
    );
    return data;
  };

  export const requestLogout = async () => {
    const { data } = await axios.post("https://mytestfullstack.onrender.com/auth/logout", {},
      { withCredentials: true }
    );
    return data;
  };

  export const requestContacts = async () => {
  const { data } = await axios.get("https://mytestfullstack.onrender.com/contacts");
  return data;
};

export const requestAddContact = async (contactData) => {
const { data } = await axios.post("https://mytestfullstack.onrender.com/contacts", contactData);
return data;
};

export const requestPatchContact = async (id, updatedData) => {
const { data } = await axios.patch(`https://mytestfullstack.onrender.com/contacts/${id}`,
  updatedData);
return data;
};

export const requestDeleteContact = async (id) => {
await axios.delete(`https://mytestfullstack.onrender.com/contacts/${id}`);
}