import React from 'react';
import {connect} from "react-redux";
import {GameFiled} from './gameFiled';
import {IStore} from "../redux/players-reducer/types";

interface IMapState {
    readonly livesPlayerOne: number
    readonly livesPlayerTwo: number
}

const mapStateToProps = (state: IStore): IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives
    }

};

export type IProps =  IMapState;

export const GameFiledContainer = connect(mapStateToProps)(GameFiled)