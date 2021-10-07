import React from "react";
import { GameFiledContainer } from "./PlayersArea";
import { IProps } from "./index";
import { gameSteps } from "../../redux/game-reducer/constants";
import { SelectionStageContainer } from "./SelectionStage";
import { ComparisonStageContainer } from "./ComparisonStage";
import styles from './Game.module.scss';
import { RandomPlayerCoinContainer } from "./RandomPlayerCoin";

export const Game: React.FunctionComponent<IProps> = ({ gameStep }) => {

	const gameStepSwitcher = (step: string) => {
		switch (step) {
			case gameSteps.CHOOSE_FIRST_PLAYER: return <RandomPlayerCoinContainer/>
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