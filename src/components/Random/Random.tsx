import React, { useCallback, useState } from 'react';
import { playerActions, randomNumber } from "./utils";

import styles from './Random.module.scss';

interface IRandom {
	readonly count: number;
	readonly variationCount: number;
}

interface itemType {
	readonly value: number;
	readonly id: number;
}

export const Random: React.FunctionComponent<IRandom> = ({ count, variationCount }) => {
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

	return <div className={styles.container}>
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
		<button onClick={startRandom}>run</button>
	</div>
}

