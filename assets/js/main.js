function requestRoll() {
	var possibleSidedDice = [4,6,8,10,12,20];
	var indexOfNewRadomDice = new dice(possibleSidedDice.length).roll()-1;
	var randomDice = new dice(possibleSidedDice[indexOfNewRadomDice]).roll();
	console.log("Dice selected: " + possibleSidedDice[indexOfNewRadomDice] + " | Roll was: " + randomDice);
	return randomDice;
}

function requestGameOver() {
	console.log("You have died.");
}

function requestWeapon() {
	return new weapon();
}

function requestWeaponBreak() {
	console.log("Your weapon has broken");
}

function requestDeath(creature) {
	if (creature.type == "player") {
		requestGameOver();
	} else if (creature.type == "enemy"){
		console.log("Killed enemy");
	} else {
		console.log("How? What? WTF DID YOU DO!?");
	}
}

function requestAttack(creatureA, creatureB) {
	creatureB.takeDamage(creatureA.attack());
}

function main() {

}

var bob = new player();
var derp = new enemy();

console.log(bob);
console.log(derp);

main();
