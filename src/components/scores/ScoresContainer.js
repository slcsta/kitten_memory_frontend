// this should handle my fetch request to back end for players and times
// once we have our routes set up, can focus on fetch to fetch all the scores, etc.
// this is where we will user our thunk async middleware fetch request
// how can i set up fetch data in score container and 
// render on the page and put it in redux store and then render it

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