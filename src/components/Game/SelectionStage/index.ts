import {connect} from "react-redux";
import {SelectionStage} from "./SelectionStage";
import { IItemType, IStore } from "../../../redux/types";
import {
    addItemFirstPlayer,
    addItemSecondPlayer,
} from "../../../redux/players-reducer/actionCreators";
import {Dispatch} from "redux";
import {
    roundNumberChanged,
    setGameStep,
    setPlayerOrder, setRoundChange,
    setSelectionItems
} from "../../../redux/game-reducer/actionsCreators";

interface IMapState {
    readonly playerOrder: number;
    readonly roundNumber: number;
    readonly selectionItems: ReadonlyArray<IItemType>;
    readonly firstPlayerItemLength: number;
    readonly secondPlayerItemLength: number;
    readonly needToChangeRound: boolean;
}

function mapStateToProps(state: IStore): IMapState {
    const {playerOrder, roundNumber, selectionItems, needToChangeRound} = state.gameReducer;

    return {
        playerOrder, roundNumber, selectionItems: selectionItems, needToChangeRound,
        firstPlayerItemLength: state.playersReducer.playerOne.itemArray.length,
        secondPlayerItemLength: state.playersReducer.playerTwo.itemArray.length,
    }
}

interface IMapDispatch {
    readonly setSelectedItemFirstPlayer: (value: any) => void;
    readonly setSelectedItemSecondPlayer: (value: any) => void;
    readonly setSelectionItems: (value: any) => void;
    readonly setPlayerOrder: (value: number) => void;
    readonly roundNumberChanged: (value: number) => void;
    readonly setGameStep: (value: any) => void;
    readonly setRoundChange: (value: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatch => {
    return {
        setSelectedItemFirstPlayer: (value: any) => dispatch(addItemFirstPlayer(value)),
        setSelectedItemSecondPlayer: (value: any) => dispatch(addItemSecondPlayer(value)),
        setSelectionItems: (value: any) => dispatch(setSelectionItems(value)),
        setPlayerOrder: (value: number) => dispatch(setPlayerOrder(value)),
        roundNumberChanged: (value: number) => dispatch(roundNumberChanged(value)),
        setGameStep: (value: any) => dispatch(setGameStep(value)),
        setRoundChange: (value: boolean) => dispatch(setRoundChange(value)),
    }
}

export type IProps = IMapState & IMapDispatch;
export const SelectionStageContainer = connect(mapStateToProps, mapDispatchToProps)(SelectionStage);