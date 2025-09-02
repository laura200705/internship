import { Routes, Route, NavLink } from "react-router-dom";
import Register from "./pages/Register";
import Success from "./pages/Success";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/register" style={{ marginRight: "10px" }}>
          Register
        </NavLink>
        <NavLink to="/success">Success</NavLink>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

