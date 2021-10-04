import React, { useCallback, useEffect } from 'react';
import {playerActions, randomNumber} from "./utils";
import styles from './RandomSelect.module.scss';
import {gameSteps} from "../../../../redux/game-reducer/constants";

interface IRandom {
    readonly count: number;
    readonly variationCount: number;
    readonly playerOrder: number;
    readonly roundNumber: number;
    readonly setSelectedItemFirstPlayer: any;
    readonly setSelectedItemSecondPlayer: any;
    readonly setSelectionItem: any;
    readonly selectionItem: any;
    readonly setPlayerOrder: any;
    readonly roundNumberChanged: any;
    readonly firstPlayerItem: number;
    readonly secondPlayerItem: number;
    readonly setGameStep: any;
    readonly setRoundChange: any;
    readonly  needToChangeRound: boolean;
}

interface itemType {
    readonly value: string;
    readonly id: number;
}

export const RandomSelect: React.FunctionComponent<IRandom> = (props) => {

    const {
        count,
        variationCount,
        roundNumber,
        playerOrder,
        setSelectedItemSecondPlayer,
        setSelectedItemFirstPlayer,
        setSelectionItem,
        selectionItem,
        setPlayerOrder,
        roundNumberChanged,
        secondPlayerItem,
        firstPlayerItem,
        setGameStep,
        setRoundChange,
        needToChangeRound
    } = props;

    let newCount: number = count - (playerOrder === 2 ? firstPlayerItem : secondPlayerItem);

    const startRandom = useCallback(() => {
        const newState = [];

        for (let i = 0; i < newCount; i++) {
            newState.push({id: Date.now() + i, value: playerActions[randomNumber(variationCount)]});
        }
        setSelectionItem(newState);
    }, [newCount, variationCount]);


    const onChangeOrder = () => {
        if (playerOrder === 1) {
            setPlayerOrder(2);
            startRandom();
        }
        if (playerOrder === 2) {
            setPlayerOrder(1);
            startRandom();
        }
    };

    const onChangeRound = () => {
        roundNumberChanged(roundNumber + 1)
    }

    const onNextStepClick = () => {
        if (!needToChangeRound) {
            setRoundChange(!needToChangeRound);
            onChangeOrder();
        }
        if (needToChangeRound) {
            onChangeRound();
            setRoundChange(!needToChangeRound);
            onChangeOrder();
        }
        if (needToChangeRound && roundNumber === 3) {
            setGameStep(gameSteps.COMPARISON_STAGE);
        }
    }

    const onItemClick = useCallback((item) => () => {

        const filteredSelectionItem = selectionItem.filter((arrayItem: itemType) => arrayItem.id !== item.id);
        setSelectionItem(filteredSelectionItem);

        if (playerOrder === 1) {
            setSelectedItemFirstPlayer(item);
        }
        if (playerOrder === 2) {
            setSelectedItemSecondPlayer(item);
        }

    }, [selectionItem, playerOrder]);

    useEffect(() => {
        startRandom();
    }, []);


    return <div className={styles.container}>
        <h3>Round {roundNumber} Player {playerOrder}</h3>
        <div>
            {Boolean(selectionItem.length) && <div className={styles.randomContainer}>
                {selectionItem.map((item: any) => (
                    <div
                        className={styles.randomValue}
                        key={item.id}
                        onClick={onItemClick(item)}
                    >{item.value}</div>))}
            </div>}
        </div>
        <div>
            <button className={styles.changePlayerButton} onClick={onNextStepClick}>
                {needToChangeRound && roundNumber === 3 ? 'START BATTLE!' : `NEXT PLAYER ${playerOrder === 1 ? 2 : 1}`}
            </button>
        </div>
    </div>
}

