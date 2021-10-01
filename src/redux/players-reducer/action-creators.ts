import {types} from './action-types';
import {IAction} from "../types";

export const hitPlayerOne = (lives: number): IAction => {
    return {
        type: types.FIRST_PLAYER_HIT,
        payload: lives
    }
};
export const hitPlayerTwo = (lives: number) => {
    return {
        type: types.SECOND_PLAYER_HIT,
        payload: lives
    }
};

export const addItemFirstPlayer = (item: any) => {
    return {
        type: types.FIRST_PLAYER_ADD_ITEM,
        payload: item
    }
}
export const addItemSecondPlayer = (item: any) => {
    return {
        type: types.SECOND_PLAYER_ADD_ITEM,
        payload: item
    }
}
export const removeItemFirstPlayer = () => {
    return {
        type: types.FIRST_PLAYER_REMOVE_ITEM,
    }
}
export const removeItemSecondPlayer = () => {
    return {
        type: types.SECOND_PLAYER_REMOVE_ITEM,
    }
}
