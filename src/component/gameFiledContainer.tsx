import React from 'react';
import {connect} from "react-redux";
import {GameFiled} from './gameFiled';
import {IAction, IStore} from "../redux/players-reducer/types";
import {hitPlayerOne, hitPlayerTwo} from "../redux/players-reducer/action-creators";
import {Dispatch} from "redux";

interface IMapState {
    readonly livesPlayerOne: number
    readonly livesPlayerTwo: number
}

interface IMapDispatch {
    readonly removeLivePointFirstPlayer: (value: number) => void
    readonly removeLivePointSecondPlayer: (value: number) => void
}

const mapStateToProps = (state: IStore): IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives
    }
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatch => {


    return {
        removeLivePointFirstPlayer: (value) => dispatch(hitPlayerOne(value)),
        removeLivePointSecondPlayer: (value) => dispatch(hitPlayerTwo(value))
    }
};

export type IProps = IMapState & IMapDispatch;

export const GameFiledContainer = connect(mapStateToProps, mapDispatchToProps)(GameFiled)