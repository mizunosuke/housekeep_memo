import React, { useContext } from "react"
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { Home } from "../components/Home";


export const PrivateRoute = () => {

    const { currentUser } = useContext(AuthContext);
    return currentUser ? (
        <Home/>
    ) : (
        <Navigate to="/signup"/>
    )
}