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
import restapi from './REST-API/rest-api.js'

import logo from './images/url-shortener-logo.svg';


function App() {
  const [links, setLinks] = useState(() => {
    const localData = localStorage.getItem('links');
    return localData ? JSON.parse(localData) : [];
  })

  const [active, setActive] = useState(true);
  const [screenWidth, setScreenWidth] = useState()
  const setActiveFunc = () => {
    setActive(!active);
  }

  useEffect(() => {
    
  }, [screenWidth])

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
    restapi.fetchDataFromLocalServer().then(data => console.log("hier", data));
  }, [links])


  return (
    <Router>
      <header>
        <section>
          <img src={logo} alt="logo" />
        </section>
        <nav>
          <ul className={active ? "active" : ""}>
            <li><Link to="/add" >+</Link></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/login" >Login</Link></li>
          </ul>
          {/* <i className={active ? "fas fa-bars" : "fas fa-bars active"}></i> */}
          <i className={`fas fa-bars ${active ? "" : "active"}`} onClick={setActiveFunc}></i>
          {/* <i className={active ? "fas fa-times active" : "fas fa-times"}></i> */}
          <i className={`fas fa-times ${active ? "active" : ""}`} onClick={setActiveFunc}></i>
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
