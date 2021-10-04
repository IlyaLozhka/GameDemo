import React, { useState } from "react";
import { IProps } from "./index";

import styles from './ComparisonStage.module.scss';
import { comparisonBuilder } from "./comparisonLogic";
import { comparisonDelaySecond } from "./utils";

export const ComparisonStage:React.FunctionComponent<IProps> = ({playerOneItems, playerTwoItems}) => {
	const [state, setState] = useState(comparisonBuilder(playerOneItems, playerTwoItems))

	return <div className={styles.container}>
		<div>
			{state.playerTwoItems.map((item:any, index: number) => <div
				key={item.id}
				style = {{animationDelay: `${comparisonDelaySecond + index}s`}}
				className={`${item.value ? styles.item : styles.noopItem} ${styles[item.value]}`}
			>{item.value}</div>)}
		</div>
		<div>
			{state.playerOneItems.map((item:any, index: number) => <div
				key={item.id}
				style = {{animationDelay: `${comparisonDelaySecond + index}s`}}
				className={`${item.value ? styles.item : styles.noopItem} ${styles[item.value]}`}
			>{item.value}</div>)}
		</div>
	</div>
}