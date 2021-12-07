// container that does data fetching and then renders images
// making this image container dynamic 
import React from 'react';
import Card from './Card'
import cardsObj from './database'

export default function CardImageContainer() {
    // state = {
    //     catImages: [],
    // };
    // for each card, making/invoking this ToyCard
    // which makes me think the random shuffle for assigning images to cards will need to go here
    const cards = cardsObj.cards.map(card => < Card /> )
        return ( 
            <div>

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
    

