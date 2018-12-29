var wins = 0;
var losses = 0;
var randomNumber = 0;
var crystalPoints = [];
var myNumber = 0;
var crystalValues = [];

//var myNumberDiv = $()

function onStart() {
    crystalPoints = getCrystalValuesArray();
    randomNumber = getRandomNumber();
    console.log("red number is" + randomNumber);
    updateDisplay();
    updatePointAttributValues();
    setClickListeners();
    console.log("caca");
}

function updateDisplay() {
    $("#my_number").html(myNumber);
    $("#random_number").html(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#my_number_bar").width(Math.floor((myNumber/randomNumber) * 100) + "%");

    console.log(myNumber);


}

// random number 19 - 120
// crystal 1 - 12

function onShapeClick(pointValue) {
    myNumber += parseInt(pointValue, 10);
    console.log(myNumber + " " + randomNumber);
    if (myNumber < randomNumber) {
        updateDisplay();
        console.log("myNumber is still Less");
    } else if (myNumber === randomNumber) {
        console.log("i won");
        wins++;
        nextRound();

    } else {
        losses++;
        console.log("i lost");
        nextRound();

    }

}

function onGameOver() {

}

function isGameOver() {
    return (wins === 3);
}

function nextRound() {
    console.log("nextRound()")
    randomNumber = getRandomNumber();
    myNumber = 0;
    crystalPoints = getCrystalValuesArray();
    updatePointAttributValues();
    updateDisplay();
}

function getCrystalValuesArray() {
    var randomNumbersArray = [];
    for (var i = 0; i < 4; i++) {
        randomNumbersArray.push(getCrystalValue());
    }
    console.log(randomNumbersArray);
    return randomNumbersArray;
}

function getCrystalValue() {
    var num = Math.floor((Math.random() * 12) + 1);
    //console.log(num);
    return num;

}
function getRandomNumber() {
    var num = Math.floor((Math.random() * 101) + 19);
    return num;

}

function setClickListeners() {
   
    $(".crystal").on("click", function () {
        onShapeClick($(this).attr("point_value"));
    })
}

function updatePointAttributValues() {
    $("#crystal_1").attr("point_value", crystalPoints[0]);
    $("#crystal_2").attr("point_value", crystalPoints[1]);
    $("#crystal_3").attr("point_value", crystalPoints[2]);
    $("#crystal_4").attr("point_value", crystalPoints[3]);


}

onStart();

