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
          <Route path="/edit" exact component={EditHome} />

          <Route path="/layout" component={Layout} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
