import React, { Component } from 'react';
import './css/menu.css'
import Logo from './img/logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <div className="container-menu">
                <div className="menu-left">
                    <img className="img-logo" src={Logo} />
                    <Link to="/" className="menu-text">Home</Link>
                    <Link to="/list" className="menu-text">Listings</Link>
                    <Link to="/blog" className="menu-text">Blog</Link>
                </div>
                <div className="menu-right">

                </div>
            </div>
        );
    }
}

export default App;
