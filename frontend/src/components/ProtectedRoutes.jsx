import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../userContext";

const ProtectedRoutes = () => {
  const { user } = useUser();


  return user ? <Outlet/> : <Navigate to="/"/>;
};

export default ProtectedRoutes;
