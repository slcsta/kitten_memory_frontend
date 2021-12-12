// container that does data fetching and then renders images
// making this image container dynamic 

import React, { Component } from 'react';
import cardsObj from '../../database';
import Card from './Card';

class CardsContainer extends Component {
    // for each card, making/invoking a Card component
    
    // empty array for all cards
    cards = [] 
    
    state ={
        turns: 0
    }

    //function for shuffling cards at start of a new game
    shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

            //setCards(shuffledCards)
    
    //    }

    
    const cards = cardsObj.cardImages.map(card => < Card key={card.id} image={card.image} /> )
        
    render(){
        return ( 
            <div>
                <h1>Kitten Memory Game</h1>
                <button onClick={shuffleCards}>New Game</button>
                {cards}
            </div>
        )    
    }
}

export default CardsContainer

