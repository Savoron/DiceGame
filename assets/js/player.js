class player {
  constructor() {
    this.health = this.maxHealth = requestRoll();
    this.level = 1;
    this.weapon = requestWeapon();
  }

  takeDamange(damageAmount) {
    this.health -= damageAmount;
    if (this.health < 1) {
      requestGameOver();
    }
  }

  levelUp() {
    this.level++;
    this.health = this.maxHealth += requestRoll();
  }
}
