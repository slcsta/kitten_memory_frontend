// start off by creating a function for our reducer
// can make this an anonymous function but let's leave name of reducer to keep it clear
export default function reducer(state = {
    score: [], 
    loading: false
}, action) {
 switch(action.type) {
    case "SET_SCORE":

        return {
            ...state,
            score: action.payload
        };

        case "ADD_SCORE":

        return {
            ...state,
            score: [...state.score, action.payload]

        }

     default:
         return state;
 }
}