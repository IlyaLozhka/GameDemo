import {types} from "./action-types";
import { IAction } from "../types";

export const setPlayerOrder = (order: number): IAction => {
    return {
        type: types.SET_PLAYER_ORDER,
        payload: order
    }
}

export const setGameType = (payload: string): IAction => {
    return {
        type: types.SET_GAME_TYPE,
        payload
    }
}

export const roundNumberChanged = (roundNumber: number):IAction => {
    return {
        type: types.ROUND_NUMBER_CHANGED,
        payload: roundNumber
    }
}
