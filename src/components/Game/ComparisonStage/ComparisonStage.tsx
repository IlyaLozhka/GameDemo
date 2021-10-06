import React, { useEffect } from "react";
import { IProps } from "./index";

import styles from './ComparisonStage.module.scss';
import { comparisonBuilder } from "./comparisonBuilder";
import { PlayerItem } from "../../common/PlayerItem/PlayerItem";
import { comparator } from "./comporisonRules";

export const ComparisonStage:React.FunctionComponent<IProps> = (props) => {
	const {
		playerOneItems,
		playerTwoItems,
		playerOneLives,
		playerTwoLives,
		playerOneEther,
		playerTwoEther,
		setFirstPlayerLives,
		setSecondPlayerLives,
		setFirstPlayerEther,
		setSecondPlayerEther,
		comparisonIndex,
		setComparisonIndex,
		comparisonItems,
		setComparisonItems,
		comparisonStart,
		setComparisonStart,
	} = props;

	useEffect(() => {
		setComparisonItems(comparisonBuilder(playerOneItems, playerTwoItems));
		setComparisonStart(true);
	}, []);

	useEffect(() => {
		if (comparisonStart) {
			comparator({
				playerOneLives,
				playerTwoLives,
				playerOneEther,
				playerTwoEther,
				setFirstPlayerLives,
				setSecondPlayerLives,
				setFirstPlayerEther,
				setSecondPlayerEther,
				setComparisonIndex,
				comparisonItems,
				setComparisonItems,
				comparisonIndex
			});
		}
	},[comparisonIndex, comparisonStart]);

	return <div className={styles.container}>
		<div>
			{comparisonItems.playerTwoItems.map((item:any) => <PlayerItem key = {item.id} value={item.value} visible={item.visible}/>)}
		</div>
		<div>
			{comparisonItems.playerOneItems.map((item:any) => <PlayerItem key = {item.id} value={item.value} visible={item.visible}/>)}
		</div>
	</div>
}