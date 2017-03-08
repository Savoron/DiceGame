class die {
  constructor(numberOfSides) {
    this.getNumberOfSides = function() {return numberOfSides;};
  }

  roll() {
    return die.getRandomInt(0, this.getNumberOfSides());
  }

  get numberOfSides() {

  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
