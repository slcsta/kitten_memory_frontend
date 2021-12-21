// Stateless component
// A "page" displaying instructions on how to play game
import React, { Component } from 'react'

class Instructions extends Component {
    render() {
        return (
            <div>
                <h2> How to Play </h2>
                    <div className="instructions">
                    <p>Find all pairs of matching cards using the least amount of turns.</p>

                    <p>To begin, click on a card to flip it. Click a second card to see 
                    if the two cards match. Matches will remain flipped, but non-matches will flip 
                    back down.</p>

                    <p>Every match attempt is counted as a turn. When all matches are found, the
                    game ends and the player can record their score.</p>

                    <p>To start a new game at any time, click on the "Restart Game" button. 
                    Only fully completed games will record a score.
                    </p>
                </div>
            </div>
        )
    }
}

export default Instructions