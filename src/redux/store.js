// what do i need from the redux library to create my store?
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
// just exporting the return value here and it's just a default so don't need a const but now import in index
// and we will pass it as a prop to our provider
export default createStore(reducer, applyMiddleware(thunk)); 
// after this go and define our reducer