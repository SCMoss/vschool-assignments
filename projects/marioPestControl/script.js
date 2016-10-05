var goombasCost = 5;
var goombasCaught = 12;

var bobombsCost = 7;
var bobombsCaught = 8;

var cheepCheepsCost = 11;
var cheepCheepsCaught = 5;

var total = goombasCost * goombasCaught + bobombsCost * bobombsCaught + cheepCheepsCost * cheepCheepsCaught;

function marioPayday() {
    document.getElementById("total").innerHTML = "Pay Mario " + total + " coins!";
}
