export interface IItemType {
    readonly value: string;
    readonly id: string;
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


