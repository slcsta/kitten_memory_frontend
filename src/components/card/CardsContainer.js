// container that does data fetching and then renders images
// making this image container dynamic
//import { render } from '@testing-library/react';
import React from 'react';
import cardImages from '../../database';
//import Card from './Card';

class CardsContainer extends React.Component {
    // add empty cards array for pushing cards after they are checked
     
    
    state = {
        shuffledCards: [],
        cards: [],
        turns: 0
        //setCards: ""
        // turns: 0,
        // clicked: false
    };
    // makeCards function does 3 things:
    // 1. duplicate cards
    // 2. randomize order of cards using sort
    // 3. assign an id to each image
    handleClick = e => {
        this.setState({shuffledCards: e.target.value})
        return
    }

    makeCards = () => {
        this.shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id: Math.random() }))
        //const cards = cardsObj.cardImages.map(card => <Card id={card.id} image={card.image} /> )
        //const cards = cardsObj.cardImages.map(card => <Card card={card}/>) 
        //b/c just a function have to explicitly returned b/c return value is currently undefined so i will explicitly return cards for now
        //return cards

        //setState is a very specific function 
        //thatn will rerender our new state

        //in this function we will setCards
        //and setTurns
        // every time we start a new game want to call function of makeCards
    }
    

    // add onClick to handle function of clicking cards
    // handleClick = e => {
    //     let card = e.target;
    //     if (card.getAttribute("check") === "found") {
    //         return
    //     } 
    
    // shuffleCards = () => {
    //     //shuffly array of images
    //     const shuffledCards = this.shuffle(this.state.cards);
    //     // seeting 'shuffledCards' as the new sate
    //     this.setState({ shuffledCards });
    // }

    // handleTurns = e => {
    //     //setting state method to update component's state
    //     this.setState({ turns: this.state.turns + 1 });
    // }

    // need randomizing function for shuffle cards

    //if card match occurs then push to array
        
    
    //<div className="card" id={`cardImages-${props.id}`}>
    //             <img src={props.image} alt={props.description} className="kitten-avatar"/>
    //         </div>

    // inside of this func b/c of scope we no longer have access to the const cards so jus returning/rendering {cards}
    // won't work. we need to call the function makeCards
    render() {    
        return ( 
            <div>
                <h1>Kitten Memory</h1>
                <button onClick={this.handleClick}>Start Game</button>

                <div className="container">
                    {this.shuffledCards.map(card => (
                        <div className="card" key={card.id}>
                        <div>
                            <img className="front" src={card.src} alt="card front" />
                            <img className="back" src="/"{card.src} alt="card front" />
                        </div>
                        </div>  
                ))}               
            </div>
            </div> 
        )
    }
}
export default CardsContainer
    

            // state.cardImages.map(card => (
            //     <Card
            //         Clicked={this.state.Clicked}
            //         handleClick={this.handleClick}
            //         id={card.id}
            //         key={card.id}
            //         />
        //     <div className="card" >
        //         {cardImages
        //         .sort(() => Math.random() - 0.5)
        //         .map((element) => {
        //             return (
        //                 <div
        //                     className="image card-backside"
        //                     name={element.name}
        //                     style={{ background: `url(${element.pic})` }}
        //                     check="false"
        //                     onclick={this.handleClick}
        //                 />
        //             )
        //         })}
        //     </div>
    
