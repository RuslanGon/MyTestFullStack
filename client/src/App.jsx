import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout.jsx";
import EditStudent from "./pages/EditStudent.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import AddContact from "./pages/AddContact.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={ <PrivateRoute> <Students /> </PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute> <AddStudent /> </PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute> <EditStudent /> </PrivateRoute>} />
        <Route path="/contacts" element={<PrivateRoute> <ContactsPage /> </PrivateRoute>} />
        <Route path="/addcontact" element={<PrivateRoute> <AddContact /> </PrivateRoute>} />
        <Route path="/login" element={<RestrictedRoute>  <LoginPage /> </RestrictedRoute> } />
        <Route path="/register" element={<RestrictedRoute> <RegisterPage /> </RestrictedRoute>} />
      </Routes>
    </Layout>
  );
}

export default App;
