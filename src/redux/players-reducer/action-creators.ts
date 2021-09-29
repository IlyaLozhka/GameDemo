import {types} from './action-types'
import {IAction} from "./types";

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

