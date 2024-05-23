import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/homePage";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const authToken = localStorage.getItem("token");
  return (
    <>
      <Provider store={store}>
        <Routes>
          {authToken ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </Provider>
    </>
  );
}

export default App;
