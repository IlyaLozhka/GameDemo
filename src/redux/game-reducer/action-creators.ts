import {types} from "./action-types";
import { IAction } from "../types";

export const setPlayerOrder = (order: number): IAction => {
    return {
        type: types.SET_PLAYER_ORDER,
        payload: order
    }
};

export const setGameStep = (payload: string): IAction => {
    return {
        type: types.SET_GAME_STEP,
        payload
    }
};

export const roundNumberChanged = (roundNumber: number):IAction => {
    return {
        type: types.ROUND_NUMBER_CHANGED,
        payload: roundNumber
    }
};

export const setSelectionItems = (item:any):IAction => {
    return {
        type: types.SET_SELECTION_ITEM,
        payload: item
    }
};
export const setRoundChange = (payload:boolean):IAction => {
    return {
        type: types.SET_ROUND_CHANGE,
        payload
    }
};
