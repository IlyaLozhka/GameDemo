import React from 'react';
import style from './modal.module.scss';
import ReactDOM from "react-dom";
import {IProps} from "./ModalContainer";

let rootModal = document.createElement('div');
rootModal.id = 'testModal';
document.body.appendChild(rootModal);

export const Modal: React.FunctionComponent<IProps> = (props) => {
    const {
        removeLivePointFirstPlayer,
        removeLivePointSecondPlayer,
        addItemSecondPlayer,
        addItemFirstPlayer,
        removeItemSecondPlayer,
        removeItemFirstPlayer,
        livesPlayerOne,
        livesPlayerTwo
    } = props;

    return ReactDOM.createPortal(
        <div className={style.modal}>
            <div className={style.modalFunction}>
                <span> Add Item Second Player</span>
                <button onClick={() => {
                    addItemSecondPlayer({})
                }}>ADD
                </button>
            </div>
            <div className={style.modalFunction}>
                <span>Add Item Second Player </span>
                <button onClick={() => {
                    addItemFirstPlayer({})
                }}>ADD
                </button>
            </div>
            <div className={style.modalFunction}>
                <span>Remove item first player</span>
                <button onClick={() => {
                    removeItemFirstPlayer()
                }}>REMOVE
                </button>
            </div>
            <div className={style.modalFunction}>
                <span>Remove item second player</span>
                <button onClick={() => {
                    removeItemSecondPlayer()
                }}> REMOVE
                </button>
            </div>
            <div className={style.modalFunction}>
                <span> Remove Live Point First Player</span>
                <button onClick={() => {
                    removeLivePointFirstPlayer(livesPlayerOne - 1)
                }}
                        disabled={!Boolean(livesPlayerOne)}>HIT
                </button>
            </div>
            <div className={style.modalFunction}>
                <span>  Remove Live Point Second Player</span>
                <button onClick={() => {
                    removeLivePointSecondPlayer(livesPlayerTwo - 1)
                }}
                        disabled={!Boolean(livesPlayerTwo)}> HIT
                </button>
            </div>
        </div>,
        rootModal
    )
};

