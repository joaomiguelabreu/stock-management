import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Stock from './Pages/Stock';
import DashBoard from './Pages/DashBoard';
import './input.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col ml-64 w-full">
          <NavBar />
          <Routes>
            {/* Make sure the paths match the actual paths of your components */}
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Stock" element={<Stock />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
