import {connect} from "react-redux";
import {GameFiled} from './gameFiled';
import { IStore } from "../redux/types";

interface IMapState {
    readonly livesPlayerOne: number;
    readonly livesPlayerTwo: number;
    readonly itemsPlayerOne: ReadonlyArray<any>;
    readonly itemsPlayerTwo: ReadonlyArray<any>;
}

const mapStateToProps = (state: IStore): IMapState => {
    return {
        livesPlayerOne: state.playersReducer.playerOne.lives,
        livesPlayerTwo: state.playersReducer.playerTwo.lives,
        itemsPlayerOne: state.playersReducer.playerOne.itemArray,
        itemsPlayerTwo: state.playersReducer.playerTwo.itemArray
    }
};

export type IProps = IMapState ;
export const GameFiledContainer = connect(mapStateToProps)(GameFiled);