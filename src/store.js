// what do i need from the redux library to create my store?
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// just exporting the return value here and it's just a default so don't need a const but now import in index
export default createStore(reducer, applyMiddleware(thunk)); 
// after this go and define our reducer