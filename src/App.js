import React, { useState } from 'react';
import Navbar from '../src/components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import EditHome from './pages/EditHome';
import EditLayout from './pages/EditLayout';
// import EditSideBar from './components/EditInformation/EditSideBar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <EditSideBar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/layout" exact element={<Layout />} />
          <Route path="/layout/:id" exact element={<Layout />} />

          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />

          <Route path="/course/:id/" exact element={<EditHome />} />
          <Route path="/layout/:id/edit" exact element={<EditLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
