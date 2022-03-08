// what do i need from the redux library to create my store?
// thunk allows my action creators to return a function 
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
// just exporting the return value here and it's just a default so don't need a const but now import in index
// and we will pass it as a prop to our provider
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) 
// after this go and define our reducer