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
    updateDisplay();
    updatePointAttributValues();
    setClickListeners();
    //setUpListenersForWelcomeFade();
    $("#crystals_container").on("click", function (event) {
        $("#title").animate({ opacity: "0" }, 3000, "swing");
        $("#instructions").animate({ opacity: "0" }, 3000, "swing");
        $("#win_loss_container").animate({ opacity: "0" }, 3000, "swing");
        welcomeWinHoverListenersOn()
        $(this).off(event);

    });


}

function updateDisplay() {
    $("#my_number_bar").animate({ width: (Math.floor((myNumber / randomNumber) * 100) + "%") },200,'easeOutQuart');
    $("#my_number").html(myNumber);
    $("#random_number").html(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);



}

// random number 19 - 120
// crystal 1 - 12

function onShapeClick(pointValue) {
    myNumber += parseInt(pointValue, 10);
    if (myNumber < randomNumber) {
        updateDisplay();
    } else if (myNumber === randomNumber) {
        wins++;
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
    $("#win_loss_container").stop();
    $("#win_loss_container").animate({ opacity: "100" }, 500);
    $("#win_loss_container").animate({ opacity: "0" }, 3000);

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
    return randomNumbersArray;
}

function getCrystalValue() {
    var num = Math.floor((Math.random() * 12) + 1);
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

function welcomeWinHoverListenersOn() {
    
    console.log("welcomeHoverListenersOn")
    $("#welcome_container,#win_loss_container").hover(
        function () {
            $("#instructions").stop();
            $("#win_loss_container").stop();
            $("#instructions").animate({ opacity: "100" }, 500);
            $("#win_loss_container").animate({ opacity: "100" }, 500);
        },
        function () {
            $("#instructions").stop();
            $("#win_loss_container").stop();
            $("#instructions").animate({ opacity: "0" }, 500, 'easeOutQuart');
            $("#win_loss_container").animate({ opacity: "0" }, 500, 'easeOutQuart');
        }
    );

  



}

onStart();

