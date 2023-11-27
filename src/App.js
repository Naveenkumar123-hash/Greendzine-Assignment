import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./Components/pages/Login/Login"
import Dashboard from "./Components/pages/Dashboard/Dashboard";
import "./App.css"

const App=()=>{
    return(
        <BrowserRouter>
        <div className="app">
             <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
             </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App