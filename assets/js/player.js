class player extends creature{
  constructor() {
    super();
    this.type = "player";
  }

  levelUp() {
    this.level++;
    this.health = this.maxHealth += requestRoll();
  }
}
