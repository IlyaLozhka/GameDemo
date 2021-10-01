import React from 'react';
import {IProps} from "./gameFiledContainer";
import styles from './gameFiled.module.scss'

export const GameFiled: React.FunctionComponent<IProps> = (props) => {

    const {
        livesPlayerOne,
        livesPlayerTwo,
        itemsPlayerOne,
        itemsPlayerTwo
    } = props;

    return (<div className={styles.field}>
        <div className={styles.secondPlayer}>
            <span>Lives: {livesPlayerTwo}</span>
            <div className={styles.valueContainer}>
                {Array(livesPlayerTwo).fill(null).map((val, index) => <div key={val + index}
                                                                           className={styles.lives}/>)}
            </div>
            <span> Items: {itemsPlayerTwo?.length}</span>
            <div className={styles.valueContainer}>
                {itemsPlayerTwo.map((val, index) => <div key={val + index} className={styles.items}/>)}
            </div>
        </div>
        <div className={styles.firstPlayer}>
            <div className={styles.valueContainer}>
                {Array(livesPlayerOne).fill(null).map((val, index) => <div key={val + index}
                                                                           className={styles.lives}/>)}
            </div>
            <span> Lives: {livesPlayerOne}</span>
            <div className={styles.valueContainer}>
                {itemsPlayerOne.map((val, index) => <div key={val + index} className={styles.items}/>)}
            </div>
            <span> Items: {itemsPlayerOne?.length}</span>
        </div>
    </div>)
};