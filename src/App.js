import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../src/components/Navbar';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Products from './pages/Products';
import Register from './pages/register';
import Login from './pages/Login';
import EditHome from './pages/EditHome';
import EditLayout from './pages/EditLayout';
import EditHole from './pages/EditHole';

import { useRecoilState } from 'recoil';
import { userState } from './recoil/atoms';

function App() {
  const user = useRecoilState(userState);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/layout" exact element={<Layout />} />
          <Route path="/layout/:id" exact element={<Layout />} />

          <Route path="/products" exact element={<Products />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          {user && (
            <>
              <Route path="/course/:id/" exact element={<EditHome />} />
              <Route path="/layout/:id/edit" exact element={<EditLayout />} />
              <Route path="/hole" exact element={<EditHole />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
