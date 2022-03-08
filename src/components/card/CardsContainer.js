
import React from 'react';
import cardImages from '../../database';
import Card from './Card';
import ScoreForm from '../scores/ScoreForm';





class CardsContainer extends React.Component {
    state = {
        cards: [],
        turns: 0,
        choiceOne: null,
        choiceTwo: null,
        gameOver: null
        // clicked: false
    };

    
    
    shuffleCards = () => {
        let shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
            this.setState({ choiceOne: null})
            this.setState({ choiceTwo: null})
            this.setState({ cards: shuffledCards })
            this.setState({ turns: 0 })
            return
    }

    
    handleChoice = (card) => {
        
        this.state.choiceOne ? this.setState({ choiceTwo: card }) : this.setState({ choiceOne: card })
    }

   
    componentDidUpdate () {
        if(this.state.choiceOne && this.state.choiceTwo) {
            if (this.state.choiceOne.src === this.state.choiceTwo.src) {
                this.setState(prevState => ({
                    cards: prevState.cards.map(card => {
                        if (card.src === this.state.choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                }))
                this.resetTurn()
            } else {
    //  console.log('not a match')
                setTimeout(() => this.resetTurn(), 1000)
            }

            }
        }
    
    
    // reset choices if no match & increase turns
    resetTurn = () => {
        this.setState({ choiceTwo: null})
        this.setState({ choiceOne: null })
        this.setState({turns: this.state.turns + 1})
    }

    
    componentDidMount() {
        this.shuffleCards()
    }


    render() {    
        return ( 
            <div className="gameboard">
                <h2>Kitten Memory Game</h2>
                <button onClick={this.shuffleCards}>Restart Game</button>
                <h4>Turns: {this.state.turns}</h4>
                 <div className="card-grid">
                    {this.state.cards.map(card => (
                        <Card 
                            key={card.id} 
                            card={card} 
                            handleChoice={this.handleChoice}
                            flipped={card === this.state.choiceOne || card === this.state.choiceTwo || card.matched}  
                        />
                ))}
                    {this.state.cards.filter(card => card.matched).length >= 12 ? 
                    <ScoreForm turns={this.state.turns}/> : "" }          
                </div>
            </div> 
        )
    }
}
export default CardsContainer



    
    
