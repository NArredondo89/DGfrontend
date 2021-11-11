import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import EditHome from './components/pages/EditHome';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/layout" exact component={Layout} />

          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/layout/:id" exact component={Layout} />
          <Route path="/:id" exact component={EditHome} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
