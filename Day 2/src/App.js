import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';


import logo from './images/url-shortener-logo.svg';


function App() {
  return (
    <Router>
      <header>
        <section>
          <img src={logo} alt="logo" />
        </section>
        <nav>
          <ul>
            <li><Link to="/" className="noTextDecoration">Home</Link></li>
            <li><Link to="/contact" className="noTextDecoration">Contact</Link></li>
            <li><Link to="/about" className="noTextDecoration">About</Link></li>
            <li><Link to="/login" className="noTextDecoration">Login</Link></li>
          </ul>
          <i class="fas fa-bars"></i>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
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
