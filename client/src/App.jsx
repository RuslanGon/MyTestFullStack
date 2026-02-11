import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout.jsx";
import EditStudent from "./pages/EditStudent.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


      </Routes>
    </Layout>
  );
}

export default App;
