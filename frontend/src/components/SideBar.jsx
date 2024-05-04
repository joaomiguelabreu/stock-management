import React from "react";
import DropDown from "./global/Dropdown";

// -----------ICONS-------------
import { AiFillDashboard } from "react-icons/ai";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-72 bg-gray-800 text-gray-300 ">
      <div className="flex flex-col ml-5 mr-5 justify-between ">
        <DropDown
          buttonContent={
            <div className="flex flex-row items-center gap-4">
              <div>Nome</div>
              <div className="bg-blue-400 rounded-full h-10 w-10"></div>
            </div>
          }
          dropdownContent={
            <div className="absolute mt-2 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className=" text-sm text-gray-700 dark:text-gray-200">
                <div className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg cursor-pointer transition duration-300 ease-in-out">
                  Logout
                </div>
              </ul>
            </div>
          }
        />

        <div className="flex flex-col gap-3 ">
          <div>
            <Link to={"/DashBoard"}>
              <button className="SideBarButton flex flex-row text-lg p-1 dark:hover:bg-gray-700 rounded-lg w-full ">
                <div className="flex w-full justify-start items-center gap-2 mt-1">
                  <div className="text-xl">
                    <AiFillDashboard />
                  </div>
                  DashBoard
                </div>
              </button>
            </Link>
          </div>

          <div>
            <Link to={"/Stock"}>
              <button className="SideBarButton flex flex-row text-lg p-1 dark:hover:bg-gray-700 rounded-lg w-full ">
                <div className="flex justify-start items-center gap-2">
                  <div className="text-2xl">
                    <GiCardboardBoxClosed />
                  </div>
                  Stock
                </div>
              </button>
            </Link>
          </div>

          <div>
            <button className="SideBarButton flex flex-row text-lg p-1 dark:hover:bg-gray-700 rounded-lg w-full">
              <div className="flex justify-start items-center gap-2">
                <IoBookSharp />
                Histórico
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
