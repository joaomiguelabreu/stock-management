import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import Stock from "./Pages/Stock";
import DashBoard from "./Pages/DashBoard";
import Login from "./Pages/Login"
import "./input.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-full">
        <SideBar />
        <div className="w-screen h-screen">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Stock" element={<Stock />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
