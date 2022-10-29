import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const PrivateRoute = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <Routes>
                <Route path={ currentUser ? "/" : "/signup" }/>
            </Routes>
        </div>
    )
}