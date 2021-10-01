export function randomNumber(max: number) {
	return Math.floor(Math.random() * max);
}

export enum playerActions {
	'Protect',
	'Attack',
	'Ether'
}