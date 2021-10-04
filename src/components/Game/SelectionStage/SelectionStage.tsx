import React from "react";
import {RandomSelect} from "./RandomSelect/RandomSelect";
import {IProps} from "./index";

export const SelectionStage: React.FunctionComponent<IProps> = (props) => {

    const {
        playerOrder,
        roundNumber,
        setSelectedItemFirstPlayer,
        setSelectedItemSecondPlayer,
        setSelectionItem,
        selectionItem,
        setPlayerOrder,
        roundNumberChanged,
        firstPlayerItem,
        secondPlayerItem,
        setGameStep,
        setRoundChange,
        needToChangeRound
    } = props

    return <>
        <RandomSelect count={6} variationCount={3} playerOrder={playerOrder} roundNumber={roundNumber}
                      setSelectedItemFirstPlayer={setSelectedItemFirstPlayer}
                      setSelectedItemSecondPlayer={setSelectedItemSecondPlayer}
                      setSelectionItem={setSelectionItem}
                      selectionItem={selectionItem}
                      setPlayerOrder={setPlayerOrder}
                      roundNumberChanged={roundNumberChanged}
                      firstPlayerItem={firstPlayerItem}
                      secondPlayerItem={secondPlayerItem}
                      setGameStep={setGameStep}
                      setRoundChange={setRoundChange}
                      needToChangeRound={needToChangeRound}
        />
    </>
}