import React from 'react';
import {connect} from "react-redux";
import App from "./App";
import {IStore} from "./redux/types";

interface IMapState {
    readonly livesPlayerOne: number;
    readonly livesPlayerTwo: number;
}

const mapStateToProps = (state:IStore):IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives
    }
};

export type IProps = IMapState;
export const AppContainer = connect(mapStateToProps)(App);
