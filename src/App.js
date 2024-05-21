import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/homePage";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
