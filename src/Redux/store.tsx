import { combineReducers, createStore } from "redux";
import playersReducer from "./players-reducer";

let reducers = combineReducers({
    players: playersReducer
});

let store = createStore(reducers);

export default store;