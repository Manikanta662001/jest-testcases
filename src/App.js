import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const userContext = useGlobalContext();
  const { isLoggedIn } = userContext;
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to={"/dashboard"} /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
