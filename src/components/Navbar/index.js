//sets up the reusable Navbar component
import React from "react";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white text-center sticky-top d-flex justify-content-around">
        <div>
            <h1>Clicky Game</h1>
            <p className="px-2 small font-weight-bold font-italic">Test your memory – don't click twice!</p>
        </div>
        <div>
            <h5>Top Score: {props.topScore}</h5>
            <h3>Score: {props.score}</h3>
        </div>
    </nav>
);

export default Navbar;