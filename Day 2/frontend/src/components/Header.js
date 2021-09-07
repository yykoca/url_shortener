import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import logo from '../images/url-shortener-logo.svg'


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <Router>
            <header>
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <nav>
                   
                        <ul className= {
                            toggleMenu ? 'mobile' : 'desktop'
                        } >
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    
                    <i onClick={toggleNav} className="fas fa-bars"></i>
                </nav>
            </header>
        </Router>
    )
}

export default Header
