import React, { useState } from "react";
import { IProps } from "./index";
import { uid } from 'uid';

import styles from './ComparisonStage.module.scss';
import { firstPlayerActions, playerActionsTypes, secondPlayerActions } from "./utils";

const createEmptyValues = (count: number) => {
	const values = [];

	for (let i = 0; i < count; i ++) {
		values.push({id: uid(), value: ''})
	}

	return values;
}

const maxValue = (a: number,b: number) => {
	if (a > b) {
		return a;
	}

	return b;
}

const sortItems = (firstPlayer: any, secondPlayer: any) => {
	let firstPlayerAttacks = 0;
	let firstPlayerProtects = 0;
	let secondPlayerAttacks = 0;
	let secondPlayerProtects = 0;

	for ( let i = 0; i < firstPlayer.length; i++ ) {
		if (firstPlayer[i].value === playerActionsTypes.ATTACK) {
			firstPlayerAttacks += 1;
		}
		if (firstPlayer[i].value === playerActionsTypes.PROTECT) {
			firstPlayerProtects += 1;
		}
		if (secondPlayer[i].value === playerActionsTypes.ATTACK) {
			secondPlayerAttacks += 1;
		}
		if (secondPlayer[i].value === playerActionsTypes.PROTECT) {
			secondPlayerProtects += 1;
		}
	}

	// @ts-ignore
	const firstPlayerItems = firstPlayer.slice(0).sort((a,b) => firstPlayerActions[a.value] - firstPlayerActions[b.value]);
	// @ts-ignore
	const secondPlayerItems = secondPlayer.slice(0).sort((a,b) => secondPlayerActions[a.value] - secondPlayerActions[b.value]);

	let formatFirstPlayer = firstPlayerItems;
	let formatSecondPlayer = secondPlayerItems;

	if (firstPlayerProtects < secondPlayerAttacks) {
		formatFirstPlayer = [
			...firstPlayerItems.slice(0, firstPlayerProtects),
			...createEmptyValues(secondPlayerAttacks - firstPlayerProtects),
			...firstPlayerItems.slice(firstPlayerProtects)]
	}

	if (secondPlayerAttacks < firstPlayerProtects) {
		formatSecondPlayer = [
			...secondPlayerItems.slice(0, secondPlayerAttacks),
			...createEmptyValues(firstPlayerProtects - secondPlayerAttacks),
			...secondPlayerItems.slice(secondPlayerAttacks)
		]
	}

	if (firstPlayerAttacks < secondPlayerProtects) {
		formatFirstPlayer = [
			...firstPlayerItems.slice(0,maxValue(firstPlayerProtects, secondPlayerAttacks) + firstPlayerAttacks),
			...createEmptyValues(secondPlayerProtects - firstPlayerAttacks),
			...firstPlayerItems.slice(firstPlayerAttacks + firstPlayerProtects)
		]
	}

	if (secondPlayerProtects < firstPlayerAttacks) {
		formatSecondPlayer = [
			...secondPlayerItems.slice(0, maxValue(firstPlayerProtects,secondPlayerAttacks) + secondPlayerProtects),
			...createEmptyValues(firstPlayerAttacks - secondPlayerProtects),
			...secondPlayerItems.slice(secondPlayerAttacks + secondPlayerProtects)
		]
	}

	return {playerOneItems: formatFirstPlayer, playerTwoItems: formatSecondPlayer}
}

export const ComparisonStage:React.FunctionComponent<IProps> = ({playerOneItems, playerTwoItems}) => {
	const [state, setState] = useState(sortItems(playerOneItems, playerTwoItems))

	return <div className={styles.container}>
		<div>
			{state.playerTwoItems.map((item:any, index: number) => <div
				key={item.id}
				style = {{animationDelay: `${index}s`}}
				className={item.value ? styles.item : styles.noopItem}
			>{item.value}</div>)}
		</div>
		<div>
			{state.playerOneItems.map((item:any, index: number) => <div
				key={item.id}
				style = {{animationDelay: `${index}s`}}
				className={item.value ? styles.item : styles.noopItem}
			>{item.value}</div>)}
		</div>
	</div>
}