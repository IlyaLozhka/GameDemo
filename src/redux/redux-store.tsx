import { combineReducers, createStore } from "redux";
import playersReducer from "./players-reducer/player-reducer";
import gameReducer from "./game-reducer/game-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    playersReducer: playersReducer,
    gameReducer: gameReducer
});

let store = createStore(reducers, composeWithDevTools());
export default store;