//sets up the reusable Cards component
import React, { Component } from "react";
import './style.css'

class Cards extends Component {
    render() {
        return (
            <div className="card-container">
                <img className="thumbnail" src="/images/alien.jpg" />
                <img className="thumbnail" src="/images/belle.jpg" />
                <img className="thumbnail" src="/images/genie.jpg" />
                <img className="thumbnail" src="/images/glitch.jpg" />
                <img className="thumbnail" src="/images/jasmine.jpg" />
                <img className="thumbnail" src="/images/lilo.jpg" />
                <img className="thumbnail" src="/images/mickey.jpg" />
                <img className="thumbnail" src="/images/mulan.jpg" />
                <img className="thumbnail" src="/images/ralph.jpg" />
                <img className="thumbnail" src="/images/snowwhite.jpg" />
                <img className="thumbnail" src="/images/stitch.jpg" />
                <img className="thumbnail" src="/images/woody.jpg" />
            </div>
        );
    }
}

export default Cards;