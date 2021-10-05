import {types} from './action-types';
import {IAction} from "../types";

export const setLivesFirstPlayer = (lives: number): IAction => {
    return {
        type: types.SET_LIVES_FIRST_PLAYER,
        payload: lives
    }
};

export const setLivesSecondPlayer = (lives: number) => {
    return {
        type: types.SET_LIVES_SECOND_PLAYER,
        payload: lives
    }
};

export const addItemFirstPlayer = (item: any) => {
    return {
        type: types.FIRST_PLAYER_ADD_ITEM,
        payload: item
    }
};

export const addItemSecondPlayer = (item: any) => {
    return {
        type: types.SECOND_PLAYER_ADD_ITEM,
        payload: item
    }
};

export const removeItemFirstPlayer = () => {
    return {
        type: types.FIRST_PLAYER_REMOVE_ITEM,
    }
};

export const removeItemSecondPlayer = () => {
    return {
        type: types.SECOND_PLAYER_REMOVE_ITEM,
    }
};

export const setEtherFirstPlayer = (ether: number): IAction => {
    return {
        type: types.SET_ETHER_FIRST_PLAYER,
        payload: ether
    }
};

export const setEtherSecondPlayer = (ether: number): IAction => {
    return {
        type: types.SET_ETHER_SECOND_PLAYER,
        payload: ether
    }
};
