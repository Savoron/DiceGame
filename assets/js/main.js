function requestRoll() {
	var possibleSidedDice = [4,6,8,10,12,20];
	var indexOfNewRadomDice = new dice(possibleSidedDice.length).roll();
	var randomDice = new dice(possibleSidedDice[indexOfNewRadomDice-1]).roll();
	console.log("Dice selected: " + possibleSidedDice[indexOfNewRadomDice-1] + " | Roll was: " + randomDice);
	return randomDice;
}

function requestGameOver() {
	console.log("You have died.");
}

function requestWeapon() {
	return new weapon();
}

function main() {
	var bob = new player();
}

main();
