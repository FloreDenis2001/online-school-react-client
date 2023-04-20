import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/add" element={<NewCar />} /> */}
        {/* <Route path="/update/:id" element={<UpdateCar />} /> */}
      </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
