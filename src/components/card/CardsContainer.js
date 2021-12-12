// container that does data fetching and then renders images
// making this image container dynamic 

import { render } from '@testing-library/react';
import React from 'react';
import cardImages from '../../database';
//import Card from './Card';

class CardsContainer extends React.Component () {
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
    //const cards = cardsObj.cardImages.map(card => < Card key={card.id} image={card.image} /> )
    render() {    
        return ( 
            <div className="card" >
                {cardImages
                .sort(() => Math.random() - 0.5)
                .map((element) => {
                    return (
                        <div
                            className="image card-backside"
                            name={element.name}
                            style={{ background: `url(${element.pic})` }}
                            check="false"
                            onclick={this.handleClick}
                        />
                    )
                })}
            </div>
        )
    }
}
export default CardsContainer;
