class weapon {
  constructor() {
    this.damage = requestRoll();
    this.type = weapon.getWeapon();
  }

  static getWeapon() {
    var listOfWeapons = ["Sword", "Axe", "Fish", "Coffe Mug", "Rubber Ducky"];
    var randomNumber = new dice(listOfWeapons.length-1).roll();
    return listOfWeapons[randomNumber];
  }
}
