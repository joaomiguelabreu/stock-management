import React from "react";

// -----------ICONS-------------
import { AiFillDashboard } from "react-icons/ai";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const SideBar = ({ userName }) => {
  const navigate = useNavigate();

  return (
    <div className="w-72 bg-gray-800 text-gray-300 ">
      <div className="flex flex-col ml-5 mr-5 justify-between">
        <div className="flex flex-row items-center gap-1 mt-3 mb-3">
          <div className="bg-blue-400 rounded-full h-10 w-10"></div>
          <div>{userName}</div>
          <div
            onClick={() => {
              localStorage.removeItem("userInfo");
              navigate("/");
            }}
            className="text-2xl cursor-pointer"
          >
            <IoIosLogOut />
          </div>
        </div>

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
