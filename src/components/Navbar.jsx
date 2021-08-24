import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <nav className="p-3 d-flex">
            <Link className="navbar-brand" to="/">
                <img src="/assets/icon/logo.svg" alt="" />
                <span className="ms-3 text-dark fw-bold">Best Currency Converter</span>
            </Link>

            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-link text-dark">Home</Link></li>
                <li className="nav-item"><Link to="/convert" className="nav-link text-dark">Convert</Link></li>
                <li className="nav-item"><Link to="*" className="nav-link text-dark">Settings</Link></li>
                <li className="nav-item"><Link to="*" className="nav-link text-dark">Contact Us</Link></li>
                <li className="nav-item"><Link to="*" className="nav-link text-dark">More</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;