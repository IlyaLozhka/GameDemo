import React from 'react';
import './assets/App.module.scss';
import {BrowserRouter} from "react-router-dom";
import {GameFiledContainer} from "./component/gameFiledContainer";

const App: React.FunctionComponent = () => {
    return (<BrowserRouter>
      <GameFiledContainer />
    </BrowserRouter>);
}

export default App;
