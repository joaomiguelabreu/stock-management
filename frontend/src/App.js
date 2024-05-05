// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stock from "./Pages/Stock";
import DashBoard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { UserProvider } from "./userContext";
import "./input.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>  
          <div className="w-screen h-screen">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Dashboard" element={<DashBoard />} />
              <Route path="/Stock" element={<Stock />} />
            </Routes>
          </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
