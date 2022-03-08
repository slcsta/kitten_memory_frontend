// Stateless component
// A "page" displaying instructions on how to play game
import React, { Component } from 'react'

class Instructions extends Component {
    render() {
        return (
            <div className="container-fluid homepage-bgimage">
                <div className="instructions">
                    <h3> Instructions </h3>

                    <p>Find all pairs of matching cards in the least number of turns possible.</p>

                    <p>For each turn, click on a card to flip it and then a second card to find a match. 
                        Non-matches will flip back down. The game ends when all matches are found.</p>

                    <p>At the end of every completed game, players have the option to record 
                        their score. Restart a new game at any time with the "Restart Game" button.
                    </p>
                </div>
            </div>
        )
    }
}

export default Instructions