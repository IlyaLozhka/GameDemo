import {IGameReducer} from "./types";
import {types} from "./action-types";
import { gameSteps } from "./constants";
import { IAction } from "../types";

const initialState: IGameReducer = {
    playerOrder: 0,
    roundNumber: 1,
    gameStep: gameSteps.CHOOSE_FIRST_PLAYER
}

const gameReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.ROUND_NUMBER_CHANGED : {
            return {
                ...state, roundNumber: action.payload
            }
        }
        case types.SET_PLAYER_ORDER: {
            return {
                ...state, playerOrder: action.payload
            }
        }
        case types.SET_GAME_TYPE: {
            return {
                ...state, gameStep: action.payload
            }
        }
        default:
            return state;
    }
}

export default gameReducer;