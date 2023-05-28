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
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {


  return (
    <div className="App">


      <BrowserRouter>
        <LoginProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="home/:studentId" element={<Home />} />
            </Route>

            <Route path='/' element={<PublicRoute />}>
              <Route path='login' element={<Login />} />
              <Route path="singup" element={<SingUp />} />
            </Route>
          </Routes>
        </LoginProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
