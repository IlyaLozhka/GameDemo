import React, { useCallback, useEffect, useState } from 'react';
import { playerActions, randomNumber } from "./utils";

import styles from './RandomSelect.module.scss';

interface IRandom {
	readonly count: number;
	readonly variationCount: number;
	readonly playerOrder: number;
	readonly roundNumber: number;
}

interface itemType {
	readonly value: number;
	readonly id: number;
}

export const RandomSelect: React.FunctionComponent<IRandom> = ({ count, variationCount, roundNumber, playerOrder }) => {
	const [state, setState] = useState<ReadonlyArray<itemType>>([]);

	const startRandom = useCallback(() => {
		const newState = [];

		for (let i = 0; i < count; i++) {
			newState.push({id: Date.now() + i, value: randomNumber(variationCount)});
		}

		setState(newState);
	}, [count, variationCount]);


	const onItemClick = useCallback((item) => () => {
		setState(state.filter((stateItem) => stateItem.id !== item.id));
	},[state])

	useEffect(() => {
		startRandom()
	}, []);

	return <div className={styles.container}>
		<h3>Round {roundNumber} Player {playerOrder}</h3>
		<div>
			{ Boolean(state.length) && <div className={styles.randomContainer}>
				{state.map((item) => (
					<div
						className={styles.randomValue}
						key={item.id}
						onClick={onItemClick(item)}
					>{playerActions[item.value]}</div>))}
			</div>}
		</div>
	</div>
}

