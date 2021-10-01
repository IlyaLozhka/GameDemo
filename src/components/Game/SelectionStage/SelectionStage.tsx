import React from "react";
import { RandomSelect } from "./RandomSelect/RandomSelect";
import { IProps } from "./index";

import styles from './SelectionStage.module.css';

export const SelectionStage: React.FunctionComponent<IProps> = ({ playerOrder, roundNumber }) => {
	return <div className={styles.wrapper}>
		<RandomSelect count={6} variationCount={3} playerOrder={playerOrder} roundNumber={roundNumber}/>
	</div>
}