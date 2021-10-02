import {connect} from "react-redux";
import {Modal} from "./Modal";
import {Dispatch} from "redux";
import {
    addItemFirstPlayer,
    addItemSecondPlayer,
    hitPlayerOne,
    hitPlayerTwo, removeItemFirstPlayer, removeItemSecondPlayer
} from "../../redux/players-reducer/action-creators";
import { IStore } from "../../redux/types";


interface IMapDispatch {
    readonly removeLivePointFirstPlayer: (value: number) => void;
    readonly removeLivePointSecondPlayer: (value: number) => void;
    readonly addItemFirstPlayer: (value: any) => void;
    readonly addItemSecondPlayer: (value: any) => void;
    readonly removeItemSecondPlayer: () => void;
    readonly removeItemFirstPlayer: () => void;
}

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

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatch => {
    return {
        removeLivePointFirstPlayer: (value) => dispatch(hitPlayerOne(value)),
        removeLivePointSecondPlayer: (value) => dispatch(hitPlayerTwo(value)),
        addItemFirstPlayer: (value) => dispatch(addItemFirstPlayer(value)),
        addItemSecondPlayer: (value) => dispatch(addItemSecondPlayer(value)),
        removeItemSecondPlayer: () => dispatch(removeItemSecondPlayer()),
        removeItemFirstPlayer: () => dispatch(removeItemFirstPlayer()),
    }
};

export type IProps = IMapDispatch & IMapState;
export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);