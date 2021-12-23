
import React from 'react'  
import './Card.css'


export default function Card({ card, handleChoice, flipped }) {
    
    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    className="front"   
                    src={card.src} 
                    alt="card front" />
                <img 
                    className="back" 
                    src="https://cdn.pixabay.com/photo/2019/12/02/04/23/maneki-neko-4666877_1280.jpg"
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>  

        
    )
}


