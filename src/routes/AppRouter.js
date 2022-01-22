import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {


  return (
    <div>
      <Routes>
        <Route path="/login" element={<PublicRoute><LoginScreen/> </PublicRoute>}/>
        <Route path="/*"element={<PrivateRoute> <DashBoardRoutes /> </PrivateRoute>}/>
      </Routes>
    </div>
  );
};
