//sets up the reusable Navbar component
import React from "react";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top d-flex justify-content-around">
        <h2>Clicky Game</h2>
        <div>
            <h2>Score: 5</h2>
            <h5>Top Score: 8</h5>
        </div>
    </nav>
);

export default Navbar;