import React from "react";
import Home from "./landingpage/Home";
import Mmorpg from "./search/Mmorpg";
import Shooter from "./search/Shooter";
import Strategy from "./search/Strategy";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";  

export default function AppRoute() {

    return ( <> 
    
    <Router>

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/mmorpg' element={<Mmorpg/>}/>
        <Route path='/shooter' element={<Shooter/>}/>
        <Route path='/strategy' element={<Strategy/>}/>



    </Routes>
    </Router> </>
    )
}