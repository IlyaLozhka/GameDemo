import { IAction } from "../types";
import { types } from "./action-types";
import { IPlayerReducer } from "./types";

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
					...state.playerOne,
					lives: action.payload
				}
			}
		}
		case types.SECOND_PLAYER_HIT : {
			return {
				...state, playerTwo: {
					...state.playerTwo,
					lives: action.payload
				}
			}
		}
		case types.FIRST_PLAYER_ADD_ITEM : {
			return {
				...state, playerOne: { ...state.playerOne, itemArray: [ ...state.playerOne.itemArray, action.payload ] }
			}
		}
		case types.SECOND_PLAYER_ADD_ITEM : {
			return {
				...state, playerTwo: { ...state.playerTwo, itemArray: [ ...state.playerTwo.itemArray, action.payload ] }
			}
		}
		case types.FIRST_PLAYER_REMOVE_ITEM : {
			return {
				...state,
				playerOne: {
					...state.playerOne,
					itemArray: state.playerOne.itemArray.slice(0, state.playerOne.itemArray.length - 1)
				}
			}
		}
		case types.SECOND_PLAYER_REMOVE_ITEM : {
			return {
				...state,
				playerTwo: {
					...state.playerTwo,
					itemArray: state.playerTwo.itemArray.slice(0, state.playerTwo.itemArray.length - 1)
				}
			}
		}
		default:
			return state;
	}
}

export default playersReducer;