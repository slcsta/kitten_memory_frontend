// add images for cards from db
// make cards within game board
// sort function for cards at start of the game
// all click events for cards go here

// How Does the Game Work?
// user clicks on 1st card - click event
// flip card - on click, card should flip
// leave card flipped
// player clicks on second card - click event
// flip card - on click, card should flip
// check card images - when two click/flip events happen check for a match 
// if 1st card same as 2nd card image, leave cards flipped
// if images are different, flip both cards back over 
// repeat until no more cards left to be flipped
// show a congratulatory message game is done - stop timer
// user can click button to start game over

// use one card and dynamically populate our cards
// how do i pass props into a functional component?
// with an argument 
import React from 'react'  
import './Card.css'
// right now this is a functional component
// so we pass props in as an argument

export default function Card(props) {
    const {id, image} = props.card   
    return (

        <div className="card" key={card.id}>
        <div>
            <img className="card" src={card.src} alt="card front" />
            <img className="card" src="./images/kittylandscapetopng.png" alt="card back" />
        </div>
    </div>  
    
        <div className="card" id={`cardImages-${id}`}>
            <img src={image} alt="" className="kitten-avatar" />
        </div>
        )
            // this code is checking if clicked, then animate else not
         // <div className={"card" + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick(props.id)} >
}
