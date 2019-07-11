//sets up the reusable Cards component
import React, { Component } from "react";
import './style.css'

class Cards extends Component {
    render() {
        return (
            <div>
                <img src="/images/alien.jpg" />
                <img src="/images/belle.jpg" />
                <img src="/images/genie.jpg" />
                <img src="/images/glitch.jpg" />
                <img src="/images/jasmine.jpg" />
                <img src="/images/lilo.jpg" />
                <img src="/images/mickey.jpg" />
                <img src="/images/mulan.jpg" />
                <img src="/images/ralph.jpg" />
                <img src="/images/snowwhite.jpg" />
                <img src="/images/stitch.jpg" />
                <img src="/images/woody.jpg" />
            </div>
        );
    }
}

export default Cards;