import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import ICardGallery from "./component/ICardGallery";
import ChnageBgColor from "./component/ChnageBgColor";
import ReactUseEffect from "./component/ReactUseEffect";
import Products from "./component/Products";

import Home from "./component/Home"; 
import Login from "./component/Login"; 
import Dashboard from "./component/Dashboard"; 
import Registration from "./component/Registration"; 

 export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/DashBoard' element={<Dashboard />} />
          <Route path='/Registration' element={<Registration />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}


