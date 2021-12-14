// container that does data fetching and then renders images
// making this image container dynamic
//import { render } from '@testing-library/react';
import React from 'react';
import cardImages from '../../database';
//import Card from './Card';

class CardsContainer extends React.Component {
    // add empty cards array for pushing cards after they are checked
    
    state = {
        cards: [],
        turns: 0
        //setCards: ""
        // turns: 0,
        // clicked: false
    };
    // makeCards function does 3 things:
    // 1. duplicate cards
    // 2. randomize order of cards using sort
    // 3. assign an id to each image - use id in react to output in a list
    
    // handleClick = (e) => {
    //     e.this.shuffleArray()
    // }

    // shuffleArray = () => {
    //     const shuffledArray = this.shuffle(this.state.cards)
    //     this.setState({ shuffledArray})
    // }

    // shuffle = () => {
    //     const imagesArray = [...cardImages, ...cardImages]
    //     imagesArray.sort(() => Math.random() - 0.5)
    //     .map((card) => ({ ...card, id: Math.random() }))
    //     return imagesArray
    // }
    
    // handleClick = (e) => {
    //     this.setState({ shuffledCards: e.target.value })
    // }

    shuffleCards = () => {
        let shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
            this.setState({ cards: shuffledCards })
            return
    }

    // shuffleCards = () => {
    //     let shuffledCards = [...cardImages, ...cardImages]
    //         .sort(() => Math.random() - 0.5)
    //         .map((card) => ({ ...card, id: Math.random() }))

    // shuffleCards = () => {
    //     //shuffly array of images
    //     const shuffledCards = this.shuffle(this.state.cards);
    //     // setting 'shuffledCards' as the new sate
    //     this.setState({ shuffledCards });
    // }

        //setState is a very specific function that will rerender our new state
        // every time we start a new game want to call function of shuffle cards

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
        
    render() {    
        return ( 
            <div className="App">
                <h1>Kitten Memory</h1>
                <button onClick={this.shuffleCards}>Start Game</button>
                 <div className="card-grid">
                     {this.state.cards.map(card => (
                        <div className="card" key={card.id}>
                            <div>
                                <img className="front" src={card.src} alt="card front" />
                                <img className="back" src="./images/Fotolia_86039271_XStopng.png" alt="card back" />
                            </div>
                        </div>  
                ))}               
                </div>
            </div> 
        )
    }
}
export default CardsContainer
    
    
