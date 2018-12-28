var wins = 0;
var losses = 0;
var randomNumber = 0;
var crystalPoints = [];
var myNumber = 0;
var crystalValues = [];

//var myNumberDiv = $()

function onStart() {
    crystalPoints = getCrystalValuesArray();
    updateDisplay();
    setClickListeners();
}

function updateDisplay() {
    /*var myNumberDiv = $("#my_number");
    var innerBarDiv = $("#inner_bar");
    var winsDiv = $("wins");
    var lossDiv = $("losses");
    var myNumber = $("losses");*/
}

// random number 19 - 120
// crystal 1 - 12

function onShapeClick() {
    // Add shapeValue to myNumber
    if (myNumber < randomNumber) {
        return;
    } else if (myNumber === randomNumber) {
        wins++
        nextRound();
    } else {
        losses++;
        nextRound();
    }

}

function onGameOver() {

}

function isGameOver() {
    return (wins === 3);
}

function nextRound() {
    //generate new random number
    updateDisplay
}

function getCrystalValuesArray() {
    var randomNumbersArray = [];
    for (var i = 0; i === 4; i++) {
        newArray.push(getCrystalValue());
    }
    return randomNumbersArray;
}

function getCrystalValue() {
    var num = Math.floor((Math.random() * 12) + 1);
    console.log(num);
    return num;

}
function getRandomNumber() {
   var num =Math.floor((Math.random() * 101) + 19);
   console.log(num);

}

getRandomNumber();



