// we want this to be a class component because we want a controlled state for our form for our input fields
// how do i set up this one input field to be controlled with my state?

import React, { Component } from 'react' 

export default class ScoreForm extends Component {
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

    handleChange = (e) => {
        this.setState({username: e.target.value})
        return 
    }

    handleSubmit = (e) => {
        e.preventDefualt()
        // dispatch my action to addScore

        // then clear out my score
        this.setState({username: ""})
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input id="score-username-input" 
                onChange={this.handleChange} 
                value={this.state.username} 
                type="text" />
                <input type="submit"/>
            </form>
        )
    }
}