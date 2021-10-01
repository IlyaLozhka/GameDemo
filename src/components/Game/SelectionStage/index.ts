import { connect } from "react-redux";
import { SelectionStage } from "./SelectionStage";
import { IStore } from "../../../redux/types";

interface IMapState {
	readonly playerOrder: number;
	readonly roundNumber: number;
}

function mapStateToProps (state: IStore): IMapState {
	const { playerOrder, roundNumber } = state.gameReducer;

	return {playerOrder, roundNumber}
}

export type IProps = IMapState;

export const SelectionStageContainer = connect(mapStateToProps)(SelectionStage);