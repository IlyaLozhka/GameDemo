import { IItemType } from "../players-reducer/types";

export interface IGameReducer {
    readonly playerOrder: number;
    readonly roundNumber: number;
    readonly gameStep: string;
    readonly selectionItems: ReadonlyArray<IItemType>;
    readonly needToChangeRound: boolean;
}