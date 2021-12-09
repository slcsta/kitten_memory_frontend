// we want this to be a class component because we want a controlled state for our form for our input fields
// how do i set up this one input field to be controlled with my state?

import React, { Component } from 'react' 

export default class ScoreForm extends Component {
    // need local state here
    state ={}
    render() {
        return (

            <form>
                <label htmlFor="username">Username:</label>
                <input id="username-input" type="text" />
                <input type="submit"/>
            </form>
        )
    }
}