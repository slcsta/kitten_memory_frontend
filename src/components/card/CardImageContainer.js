// container that does data fetching and then renders images
// making this image container dynamic 

import React from 'react';
import cardImages from '../../database';
import Card from './Card';

export default function CardImageContainer() {
    // const [cards, setCards] = useState([])
    state = {
        setCards: [],
        moves: "0"
    }

    // for each card, making/invoking a Card component
    // seems random shuffle for assigning images to cards will need to go here or maybe cards created and then they get shuffled?
    // how do i actually give this card my image info?

    // {this.props.scores.map(score => <p key={score.id}>{score.username}</p>)}

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

            setCards(shuffledCards)
    
        }
    
    // const cards = cardsObj.cardImages.map(card => < Card key={card.id} image={card.image} /> )
    //     return ( 
    //         <div>
    //             {cards}
    //         </div>
    //     )    
}

