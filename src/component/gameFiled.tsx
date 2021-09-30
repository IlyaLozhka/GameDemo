import React from 'react';
import {IProps} from "./gameFiledContainer";
import styles from './gameFiled.module.scss'

export const GameFiled: React.FunctionComponent<IProps> = (props) => {

    const {
        livesPlayerOne,
        livesPlayerTwo,
        removeLivePointFirstPlayer,
        removeLivePointSecondPlayer,
        itemsPlayerOne,
        itemsPlayerTwo,
        addItemSecondPlayer,
        addItemFirstPlayer,
        removeItemSecondPlayer,
        removeItemFirstPlayer
    } = props;

    const onClickHitSecondPlayer = (value: number) => () => {
        removeLivePointSecondPlayer(value);
    }
    const onClickHitFirstPlayer = (value: number) => () => {
        removeLivePointFirstPlayer(value);
    }

    return (<div className={styles.field}>
        <div className={styles.secondPlayer}>
            <span>Lives: {livesPlayerTwo}</span>
            <div className={styles.valueContainer}>
                {Array(livesPlayerTwo).fill(null).map((val, index) => <div key={val + index} className={styles.lives}/>)}
            </div>
            <span> Items: {itemsPlayerTwo?.length}</span>
            <div className={styles.valueContainer}>
                {itemsPlayerTwo.map((val, index) => <div key={val + index} className={styles.items}/>)}
            </div>
            <div className={styles.test}>
                <button onClick={() => {removeItemSecondPlayer()}}>
                    Delete action
                </button>
                <button onClick={() => {addItemSecondPlayer({})}}>
                    Add action
                </button>
                <button onClick={onClickHitSecondPlayer(livesPlayerTwo - 1)} disabled={!Boolean(livesPlayerTwo)}>
                    HIT
                </button>
            </div>
        </div>
        <div className={styles.firstPlayer}>
            <div className={styles.test}>
                <button onClick={onClickHitFirstPlayer(livesPlayerOne - 1)}  disabled={!Boolean(livesPlayerOne)}>
                    HIT
                </button>
                <button onClick={() => {addItemFirstPlayer({})}}>
                    Add action
                </button>
                <button onClick={() => {removeItemFirstPlayer()}}>
                    Delete action
                </button>
            </div>
            <div className={styles.valueContainer}>
                {Array(livesPlayerOne).fill(null).map((val, index) => <div key={val + index} className={styles.lives}/>)}
            </div>
            <span> Lives: {livesPlayerOne}</span>
            <div className={styles.valueContainer}>
                {itemsPlayerOne.map((val, index) => <div key={val + index} className={styles.items}/>)}
            </div>
            <span> Items: {itemsPlayerOne?.length}</span>
        </div>
    </div>)
}