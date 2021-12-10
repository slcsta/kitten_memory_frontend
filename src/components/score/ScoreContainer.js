// this should handle my fetch request to back end for players and times
// once we have our routes set up, can focus on fetch to fetch all the scores, etc.
// this is where we will user our thunk async middleware fetch request
// how can i set up fetch data in score container and 
// render on the page and put it in redux store and then render it

import React from 'react'
import { connect } from 'react-redux' 
import { setScore } from './../../redux/actions/scoreActions'
import ScoreForm from './ScoreForm';

class ScoreContainer extends React.Component {
    
    componentDidMount(){
        this.props.dispatchSetScore()
    }
     
    render(){
        return (
            <div>
                <h2>All Scores</h2>
                <ScoreForm />
                <div>
                    {this.props.score.map(s => <p>{s.username}</p>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return {
        score: stateFromStore.score
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchSetScore: () => dispatch(setScore())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer)