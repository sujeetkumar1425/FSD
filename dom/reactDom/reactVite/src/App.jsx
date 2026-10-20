import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Registration from "./component/Registration";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
