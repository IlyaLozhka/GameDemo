import {type} from './action-types'

export const hitPlayerOne = (payload: any) => {
    return {type: type.SECOND_PLAYER_HIT, payload}
};
export const hitPlayerTwo = (payload: any) => {
    return {type: type.FIRST_PLAYER_HIT, payload}
};

