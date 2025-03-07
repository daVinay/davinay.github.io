import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/My-logo.ico';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img src={logo} alt="logo"/>
                <h1>
                    <Link smooth to="/#start" className="h1_links">
                        Vinay Dahiya
                    </Link>
                </h1>
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail">
                    {' '}
                    vin.dahiya@gmail.com{' '}
                </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items">
                        <Link smooth to="/#about" className="links">
                            About
                        </Link>
                    </li>
                    <li className="sidebar-nav-items">
                        <Link smooth to="/#education" className="links">
                            Education
                        </Link>
                    </li>
                    <li className="sidebar-nav-items">
                        <Link smooth to="/#interest" className="links">
                            Interest
                        </Link>
                    </li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons">
                            <a
                                href="https://www.linkedin.com/in/vinay-dahiya/"
                                rel="noopener noreferrer"
                                target="_blank"
                                class="fa fas fa-linkedin fa-lg"
                            > </a>
                        </li>
                        <li className="sidebar-nav-icons">
                      
                            <a
                                href="https://github.com/daVinay"
                                rel="noopener noreferrer"
                                target="_blank"
                                class="fa fas fa-github fa-lg"
                            > </a>
                        </li>
                        <li className="sidebar-nav-icons">
                            {' '}
                            <a
                                href="https://twitter.com/vinDahiya"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="fa fas fa-twitter fa-lg"
                            > </a>
                        </li>
                        <li className="sidebar-nav-icons">
                 
                            <a
                                href="mailto:vindahiya@gmail.com"
                                rel="noopener noreferrer"
                                target="_blank"
                                class="fa fas fa-envelope fa-lg"
                            > </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;