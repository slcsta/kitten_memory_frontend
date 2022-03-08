
// filter function search by username
// filtering through our usernames
// input onchange event based on what and when user types




import React from 'react';
import { connect } from 'react-redux'; 
import { setScores } from '../../redux/scoreActions';
//import ScoreForm from './ScoreForm';
//import { Switch, Route } from 'react-router-dom'

class ScoresContainer extends React.Component {

    state ={
        filterScores: this.props.scores
    }

    //extract what user typed and then do filtering

    handleChange = (e) => {
    const filterScores = this.props.scores.filter(score => score.username.startsWith(e.target.value))
        this.setState({filterScores})
    }
    
    componentDidMount(){
        console.log("a")
        this.props.dispatchSetScores()
        console.log("b")
    }
     
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <h2>All Scores</h2>
                    <div>
            
                        {this.state.filterScores.map(score => <p key={score.id}>{score.username} {score.turns}</p>)}
                    
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