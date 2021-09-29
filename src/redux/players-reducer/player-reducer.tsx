import {IAction, IPlayerReducer} from "./types";
import {types} from "./action-types";

const initialState: IPlayerReducer = {
    playerOne: {
        lives: 5,
        itemArray: []
    },
    playerTwo: {
        lives: 5,
        itemArray: []
    }
};

const playersReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.FIRST_PLAYER_HIT : {
            return {
                ...state, playerOne: {
                    lives: action.payload
                }
            }
        }
        case types.SECOND_PLAYER_HIT : {
            return {
                ...state, playerTwo: {
                    lives: action.payload
                }
            }
        }
        case types.FIRST_PLAYER_ADD_ITEM : {
            return {
                ...state, playerOne: {...state.playerOne, itemArray: [...state.playerOne.itemArray, action.payload]}
            }
        }
        case types.SECOND_PLAYER_ADD_ITEM : {
            return {
                ...state, playerTwo: {...state.playerTwo, itemArray: [...state.playerTwo.itemArray, action.payload]}
            }
        }
        default:
            return state;
    }
}

export default playersReducer;