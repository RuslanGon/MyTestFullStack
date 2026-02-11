import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<Students />} />
      <Route path="/add" element={<AddStudent />} />
    </Routes>
  );
}

export default App;
