//function that takes in all the players and scores
// want to return an object that returns a type of object that had a type of set player and payload of our player
// how we write our action creator w/out thunk

export const setScore = (score) => ({ type: "SET_SCORE", payload: score })
// son no that we have thunk we can set this up 