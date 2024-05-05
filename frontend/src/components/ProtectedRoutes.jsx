// import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../userContext";

const ProtectedRoutes = () => {
    const { user } = useUser();
    console.log(user)

  return user  ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
