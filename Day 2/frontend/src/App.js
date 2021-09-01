import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import AddLink from './components/AddLink';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';


import logo from './images/url-shortener-logo.svg';


function App() {
  const [links, setLinks] = useState(() => {
    const localData = localStorage.getItem('links');
    return localData ? JSON.parse(localData) : [];
  })

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links])

  return (
    <Router>
      <header>
        <section>
          <img src={logo} alt="logo" />
        </section>
        <nav>
          <ul>
            <li><Link to="/add" >+</Link></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/login" >Login</Link></li>
          </ul>
          <i className="fas fa-bars"></i>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home links={links} setLinks={setLinks} />
        </Route>
        <Route path="/add">
          <AddLink links={links} setLinks={setLinks} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
