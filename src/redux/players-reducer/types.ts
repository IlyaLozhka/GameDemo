export interface IAction {
    readonly type: string;
    readonly payload?: any;
}

export interface IPlayerReducer {
    readonly playerOne: {
        readonly lives: number;
    },
    readonly playerTwo: {
        readonly lives: number;
    }
}

export interface IStore {
    readonly playersReducer: IPlayerReducer
}


