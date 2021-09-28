import {IAction, IPlayerReducer} from "./types";
import {type} from "./action-types";

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
        case type.FIRST_PLAYER_HIT :{
            return {
                ...state,
                playerTwo: action.payload
            }
        }
        case type.SECOND_PLAYER_HIT :{
            return {
                ...state,
                playerOne: action.payload
            }
        }
        default: return state;
    }
}

export default playersReducer;