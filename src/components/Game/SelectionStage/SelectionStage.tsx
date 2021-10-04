import React, { useCallback, useEffect } from "react";
import { RandomSelect } from "./RandomSelect/RandomSelect";
import { IProps } from "./index";
import { gameSteps } from "../../../redux/game-reducer/constants";

import styles from './SelectionStage.module.scss';
import { IItemType } from "../../../redux/players-reducer/types";
import { playerActions, players, randomNumber, rules } from "./utils";
import { uid } from "uid";

export const SelectionStage: React.FunctionComponent<IProps> = (props) => {

	const {
		playerOrder,
		roundNumber,
		setSelectedItemFirstPlayer,
		setSelectedItemSecondPlayer,
		setSelectionItems,
		selectionItems,
		setPlayerOrder,
		roundNumberChanged,
		firstPlayerItemLength,
		secondPlayerItemLength,
		setGameStep,
		setRoundChange,
		needToChangeRound
	} = props

	const startRandom = useCallback(() => {
		const itemsCount = rules.ITEM_COUNT - (playerOrder === players.FIRST_PLAYER ? firstPlayerItemLength : secondPlayerItemLength);
		const newState = [];

		for (let i = 0; i < itemsCount; i++) {
			newState.push({ id: uid(), value: playerActions[randomNumber(rules.ITEM_VARIANTS)] });
		}
		setSelectionItems(newState);
	}, [playerOrder, firstPlayerItemLength, secondPlayerItemLength]);

	const onItemSelect = useCallback((item) => {
		const filteredSelectionItem = selectionItems
			.filter((arrayItem: IItemType) => arrayItem.id !== item.id);

		setSelectionItems(filteredSelectionItem);

		if (playerOrder === players.FIRST_PLAYER) {
			setSelectedItemFirstPlayer(item);
		} else {
			setSelectedItemSecondPlayer(item);
		}

	}, [ selectionItems, playerOrder ]);

	useEffect(() => {
		startRandom();
	}, [playerOrder, roundNumber]);


	// REFACTORING LOGIC WITH NEW FEATURES
	const onChangeOrder = () => {
		if (playerOrder === players.FIRST_PLAYER) {
			setPlayerOrder(players.SECOND_PLAYER);
		} else {
			setPlayerOrder(players.FIRST_PLAYER);
		}
	};

	const onChangeRound = () => {
		roundNumberChanged(roundNumber + 1);
	}


	const onNextStepClick = () => {
		if (needToChangeRound && roundNumber === 3) {
			setGameStep(gameSteps.COMPARISON_STAGE);
		} else {
			if (!needToChangeRound) {
				setRoundChange(!needToChangeRound);
				onChangeOrder();
			}

			if (needToChangeRound) {
				onChangeRound();
				setRoundChange(!needToChangeRound);
				onChangeOrder();
			}
		}

	}




	return <div className={ styles.container }>
		<h3>Round { roundNumber } Player { playerOrder }</h3>
		<RandomSelect
			selectionItems={ selectionItems }
			onItemSelect ={ onItemSelect }
		/>
		<button className={ styles.changePlayerButton } onClick={ onNextStepClick }>
			{ needToChangeRound && roundNumber === 3 ? 'START BATTLE!' : `NEXT PLAYER ${ playerOrder === 1 ? 2 : 1 }` }
		</button>
	</div>
}