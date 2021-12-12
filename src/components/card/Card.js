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

// // right now this is a functional component
// // so we pass props in as an argument
// checking if clicked, then animate else not
export default function Card(props) {
        return (
        <div className={"card" + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick(props.id)} >
            <div className="kitten-avatar">
                <img alt={props.name} src={props.image} />
           </div>
            </div>
        )
}
