import { playerActionsTypes } from "./utils";
import { uid } from "uid";


const createEmptyValues = (count: number) => {
	const values = [];

	for (let i = 0; i < count; i ++) {
		values.push({id: uid(), value: ''})
	}

	return values;
}

interface IAction {
	readonly value: string;
	readonly id: string | number;
}


export const comparisonBuilder = (firstPlayerItem: any, secondPlayerItem: any) => {
	const firstPlayerAttack: IAction[] = [];
	const firstPlayerProtect: IAction[] = [];
	const firstPlayerEther: IAction[] = [];

	const secondPlayerAttack: IAction[] = [];
	const secondPlayerProtect: IAction[] = [];
	const secondPlayerEther: IAction[] = [];

	const sorter = (player: number, item: IAction) => {
		if (player === 1) {
			switch (item.value) {
				case playerActionsTypes.ATTACK: firstPlayerAttack.push(item);
					break;
				case playerActionsTypes.PROTECT: firstPlayerProtect.push(item);
					break;
				default: firstPlayerEther.push(item);
					break;
			}
		} else {
			switch (item.value) {
				case playerActionsTypes.ATTACK: secondPlayerAttack.push(item);
					break;
				case playerActionsTypes.PROTECT: secondPlayerProtect.push(item);
					break;
				default: secondPlayerEther.push(item);
					break;
			}
		}
	}

	for ( let i = 0; i < firstPlayerItem.length; i++ ) {
		sorter(1, firstPlayerItem[i]);
		sorter(2, secondPlayerItem[i]);
	}


	let playerOneItems = [...firstPlayerProtect];
	let playerTwoItems = [...secondPlayerAttack];

	const distributor = (firstValue: number, secondValue: number) => {
		if (firstValue !== secondValue) {
			if (firstValue > secondValue) {
				playerTwoItems.push(...createEmptyValues(firstValue - secondValue));
			} else {
				playerOneItems.push(...createEmptyValues(secondValue - firstValue));
			}
		}
	}

	// First step of comparison
	distributor(firstPlayerProtect.length, secondPlayerAttack.length);

	// Second step of comparison
	playerOneItems.push(...firstPlayerAttack);
	playerTwoItems.push(...secondPlayerProtect);

	distributor(firstPlayerAttack.length, secondPlayerProtect.length);

	// Third step of comparison
	playerOneItems.push(...firstPlayerEther);
	playerTwoItems.push(...secondPlayerEther);

	return { playerOneItems, playerTwoItems };

}