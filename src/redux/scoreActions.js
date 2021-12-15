//function that takes in all the players and scores
// want to return an object that returns a type of object that had a type of set player and payload of our player
// how we write our action creator w/out thunk? we return this object directly:{type: "SET_SCORE", payload: score }
// instead with thunk will return a function that calls dispatch as a function
// gives me access to dispatch w/in my action creators

// get scores
export const setScores = () => { 
    return (dispatch) => {
        // now it's a callback so i can put any async funciton in here so this is where i want to put my fetch request
        fetch("http://localhost:3000/scores")
        .then(r => r.json())
        .then(scores => dispatch({type: "SET_SCORES", payload: scores}))
    }
}


// here I am sending a post request and will utilize thunk and return a function
// comma and then object as an argument b/c i'm sending data to my backend
// need a method as a key to explicityly tell that this object is a post request
// headers telling my backend what i expect to get back
// need to pass in arg of score as my score object
// second then response is where i am dispatching to my store

// add score
export const addScore = (score) => {
    return (dispatch) => {
        console.log()
        fetch("http://localhost:3000/scores", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(score)
        })
        .then(r => r.json())
        .then(score => dispatch({type: "ADD_SCORE", payload: score}))
        //.then(() => {console.log('new score added')})
    }
}
    
    