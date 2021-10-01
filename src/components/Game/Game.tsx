import React from "react";
import { GameFiledContainer } from "../../component/gameFiledContainer";
import { IProps } from "./index";
import { RandomPlayerCoin } from "./RandomPlayerCoin/RandomPlayerCoin";
import { gameSteps } from "../../redux/game-reducer/constants";
import { SelectionStageContainer } from "./SelectionStage";

export const Game: React.FunctionComponent<IProps> = ({ gameStep, playerOrder, setPlayerOrder, setGameType }) => {

	const onSetFirstPlayer = (order: number) => {
		setPlayerOrder(order);
		setGameType(gameSteps.SELECTION_STAGE);
	}

	const gameStepSwitcher = (step: string) => {
		switch (step) {
			case gameSteps.CHOOSE_FIRST_PLAYER: return <RandomPlayerCoin chooseFirstPlayer={onSetFirstPlayer}/>
			case gameSteps.SELECTION_STAGE: return <SelectionStageContainer/>
			default: return null;
		}
	}

	return <>
		<GameFiledContainer/>
		{gameStepSwitcher(gameStep)}
	</>
}