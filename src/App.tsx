import React from 'react';
import './assets/App.module.scss';
import {BrowserRouter} from "react-router-dom";
import {GameFiledContainer} from "./component/gameFiledContainer";
import {Random} from "./components/Random/Random";

const App: React.FunctionComponent = () => {
    return (<BrowserRouter>
        <GameFiledContainer/>
        <Random count={4} variationCount={2}/>
    </BrowserRouter>);
}

export default App;
