export function randomNumber(max: number) {
	return Math.floor(Math.random() * max);
}

export const playerActionsTypes = {
	PROTECT: 'PROTECT',
	ATTACK: 'ATTACK',
	ETHER: 'ETHER'
}

const {PROTECT,ATTACK,ETHER} = playerActionsTypes;

export enum playerActions {
	PROTECT,
	ATTACK,
	ETHER
}