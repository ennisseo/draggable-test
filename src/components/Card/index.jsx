import React from 'react';
import './index.css';
import { Draggable } from 'gsap/all';
import { useEffect } from 'react';
import gsap from 'gsap';

function Card({ backgroundColor, index }) {
    gsap.registerPlugin(Draggable);

    useEffect(() => {
        // Make the card draggable
        Draggable.create(`#draggableCard${index}`, {
            type: 'x,y', // Allow dragging along the x and y axes
            bounds: document.getElementById("draggable-zone"),
            onClick: function () {
                console.log(`${index} clicked`);
            },
        });
    }, [index]);

    const cardStyle = {
        backgroundColor: backgroundColor || 'white', // Use the provided color or default to white
        zIndex: index,
        top: `${index * 35}px`,
    };

    return (
        <div className='card-container' id={`draggableCard${index}`} style={cardStyle}>
            {/* Your card content */}
        </div>
    );
}

export default Card;
