import React, { useEffect} from 'react';
import style from './assets/App.module.scss';
import {BrowserRouter} from "react-router-dom";
import {GameFiledContainer} from "./component/gameFiledContainer";

const App: React.FunctionComponent = () => {
    let appHeight = window.innerHeight;
    let appWidth = window.innerWidth;
    let newHeight = appHeight/ 1080;
    let newWidth = appWidth/1920;

    const appRef = React.useRef<HTMLDivElement>(null);
    // h-57,8 w-71,1
    useEffect(() => {
         if (appRef?.current?.style) {
            appRef.current.style.transform = `scale(${newWidth},${newHeight})`;
        }
    });

    return (
        <div className={style.appWrapper} ref={appRef}>
        <BrowserRouter>
            <GameFiledContainer/>
        </BrowserRouter>
    </div>
    );
}

export default App;
