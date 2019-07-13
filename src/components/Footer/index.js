//sets up the reusable Footer component
import React from "react";
import './style.css'

const Footer = () => (
    <footer className="pt-3 text-white bg-dark">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h5><a href="https://dolaku.github.io/" target="_blank" rel="noopener noreferrer">Donna Kuang</a></h5>
            <a className="link-email" href="mailto:dolaku@gmail.com">dolaku@gmail.com</a>
            <a className="display-4 link-email" href="https://github.com/dolaku" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <p className="small">&copy; Copyright 2019. All Rights Reserved.</p>
        </div>
    </footer>
);


export default Footer;