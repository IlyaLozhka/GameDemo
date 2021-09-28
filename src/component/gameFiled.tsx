import React from 'react';
import {IProps} from "./gameFiledContainer";

export const GameFiled: React.FunctionComponent<IProps> = (props) => {
    return (<div>
        <div>
            Lives: {props.livesPlayerOne}
        </div>
        <div></div>
        <div>
            Lives: {props.livesPlayerTwo}
        </div>
        <div></div>
    </div>)
}