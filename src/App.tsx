import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import LoginProvider from './context/LoginProvider';

function App() {
  return (
    <div className="App">
    

    <BrowserRouter>
      <LoginProvider>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/add" element={<NewCar />} /> */}
        {/* <Route path="/update/:id" element={<UpdateCar />} /> */}
      </Routes>
      </LoginProvider>
    </BrowserRouter>

   
    </div>
  );
}

export default App;
