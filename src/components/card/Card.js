// how do i pass props into a functional component?
// with an argument 
import React from 'react'  
import './Card.css'

//functional component
//then we can pass in props at top as card - by destructuring it in cards container
export default function Card({ card, handleChoice, isFlipped }) {
    // const {id, image} = props.card  
    // handle click func for clicking cards - need to add state change to cards container comp
    // inside this function we want to update state inside the cards container
    let handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div className={isFlipped ? "isFlipped" : ""}></div>
            <div>
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

        // <div className="card" id={`cardImages-${id}`}>
        //     <img src={image} alt="" className="kitten-avatar" />
        // </div>
    )
}


