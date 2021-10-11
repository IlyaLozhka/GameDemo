import React, { useEffect, useState } from "react";
import { GameFiledContainer } from "./PlayersArea";
import { IProps } from "./index";
import { gameSteps } from "../../redux/game-reducer/constants";
import { SelectionStageContainer } from "./SelectionStage";
import { ComparisonStageContainer } from "./ComparisonStage";
import styles from './Game.module.scss';
import { RandomPlayerCoinContainer } from "./RandomPlayerCoin";
import { ModalWinContainer } from "../Modal/ModalPlayersWins/ModalWinContainer";

export const Game: React.FunctionComponent<IProps> = (props) => {

	const {
		gameStep,
		livesPlayerTwo,
		livesPlayerOne
	} = props;

	const [isModalRequired, setModalState] = useState(false);

	const gameStepSwitcher = (step: string) => {
		switch (step) {
			case gameSteps.CHOOSE_FIRST_PLAYER:
				return <RandomPlayerCoinContainer/>
			case gameSteps.SELECTION_STAGE:
				return <SelectionStageContainer/>
			case gameSteps.COMPARISON_STAGE:
				return <ComparisonStageContainer/>
			default:
				return null;
		}
	};

	useEffect(() => {
		if (livesPlayerTwo === 0 || livesPlayerOne === 0) {
			setModalState(!isModalRequired)
		}
	}, [livesPlayerOne, livesPlayerTwo]);

	return <>
		{
			isModalRequired && <ModalWinContainer/>
		}
		<GameFiledContainer/>
		<div className={styles.stageWrapper}>
			{gameStepSwitcher(gameStep)}
		</div>
	</>
};