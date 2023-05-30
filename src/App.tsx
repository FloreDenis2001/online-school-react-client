import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import LoginProvider from './context/LoginProvider';
import SingUp from './components/SingUp';
import PrivateRoutes from './components/PrivateRoutes';

function App() {


  return (
    <div className="App">


      <BrowserRouter>
        <LoginProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/home/:studentId" element={<Home/>}/>
              <Route path="/singup" element={<SingUp />} />
            </Route>
              <Route path='/login' element={<Login />} />
             
          </Routes>
        </LoginProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
