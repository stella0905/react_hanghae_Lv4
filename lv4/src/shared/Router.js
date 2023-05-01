import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from '../components/Detail';
import Home from '../pages/Home';
import Main from '../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router