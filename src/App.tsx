import React, {useEffect, useState} from 'react';
import style from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import {GameFiledContainer} from "./component/gameFiledContainer";
import {ModalContainer} from "./components/Modal/ModalContainer";

const App: React.FunctionComponent = () => {
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

    const [isModalOpen, setModal] = useState(false)

    const switchTestPanel = (event: KeyboardEvent) => {
        if (event.code === 'Backquote') {
            setModal(isModalOpen => !isModalOpen);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', switchTestPanel);

        return () => {
            document.removeEventListener('keydown', switchTestPanel);
        }
    }, []);

    return (
        <BrowserRouter>
            {
                isModalOpen && <ModalContainer/>
            }
            <div className={style.container}>
                <div className={style.appWrapper} ref={appRef}>
                    <GameFiledContainer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
