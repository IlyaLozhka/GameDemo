import React, { useEffect, useState } from "react";
import { randomNumber } from "./utils";

import styles from './RandomPlayerCoin.module.scss';

interface IRandomPlayerCoin {
	readonly chooseFirstPlayer: (value: number) => void;
}

export const RandomPlayerCoin: React.FunctionComponent<IRandomPlayerCoin> = ({chooseFirstPlayer}) => {
	const [answer, setAnswer] = useState<number | null>();

	useEffect(() => {
		const answer = randomNumber(2) + 1;
		setAnswer(answer);

		setTimeout(() => {chooseFirstPlayer(answer)}, 3500);
	},[])

	return <>
		{answer && <div className={`${styles.container} ${answer === 1 ? styles.spinFirst : styles.spinSecond}`}>
			<div className={styles.first}><span>1</span></div>
			<div className={styles.second}><span>2</span></div>
		</div>}
	</>
}