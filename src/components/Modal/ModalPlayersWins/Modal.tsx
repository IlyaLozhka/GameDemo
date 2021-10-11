import React from "react";
import { IProps } from "./ModalWinContainer";
import style from './modal.module.scss'
import ReactDOM from "react-dom";

let playerModal = document.createElement('div');
playerModal.id = 'playerModal';
document.body.appendChild(playerModal);

export const Modal: React.FunctionComponent<IProps> = (props) => {

    const {
        livesPlayerOne,
        livesPlayerTwo
    } = props;

    return ReactDOM.createPortal(
        <div className={style.mainBlock}>
            {
                livesPlayerOne === 0
                    ? <div>
                        <span>PLAYER TWO WINS</span>
                    </div>
                    : null
            }
            {
                livesPlayerTwo === 0
                    ? <div>
                        <span>PLAYER ONE WINS</span>
                    </div>
                    : null
            }
        </div>
        , playerModal)
};