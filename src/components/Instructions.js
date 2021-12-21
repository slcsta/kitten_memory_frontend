// Stateless component
// A "page" displaying instructions on how to play game
import React, { Component } from 'react'

class Instructions extends Component {
    render() {
        return (
            <div>
                <h2> How to Play </h2>
                    <div className="instructions">
                    <p>Find all pairs of matching cards in the least amount of turns 
                    possible.</p>

                    <p>Start by clicking on a card to flip it. Next, click on a second 
                    card to find a match. Cards that match will remain flipped. Cards 
                    that don't match will flip back down.</p>

                    <p>Every attempt is counted as a turn. When all matches are found, 
                    the game ends and the player can enter a name to record the score.</p> 

                    <p>To start a new game at any time, click on the "play game" button. 
                    Only fully completed games will have their scores saved as the number
                    of turns taken to match all cards.
                    </p>
                </div>
            </div>
        )
    }
}

export default Instructions