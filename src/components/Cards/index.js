//sets up the reusable Cards component
import React from "react";
import './style.css'

const Cards = (props) => (
    <img 
        className="thumbnail" 
        src={props.image}
        alt={props.id}
        key={props.id}
        id={props.id}
        onClick={props.handleClick}
    />
);
    


export default Cards;