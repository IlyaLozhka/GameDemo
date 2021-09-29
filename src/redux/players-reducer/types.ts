export interface IAction {
    readonly type: string;
    readonly payload?: any;
}

export interface IPlayerReducer {
    readonly playerOne: {
        readonly lives: number;
        readonly itemArray: any;
    },
    readonly playerTwo: {
        readonly lives: number;
        readonly itemArray: any;
    }
}

export interface IStore {
    readonly playersReducer: IPlayerReducer;
}


