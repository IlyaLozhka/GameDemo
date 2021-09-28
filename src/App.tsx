import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {GameFiledContainer} from "./component/gameFiledContainer";
import {GameFiled} from "./component/gameFiled";
import {useSelector} from "react-redux";



const App: React.FunctionComponent = () => {
    console.log(useSelector((main) => main)));
    return (<BrowserRouter>
      {/*<GameFiledContainer />*/}
        {/*<GameFiled livesPlayerOne={2} livesPlayerTwo={1}/>*/}
    </BrowserRouter>);
}

export default App;
