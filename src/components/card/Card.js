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

// right now this is a functional component
// so we pass props in as an argument
export default function Card(props) {
        
    return (
        <div className="card" id={`cardImages-${props.id}`}>
            <img src={props.image} alt={props.description} className="kitten-avatar"/>
        </div>
    )
}

// let cardObj = {
//     "cardImages": [
//         {
//             "id": 1,
//             "image": "https://cattime.com/assets/uploads/2012/05/socializing-kitten-e1565291146113.jpg",
//         },