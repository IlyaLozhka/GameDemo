import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import playersReducer from "./players-reducer/player-reducer";
import gameReducer from "./game-reducer/game-reducer";

let reducers = combineReducers({
    playersReducer: playersReducer,
    gameReducer: gameReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;