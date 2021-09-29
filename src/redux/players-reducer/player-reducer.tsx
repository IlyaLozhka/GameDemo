import {IAction, IPlayerReducer} from "./types";
import {types} from "./action-types";

const initialState: IPlayerReducer = {
    playerOne: {
        lives: 5
    },
    playerTwo: {
        lives: 5
    }
};

const playersReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.FIRST_PLAYER_HIT :{
            return {
                ...state, playerOne: {
                    lives: action.payload
                }
            }
        }
        case types.SECOND_PLAYER_HIT :{
            return {
                ...state, playerTwo: {
                    lives: action.payload
                }
            }
        }
        default: return state;
    }
}

export default playersReducer;