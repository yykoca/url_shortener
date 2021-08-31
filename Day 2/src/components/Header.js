import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


import logo from '../images/url-shortener-logo.svg'

function Header() {
    return (
        <Router>
            <header>
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <i class="fas fa-bars"></i>
                </nav>
            </header>
        </Router>
    )
}

export default Header
