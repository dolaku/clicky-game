//sets up the reusable Footer component
import React, { Component } from "react";
import './style.css'

class Footer extends Component {
    render() {
        return (
            <footer class="pt-3 text-white bg-dark">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h4>Donna Kuang</h4>
                    <a class="link-email" href="mailto:dolaku@gmail.com">dolaku@gmail.com</a>
                    <a class="display-4 link-email" href="https://github.com/dolaku" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <p>&copy; Copyright 2019. All Rights Reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;