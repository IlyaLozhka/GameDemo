import { connect } from "react-redux";
import { ComparisonStage } from "./ComparisonStage";
import { IStore } from "../../../redux/types";

interface IMapState {
	readonly playerOneItems: ReadonlyArray<any>;
	readonly playerTwoItems: ReadonlyArray<any>;
}

function mapStateToProps (state: IStore) {
	const { playerOne, playerTwo } = state.playersReducer;

	return { playerOneItems: playerOne.itemArray, playerTwoItems: playerTwo.itemArray }
}

export type IProps = IMapState;

export const ComparisonStageContainer = connect(mapStateToProps)(ComparisonStage);