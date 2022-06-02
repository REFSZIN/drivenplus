import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./contexts/UserContext";
import SignScreen from "./Pages/SignScreen.js";
import React from 'react'
import SingUp from "./Pages/SingUp";
import Subscriptions from "./Pages/Subscriptions";
import SubscriptionsPlans from "./Pages/SubscriptionsPlans";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import UsersEdit from "./Pages/UsersEdit";

export default function App (){

    const [token, setToken] = useState(0);
    const [user, setUser] = useState();
    const userContext = { user, setUser, token, setToken};

    return (
        <UserContext.Provider value={userContext}>
            <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                            <Route path="/" element={<SignScreen />}/>
                            <Route path="/sign-up" element={<SingUp />}/>
                            <Route path="/subscriptions" element={<Subscriptions />}/>
                            <Route path="/subscriptions/:ID_DO_PLANO" element={<SubscriptionsPlans />}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/users/:ID_DO_USUARIO" element={<Users />}/>
                            <Route path="/users/:ID_DO_USUARIO/update" element={<UsersEdit />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    );
};