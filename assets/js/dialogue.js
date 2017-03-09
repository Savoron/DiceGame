"use strict";
function requestDialogue(type) {
  var nothingDialogue     =   ["You found nothing...",
                               "What's that!? Is it a bird? Is it a plane? Wait what's a plane?",
                               "Achoo!!!",
                               "Go search for something! Oh wait I won't let you since your weapon still has durability. Good lucky HAHAHA!!!",
                               "Herp derp blerp serp perp. Yupp I'm weird"
                              ];
  var enemyDialogue       =   ["Haha I will destroy you!",
                               "You will never live!"
                              ];
  var killedEnemyDialogue =   ["Well it's dead. Now what?",
                               "Aren't you just a tough guy."
                              ];
  var weaponBreakDialogue =   ["Well crap. Looks like your weapon broke. You better run!",
                               "Whoops. Looks like that " + window.player.weapon.type + " didn't last long",
                              ];
  var foundWeaponDialogue =   ["WOW! You found a " + window.player.weapon.type + "<br>It has " + window.player.weapon.durability + " durability and " + window.player.weapon.baseDamage + " base damage."
                              ];
  var foundNothingDialogue =  ["Well crap. Nothing here to see.",
                               "Huh that looks like an apple. Wonder if I should eat it."
                              ];
  var runAwayDialogue      =  ["Well aren't you lucky. You got away. You better go find a new weapon",
                               "Aww did someone get scared?"
                              ];
  var failedRunAwayDialogue = ["Ouch, that looked like it hurt. Better watch out!",
                               "WATCH OUT FOR HIS SWING!"
                              ];
  var randomNumber;
  var output = document.getElementById("output");

  if (type == "nothing") {
    randomNumber = new dice(nothingDialogue.length).roll() - 1;
    output.innerHTML = nothingDialogue[randomNumber];
  } else if (type == "enemy") {
    randomNumber = new dice(enemyDialogue.length).roll() - 1;
    output.innerHTML = enemyDialogue[randomNumber];
  } else if (type == "killedenemy") {
    randomNumber = new dice(killedEnemyDialogue.length).roll() - 1;
    output.innerHTML = killedEnemyDialogue[randomNumber] + "<br>" + requestStats();
  } else if (type == "weaponbreak") {
    randomNumber = new dice(weaponBreakDialogue.length).roll() - 1;
    output.innerHTML = weaponBreakDialogue[randomNumber];
  } else if (type == "foundweapon") {
    randomNumber = new dice(foundWeaponDialogue.length).roll() - 1;
    output.innerHTML = foundWeaponDialogue[randomNumber];
  } else if (type == "foundnothing") {
    randomNumber = new dice(foundNothingDialogue.length).roll() - 1;
    output.innerHTML = foundNothingDialogue[randomNumber];
  } else if (type == "runaway") {
    randomNumber = new dice(runAwayDialogue.length).roll() - 1;
    output.innerHTML = runAwayDialogue[randomNumber];
  } else if (type == "failedrunaway") {
    randomNumber = new dice(failedRunAwayDialogue.length).roll() - 1;
    output.innerHTML = failedRunAwayDialogue[randomNumber];
  }
}
