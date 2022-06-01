import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import SignScreen from "./Pages/SignScreen.js";
import React from 'react'

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
                            <Route path="/subscriptions/:ID_DO_PLANO" element={<SubscriptionsPlan />}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/users/:ID_DO_USUARIO" element={<Users />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    );
};