import React from "react";

// -----------ICONS-------------
import { SiAlpinedotjs } from "react-icons/si";
import { AiFillDashboard } from "react-icons/ai";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="flex flex-col w-full h-full py-4 overflow-y-auto text-white bg-gray-50 dark:bg-gray-800">
          <h1 className="text-4xl flex justify-center m-2">
            <SiAlpinedotjs />
          </h1>

          <div className="flex flex-col ml-5 gap-3">
            <div>
              <button className="SideBarButton flex flex-row text-start">
                <Link to={"/DashBoard"}>
                  <div className="flex w-full justify-start items-center gap-2 mt-1">
                    <AiFillDashboard />
                    DashBoard
                  </div>
                </Link>
              </button>
            </div>

            <div>
              <button className="SideBarButton flex flex-row">
                <Link to={"/Stock"}>
                  <div className="flex justify-start items-center gap-2">
                    <GiCardboardBoxClosed />
                    Stock
                  </div>
                </Link>
              </button>
            </div>

            <div>
              <button className="SideBarButton flex flex-row">
                <div className="flex justify-start items-center gap-2">
                  <IoBookSharp />
                  Histórico
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
