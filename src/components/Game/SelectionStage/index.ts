import {connect} from "react-redux";
import {SelectionStage} from "./SelectionStage";
import {IStore} from "../../../redux/types";
import {addItemFirstPlayer, addItemSecondPlayer} from "../../../redux/players-reducer/action-creators";
import {Dispatch} from "redux";
import {
    roundNumberChanged,
    setGameStep,
    setPlayerOrder, setRoundChange,
    setSelectionItem
} from "../../../redux/game-reducer/action-creators";

interface IMapState {
    readonly playerOrder: number;
    readonly roundNumber: number;
    readonly selectionItem: any;
    readonly firstPlayerItem: any;
    readonly secondPlayerItem: any;
    readonly needToChangeRound: boolean;
}

function mapStateToProps(state: IStore): IMapState {
    const {playerOrder, roundNumber, selectionItem, needToChangeRound} = state.gameReducer;

    return {
        playerOrder, roundNumber, selectionItem, needToChangeRound,
        firstPlayerItem: state.playersReducer.playerOne.itemArray.length,
        secondPlayerItem: state.playersReducer.playerTwo.itemArray.length
    }
}

interface IMapDispatch {
    readonly setSelectedItemFirstPlayer: (value: any) => void;
    readonly setSelectedItemSecondPlayer: (value: any) => void;
    readonly setSelectionItem: (value: any) => void;
    readonly setPlayerOrder: (value: number) => void;
    readonly roundNumberChanged: (value: number) => void;
    readonly setGameStep: (value: any) => void;
    readonly setRoundChange: (value: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatch => {
    return {
        setSelectedItemFirstPlayer: (value: any) => dispatch(addItemFirstPlayer(value)),
        setSelectedItemSecondPlayer: (value: any) => dispatch(addItemSecondPlayer(value)),
        setSelectionItem: (value: any) => dispatch(setSelectionItem(value)),
        setPlayerOrder: (value: number) => dispatch(setPlayerOrder(value)),
        roundNumberChanged: (value: number) => dispatch(roundNumberChanged(value)),
        setGameStep: (value: any) => dispatch(setGameStep(value)),
        setRoundChange: (value: boolean) => dispatch(setRoundChange(value))
    }
}

export type IProps = IMapState & IMapDispatch;
export const SelectionStageContainer = connect(mapStateToProps, mapDispatchToProps)(SelectionStage);