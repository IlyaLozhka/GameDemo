import React from 'react';
import {IProps} from "./gameFiledContainer";
import styles from './gameFiled.module.scss'

export const GameFiled: React.FunctionComponent<IProps> = ({   livesPlayerOne,
                                                               livesPlayerTwo,
                                                               removeLivePointFirstPlayer,
                                                               removeLivePointSecondPlayer,
                                                           }) => {
    const onClickHitSecondPlayer = (value: number) => () => {
        removeLivePointSecondPlayer(value);
    }
    const onClickHitFirstPlayer = (value: number) => () => {
        removeLivePointFirstPlayer(value);
    }

    return (<div className={styles.field}>
        <div className={styles.secondPlayer}>
            <span>Lives: {livesPlayerTwo}</span>
            <button onClick={onClickHitSecondPlayer(livesPlayerTwo - 1)}>
                HIT
            </button>
        </div>
        <div className={styles.firstPlayer}>
            <span> Lives: {livesPlayerOne}</span>
            <button onClick={onClickHitFirstPlayer(livesPlayerOne - 1)}>
                HIT
            </button>
        </div>
    </div>)
}