//sets up the reusable Navbar component
import React, { Component } from "react";
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top d-flex justify-content-around">
                <h2>Clicky Game</h2>
                <h2>Score: 5 | Top Score: 8</h2>
            </nav>
        );
    }
}

export default Navbar;