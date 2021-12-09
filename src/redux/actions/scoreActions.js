//function that takes in all the players and scores
// want to return an object that returns a type of object that had a type of set player and payload of our player
// how we write our action creator w/out thunk
// instead of returning this object directly:{type: "SET_SCORE", payload: score }
// instead we will return a function that calls dispatch as a function
// gives me access to dispatch w/in my action creators

export const setScore = () => { 
    return (dispatch) => {
        // now it's a callback so i can put any async funciton in here so this is where i want to put my fetch request
        fetch("http://localhost:3000/scores")
        .then(r => r.json())
        .then(score => dispatch({type: "SET_SCORE", payload: score}))

    }

}

// add score via a form and allow score to have a name
// action creators always functions
// async logic to add a score
// here I am sending a post request and will utilize thunk and return a function


export const addScore = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/score")
    }

}
    
    