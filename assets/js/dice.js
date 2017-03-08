class dice {
  constructor(numberOfSides) {
    this.getNumberOfSides = function() {return numberOfSides;};
  }

  roll() {
    return dice.getRandomInt(1, this.getNumberOfSides());
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
