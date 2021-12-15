// container that does data fetching and then renders images
// making this image container dynamic
//import { render } from '@testing-library/react';
import React from 'react';
import cardImages from '../../database';
import Card from './Card';

class CardsContainer extends React.Component {
    // add empty cards array for pushing cards after they are checked
    
    state = {
        cards: [],
        turns: 0,
        choiceOne: null,
        choiceTwo: null
        // clicked: false
    };

    // need to update state here for the clicke event in card comp

    // shufflecard function does 3 things:
    // 1. duplicate cards
    // 2. randomize order of cards using sort
    // 3. assign an id to each image - use id in react to output in a list
    // setState is a very specific function that will rerender our new state
    // every time we start a new game want to call function of shuffle cards
    
    shuffleCards = () => {
        let shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
            this.setState({ cards: shuffledCards })
            return
    }

    handleChoice = (card) => {
        console.log(card)

    }

    // add onClick to handle function of clicking cards
    // handleClick = e => {
    //     let card = e.target;
    //     if (card.getAttribute("check") === "found") {
    //         return
    //     }

    // handleTurns = e => {
    //     //setting state method to update component's state
    //     this.setState({ turns: this.state.turns + 1 });
    // }
    //if card match occurs then push to array
    
    // pass down a prop in the map function so I have access to it in Card component    
    render() {    
        return ( 
            <div className="App">
                <h1>Kitten Memory</h1>
                <button onClick={this.shuffleCards}>Start Game</button>
                 <div className="card-grid">
                    {this.state.cards.map(card => (
                        <Card 
                        key={card.id} 
                        card={card} />
                ))}               
                </div>
            </div> 
        )
    }
}
export default CardsContainer
    
    
