// main logic of the game
// images for cards
// sorting for cards at start of the game
// all the click events for the cards

// user clicks on 1st card
// flip card
// leave card flipped
// user clicks on second card
// flip card
// check card images - if 1st card same as 2nd card image, leave cards flipped
// if images are different, flip both cards back over 
// repeat until no more cards left to be flipped

// use one card and dynamically populate our cards
// how do i pass props into a functional component?
// with an argument 

import React from 'react'  

// right now this is a functional component
// so we pass props in as an argument
export default function Card(props) {

    // shuffle cards function - not sure this is shuffle function i want to use
    // const shuffleCards = () => {
    //     const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5)
    //     .map((card) => ({ ...card, id: Math.random() }))
    // }
    return (
        <div clasName="card" id={`cardImages-${props.id}`}>
            <img src={props.image}/>
        </div>
    )
}

// let cardObj = {
//     "cardImages": [
//         {
//             "id": 1,
//             "image": "https://cattime.com/assets/uploads/2012/05/socializing-kitten-e1565291146113.jpg",
//         },