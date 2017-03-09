"use strict";
class creature {
  constructor() {
    this.healthMultiplier = 10;
    this.health = this.maxHealth = requestRoll() * this.healthMultiplier;
    this.level = 1;
    this.weapon = requestWeapon();
    this.type = "creature";
  }

  attack() {
    var damageMultiplier = requestRoll();
    var damageDelt = this.weapon.baseDamage * damageMultiplier;
    this.weapon.durability--;
    if (this.weapon.durability == 0) {
      requestWeaponBreak();
    }
    console.log(damageDelt);
    return damageDelt;
  }

  takeDamage(damageAmount) {
    this.health -= damageAmount;
    if (this.health < 1) {
      requestDeath(this);
    }
  }
}
