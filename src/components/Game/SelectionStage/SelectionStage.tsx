import React from "react";
import { RandomSelect } from "./RandomSelect/RandomSelect";
import { IProps } from "./index";

export const SelectionStage: React.FunctionComponent<IProps> = ({ playerOrder, roundNumber }) => {
	return <>
		<RandomSelect count={6} variationCount={3} playerOrder={playerOrder} roundNumber={roundNumber}/>
	</>
}