"use strict";
class weapon {
  constructor() {
    this.baseDamage = requestRoll();
    this.durability = requestRoll();
    this.type = weapon.getWeapon();
  }

  static getWeapon() {
    var listOfWeapons = ["Isaac Newton's Apple",
                         "A Clown Fish With A Small Right Fin",
                         "Coffe Mug",
                         "Rubber Duck Debugger",
                         "Talking Potato Battery",
                         "Schwartz Ring",
                         "A Pineapple Apple Pen",
                         "Bottle Of Skooma",
                         "Andrew's Reading Glasses",
                         "Benjamin Franklin's Kite",
                         "Ferb's Aglet",
                         "Fargoth's Ring"];
    var randomNumber = new dice(listOfWeapons.length).roll()-1;
    console.log(listOfWeapons[randomNumber]);
    return listOfWeapons[randomNumber];
  }
}
