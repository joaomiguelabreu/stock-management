import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stock from "./Pages/Stock";
import DashBoard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { UserProvider } from "./userContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./input.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="w-screen h-screen">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/Dashboard" element={<DashBoard />} />
              <Route path="/Stock" element={<Stock />} />
            </Route>
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
