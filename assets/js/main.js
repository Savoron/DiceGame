var dice = {};

function createDice() {
	dice.four = new die(4);
	dice.six = new die(6);
	dice.eight = new die(8);
	dice.ten = new die(10);
	dice.twelve = new die(12);
	dice.twenty = new die(20);
}

function main() {
	createDice();
}

main();
