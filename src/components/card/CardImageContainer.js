// container that does data fetching and then renders images
// making this image container dynamic 
import React from 'react';
import cardsObj from '../../database'
import Card from './Card';

export default function CardImageContainer() {
    // state = {
    //     catImages: [],
    // };
    // for each card, making/invoking a Card component
    // seems random shuffle for assigning images to cards will need to go here or maybe cards created and then they get shuffled?
    // how do i actually give this card my image info?
    const cards = cardsObj.cardImages.map(card => < Card id={card.id} image={card.image} /> )
        return ( 
            <div>
                {cards}
            </div>
        )    
}



    // componentDidMount() {
    //     fetch("https://thatcopy.pw/catapi/rest/")
    //     .then((response) => response.json())
    //     .then((data)) => {
    //         this.setState({
    //             catImages: data.webpurl
    //         })
    //     })
    // }
    

