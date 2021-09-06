import React from 'react';
import './index.css';

function Card({ image, title, description }) {
    return (
        <div className="Card">
            <img src={image} alt="" className="cardImage" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;