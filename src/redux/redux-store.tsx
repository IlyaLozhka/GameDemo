import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import playersReducer from "./players-reducer/player-reducer";

let reducers = combineReducers({
    playersReducer:playersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;