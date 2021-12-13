// container that does data fetching and then renders images
// making this image container dynamic
//import { render } from '@testing-library/react';
import React from 'react';
import cardImages from '../../database';
import Card from './Card';

class CardsContainer extends React.Component {
    // add empty cards array for pushing cards after they are checked
    cardsArray = [] 
    
    state = {
        cardImages,
        turns: 0,
        clicked: false
    };

    makeCards () {
        // destructuring
        //const cards = cardsObj.cardImages.map(card => < Card key={card.id} image={card.image} /> )
        //const cards = cardsObj.cardImages.map(card => <Card id={card.id} image={card.image} /> )
        const cards = cardsObj.cardImages.map(card => <Card card={card}/>) 
    }
    

    // add onClick to handle function of clicking cards
    handleClick = e => {
        let card = e.target;
        if (card.getAttribute("check") === "found") {
            return
        } 
    
    shuffleCards = () => {
        //shuffly array of images
        const shuffledCards = this.shuffle(this.state.cards);
        // seeting 'shuffledCards' as the new sate
        this.setState({ shuffledCards });
    }

    handleTurns = e => {
        //setting state method to update component's state
        this.setState({ turns: this.state.turns + 1 });
    }

    // need randomizing function for shuffle cards

    //if card match occurs then push to array
        
    }
    //<div className="card" id={`cardImages-${props.id}`}>
    //             <img src={props.image} alt={props.description} className="kitten-avatar"/>
    //         </div>

    // inside of this func b/c of scope we no longer have access to the const cards so jus returning/rendering {cards}
    // won't work. we need to call the function makeCards
    render() {    
        return ( 
            <div id="card-container">
                <div>
                    
                </div>
                {this.makeCards}
            </div>
        )
    }
}
export default CardsContainer;
    

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
    
