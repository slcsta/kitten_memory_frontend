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
            this.setState({ turns: 0 })
            return
    }

    //compare two selected cards to see if they match
    isMatching = (card1, card2) => {
        if (card1.getAttribute("name") === card2.getAttribute("name")) {
            
        }
        return true
    }
        else{
            return false
        }
    }

    // card choice for two selections
    handleChoice = (card) => {
        // if choiceOne ? is null, it will evaluate to false and we will set choice 2
        // if choiceOne ? is not null, it will evaluate to true and we will set choice 1
        this.state.choiceOne ? this.setState({ choiceTwo: card}) : this.setState({ choiceOne: card })
        // if it already has a value, we've already selected choice 1
        // if it doesn't yet have a value, we haven't yet selected choice 1

    }

    // reset choices if no match & increase turns
    resetTurn = () => {
        this.setState({ choiceTwo: null})
        this.setState({ choiceOne: null })
        this.setState(prevTurns => prevTurns + 1)
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
    //below i will pass in a prop of handleChoic to the Card component
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
                            card={card} 
                            handleChoice={this.handleChoice}
                        />
                ))}               
                </div>
            </div> 
        )
    }
}
export default CardsContainer
    
    
