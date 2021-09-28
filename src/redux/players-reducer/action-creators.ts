import {type} from './action-types'
import {IAction} from "./types";

export const hitPlayerOne = (lives: number): IAction => {
    return {type: type.FIRST_PLAYER_HIT, payload: lives}
};
export const hitPlayerTwo = (lives: number) => {
    return {type: type.SECOND_PLAYER_HIT, payload: lives}
};

