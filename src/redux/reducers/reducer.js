// start off by creating a function for our reducer
// can make this an anonymous function but let's leave name of reducer to keep it clear
// create a new case for ADD_SCORE
// first return state and spread state
// this action will come from our action creator and that is dispatched inside the action creator

function reducer(state = {
    scores: [], 
}, action) {
 switch(action.type) {
    case "SET_SCORES":
        console.log("f")

        return {
            ...state,
            scores: action.payload
        };

    case "ADD_SCORE":

        return {
            ...state,
            scores: [...state.scores, action.payload]
        };
    
    // case "SET_CARDS":

    //     return {
    //         ...state,
    //         cards: [...state.cards, action.payload]
    //     };

    // case "SET_TURNS":

    //     return {
    //         ...state,
    //         turns: [...state.turns, action.payload]
    //     };

     default:
         return state;
 }
}

export default reducer;