import React from "react";
import { GameFiledContainer } from "../../component/gameFiledContainer";
import { IProps } from "./index";
import { RandomPlayerCoin } from "./RandomPlayerCoin/RandomPlayerCoin";
import { gameSteps } from "../../redux/game-reducer/constants";
import { SelectionStageContainer } from "./SelectionStage";
import { ComparisonStageContainer } from "./ComparisonStage";
import styles from './Game.module.scss';

export const Game: React.FunctionComponent<IProps> = ({ gameStep, setPlayerOrder, setGameStep }) => {

	const onSetFirstPlayer = (order: number) => {
		setPlayerOrder(order);
		setGameStep(gameSteps.SELECTION_STAGE);
	}

	const gameStepSwitcher = (step: string) => {
		switch (step) {
			case gameSteps.CHOOSE_FIRST_PLAYER: return <RandomPlayerCoin chooseFirstPlayer={onSetFirstPlayer}/>
			case gameSteps.SELECTION_STAGE: return <SelectionStageContainer/>
			case gameSteps.COMPARISON_STAGE: return <ComparisonStageContainer/>
			default: return null;
		}
	}

	return <>
		<GameFiledContainer/>
		<div className={styles.stageWrapper}>
			{gameStepSwitcher(gameStep)}
		</div>
	</>
}