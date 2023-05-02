import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from '../components/Detail';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../pages/Home';
import Main from '../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/:id" element={<Detail />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router