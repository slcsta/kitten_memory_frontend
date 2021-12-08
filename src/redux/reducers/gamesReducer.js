// start off by creating a function for our reducer
// can make this an anonymous function but let's leave name of reducer to keep it clear
export default function gamesReducer(state = {score: [], loading: false}, action) {
 switch(action.type) {
    case "ADD_SCORE":

        break;

     default:
         return state;
 }
}