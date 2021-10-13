import counterReduucer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReduucer, 
    isLogged: loggedReducer
})

export default allReducers;