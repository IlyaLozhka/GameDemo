import React, {useEffect, useState} from 'react';
import style from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import {ModalTestContainer} from "./components/ModalOfGame/ModalTestContainer";
import {GameContainer} from "./components/Game";
import {ModalPlayerContainer} from "./components/ModalOfPlayersWins/ModalPlayerContainer";
import {IProps} from "./AppContainer";

const App: React.FunctionComponent<IProps> = (props) => {

    const {
        livesPlayerTwo,
        livesPlayerOne
    } = props;

    const [isTestModalOpen, setTestModal] = useState(false);
    const [isPlayerModalOpen, setPlayerModal] = useState(false);

    const appRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ((window.innerWidth / 16) * 9 < window.innerHeight) {
            let value = (window.innerWidth * 100) / 192000;
            let margin = (window.innerHeight - 1080 * value) / 2;

            if (appRef?.current?.style) {
                appRef.current.style.transform = `scale(${value})`;
                appRef.current.style.top = `${margin}px`;
            }
        } else {
            let value = (window.innerHeight * 100) / 108000;
            let margin = (window.innerWidth - 1920 * value) / 2;

            if (appRef?.current?.style) {
                appRef.current.style.transform = `scale(${value})`;
                appRef.current.style.left = `${margin}px`;
            }
        }
    });

    const switchTestPanel = (event: KeyboardEvent) => {
        if (event.code === 'Backquote') {
            setTestModal(isTestModalOpen => !isTestModalOpen);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', switchTestPanel);

        return () => {
            document.removeEventListener('keydown', switchTestPanel);
        }
    }, []);

    useEffect(() => {
        if (livesPlayerTwo === 0 || livesPlayerOne === 0) {
            setPlayerModal(isPlayerModalOpen => !isPlayerModalOpen)
        }
    }, [livesPlayerTwo, livesPlayerOne])

    return (
        <BrowserRouter>
            {
                isTestModalOpen && <ModalTestContainer/>
            }
            <div className={style.container}>
                <div className={style.appWrapper} ref={appRef}>
                    {
                        isPlayerModalOpen && <ModalPlayerContainer/>
                    }
                    <GameContainer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
