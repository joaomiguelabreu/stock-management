import React from "react";
import WhiteContainer from "../components/global/WhiteContainer";
import { useEffect } from "react";

const DashBoard = ({ css }) => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/Dashboard");
  //   }
  // }, [history]);

  return (
    <div className="flex flex-col bg-purple-400 h-screen">
      <div className="flex justify-center">
        <WhiteContainer info={<div>"gsrgseges"</div>} />
      </div>
    </div>
  );
};

export default DashBoard;
