export interface IGameReducer {
    readonly playerOrder: number;
    readonly roundNumber: number;
    readonly gameStep: string;
    readonly selectionItem: any;
    readonly needToChangeRound: boolean;
}