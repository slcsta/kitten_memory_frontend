

import React from 'react';
import { connect } from 'react-redux'; 
import { setScores } from '../../redux/scoreActions';
//import ScoreForm from './ScoreForm';
//import { Switch, Route } from 'react-router-dom'

class ScoresContainer extends React.Component {
    
    componentDidMount(){
        this.props.dispatchSetScores()
    }
     
    render(){
        return (
            <div>
                <h2>All Scores</h2>
                    <div>
                        {this.props.scores.map(score => <p key={score.id}>{score.username} {score.turns}</p>)}
                    </div>
            </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return {
        scores: stateFromStore.scores
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchSetScores: () => dispatch(setScores())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresContainer)