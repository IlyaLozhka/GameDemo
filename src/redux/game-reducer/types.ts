export interface IGameReducer  {
    readonly playerOrder: number;
    readonly roundNumber: number;
}
export interface IAction {
    readonly type: string;
    readonly payload?: number;
}