import React from "react";
import WhiteContainer from "../components/global/WhiteContainer";
import SideBar from "../components/SideBar";
import { useUser } from "../userContext";

const DashBoard = () => {

  const { token } = useUser();
  const userInfo = token ? JSON.parse(token) : null;
  const userName = userInfo ? userInfo.name : "Nome";
  console.log(userName)
  
  return (
    <div className="flex flex-row h-full">
      <SideBar userName={userName}/>
      <div className="flex flex-col bg-purple-400 h-screen w-screen">
        <div className="flex justify-center">
          <WhiteContainer info={<div>"gsrgseges"</div>} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
