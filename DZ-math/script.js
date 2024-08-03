'use strict'

function dice(type) {
  const diceNumber = parseInt(type.split('').splice(1).join(''), 10);
  const min = 1;
  return Math.floor(Math.random() * (diceNumber-min + 1) + min);
}
console.log(dice('d20'));