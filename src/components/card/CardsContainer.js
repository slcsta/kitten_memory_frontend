// container that does data fetching and then renders images
// making this image container dynamic 

import React from 'react';
import cardsObj from '../../database';
import Card from './Card';

export default function CardsContainer() {
    //cards = [] 
    // state ={
    //     Turns: 0,
    // }
    //function for shuffling cards at start of a new game
    // shuffleCards = () => {
    //     const shuffledCards = [...cardsObj.cardImages, ...cardsObj.cardImages]
    //     .sort(() => Math.random() - 0.5)
    //     .map((card) => ({ ...card, id: Math.random() }))
    //     CardsContainer(shuffledCards)
    // }

    const cards = cardsObj.cardImages.map(card => < Card key={card.id} image={card.image} /> )
        return ( 
            <div>
                <h1>Kitten Memory Game</h1>
                {cards}
            </div>
        )
    }
