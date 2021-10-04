import { connect } from "react-redux";
import { Game } from "./Game";
import { IStore } from "../../redux/types";
import { setGameStep, setPlayerOrder } from "../../redux/game-reducer/action-creators";
import { Dispatch } from "redux";

interface IMapState {
	readonly gameStep: string;
	readonly playerOrder: number;
}

interface IDispatchState {
	readonly setPlayerOrder: (value: number) => void;
	readonly setGameStep: (gameType: string) => void;
}

function mapStateToProps (state: IStore): IMapState {
	const { gameStep, playerOrder } = state.gameReducer;

	return {gameStep, playerOrder};
}

function mapDispatchToProps (dispatch: Dispatch): IDispatchState {
	return {
		setPlayerOrder: (val) => dispatch(setPlayerOrder(val)),
		setGameStep: (gameType) => dispatch(setGameStep(gameType))
	}
}

export type IProps = IMapState & IDispatchState;

export const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)