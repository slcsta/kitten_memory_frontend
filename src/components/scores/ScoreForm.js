// we want this to be a class component because we want a controlled state for our form for our input fields
// how do i set up this one input field to be controlled with my state?

import React, { Component } from 'react'; 
import { addScore } from '../../redux/scoreActions';
import { connect } from 'react-redux';

class ScoreForm extends Component {
    // need local state here
    state ={
        username: ""
    }

    // need an event handler here for the submit
    // needs to be an arrow function so that we have
    // the context from where we are defining it rather than where we are calling it
    // a regular function would only give us the context of where we are calling it
    // arrow function binds it to the "this" giving us the context of where it is
    // defined below

    handleChange = e => {
        this.setState({username: e.target.value})
        return 
    }

    handleSubmit = e => {
        e.preventDefualt()
        // dispatch my action to addScore
        this.props.dispatchAddScore(this.state)
        // then clear out my score
        this.setState({username: ""})
    }

    // what do i need to do in my score form to dispatch addScore?

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="score-username-input">Username:</label>
                <input id="score-username-input" 
                onChange={this.handleChange} 
                value={this.state.username} 
                type="text" />
                <input type="submit"/>
            </form>
        )
    }
}

// always want to return an object here that will merge with our props
function mapDispatchToProps(dispatch) {
    return {
      dispatchAddScore: (score) => dispatch(addScore(score)) 
    }
}
// getting access to dispatch here
// so with connect, 1st argument gives me access to state
// 2nd arg gives me access to dispatch
// and both args will return an object that will be merged with my props
export default connect(null, mapDispatchToProps)(ScoreForm)