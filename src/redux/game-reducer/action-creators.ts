import {types} from "./action-types";
import {IAction} from "./types";

export const playerOrderChanged = (order: number): IAction => {
    return {
        type: types.PLAYER_ORDER_CHANGED,
        payload: order
    }
}

export const roundNumberChanged = (roundNumber: number):IAction => {
    return {
        type: types.ROUND_NUMBER_CHANGED,
        payload: roundNumber
    }
}
