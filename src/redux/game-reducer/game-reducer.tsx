import {IAction, IGameReducer} from "./types";
import {types} from "./action-types";

const initialState: IGameReducer = {
    playerOrder: 1,
    roundNumber: 1
}

const gameReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.ROUND_NUMBER_CHANGED : {
            return {
                ...state, roundNumber: action.payload
            }
        }
        case types.PLAYER_ORDER_CHANGED: {
            return {
                ...state, playerOrder: action.payload
            }
        }
        default:
            return state;
    }
}

export default gameReducer;