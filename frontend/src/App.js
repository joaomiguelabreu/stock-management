import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Stock from "./Pages/Stock";
import DashBoard from "./Pages/DashBoard";
import "./input.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-6 grid-rows-11">
        <div className="row-span-11 bg-blue-500">
          <SideBar />
        </div>
        <div className="col-span-5 bg-red-500">
          <NavBar />
        </div>
        <div className="col-span-5 row-span-10 col-start-2 row-start-2 bg-green-500">
          <Routes>
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Stock" element={<Stock />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
