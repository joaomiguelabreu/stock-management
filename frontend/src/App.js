import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Stock from "./Pages/Stock";
import DashBoard from "./Pages/DashBoard";
import "./input.css";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <div>
        <NavBar />
        <Routes>
          <Route path="/DashBoard" Component={DashBoard} />
          <Route path="/Stock" Component={Stock} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
