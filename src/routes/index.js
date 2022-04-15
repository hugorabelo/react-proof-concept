import React from "react";
import { Route, Routes } from "react-router-dom";

import List from '../views/ListEmployees.tsx'
import Edit from '../views/EditEmployee.tsx'
import Add from '../views/AddEmployee.tsx'

const DefaultRoutes = () => {
    return (
        <Routes>
            <Route element={ <List /> } path="/" />
            <Route element={ <Add /> } path="/add" />
            <Route element={ <Edit /> } path="/edit/:id" />
        </Routes>
    )
}

export default DefaultRoutes