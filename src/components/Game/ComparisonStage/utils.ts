export const playerActionsTypes = {
	PROTECT: 'PROTECT',
	ATTACK: 'ATTACK',
	ETHER: 'ETHER'
}

const {PROTECT,ATTACK,ETHER} = playerActionsTypes;

export enum firstPlayerActions {
	PROTECT,
	ATTACK,
	ETHER
}

export enum secondPlayerActions {
	ATTACK,
	PROTECT,
	ETHER
}