import React from "react";
import { Route, Routes } from "react-router-dom";

import List from '../views/ListEmployees'

const DefaultRoutes = () => {
    return (
        <Routes>
            <Route element={ <List /> } path="/" />
        </Routes>
    )
}

export default DefaultRoutes