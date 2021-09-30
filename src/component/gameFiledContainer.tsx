import {connect} from "react-redux";
import {GameFiled} from './gameFiled';
import {IStore} from "../redux/players-reducer/types";
import {
    addItemFirstPlayer,
    addItemSecondPlayer,
    hitPlayerOne,
    hitPlayerTwo, removeItemFirstPlayer, removeItemSecondPlayer
} from "../redux/players-reducer/action-creators";
import {Dispatch} from "redux";

interface IMapState {
    readonly livesPlayerOne: number;
    readonly livesPlayerTwo: number;
    readonly itemsPlayerOne: ReadonlyArray<any>;
    readonly itemsPlayerTwo: ReadonlyArray<any>;
}

interface IMapDispatch {
    readonly removeLivePointFirstPlayer: (value: number) => void;
    readonly removeLivePointSecondPlayer: (value: number) => void;
    readonly addItemFirstPlayer: (value: any) => void;
    readonly addItemSecondPlayer: (value: any) => void;
    readonly removeItemSecondPlayer: () => void;
    readonly removeItemFirstPlayer: () => void;
}

const mapStateToProps = (state: IStore): IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives,
        itemsPlayerOne: state.playersReducer.playerOne.itemArray,
        itemsPlayerTwo: state.playersReducer.playerTwo.itemArray,
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

export type IProps = IMapState & IMapDispatch;
export const GameFiledContainer = connect(mapStateToProps, mapDispatchToProps)(GameFiled);