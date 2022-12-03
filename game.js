buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];


function nextSequence(){
    randomNumber = Math.ceil( (Math.random() * 3) );
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).click(function(){
        let buttonAudio = new Audio("sounds/" + randomChosenColour + ".mp3");
        buttonAudio.play();
    });
;


}
nextSequence();