
//these are the quiz options
var questionDisplay = document.getElementById("question-display");
var option1 = document.getElementById("op1");
option1.style.visibility = "hidden"
var option2 = document.getElementById("op2");
option2.style.visibility = "hidden"
var option3 = document.getElementById("op3");
option3.style.visibility = "hidden"
var option4 = document.getElementById("op4");
option4.style.visibility = "hidden"
var startButton = document.getElementById("start-button");
var highScoreButton = document.getElementById("high-scores");
var timeEl = document.querySelector(".timer");
var optionsList = document.querySelector(".options-list");


//------------------------------ Question Array ------------------------------------
var questionArray = [
    {
        title: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "something something.",
        options: ["thing", "some", "something", "nothing"],
        answer: "something"

    },
    {
        title: "How do cat's display respect?",
        options: ["meowing", "hissing or growling", "bathing", "arching their tail"],
        answer: "arching their tail"
    },
    {
        title: "How do cats get comfortable?",
        options: ["meowing", "hissing or growling", "bathing", "arching their tail"],
        answer: "bathing"
    }
  ];


//*****important notes*****
//give additional points for answering questions faster (possibly create hidden timer that starts per iteration of questions to award bonus points)
  //if statement (if answer before hiddenTimer == 0, +5%)
//add button to access high scores from first page

//after quiz is complete, give prompt or possibly change page (for user to enter initials)

//store final score in local storage (possibly store within an arrray, displaying only up to .length of 10)
//list must display top score to bottom score (litterally)....possibly .sort
//bonus: sound bloops



//-------------------------- function to start quiz ---------------------------------
startButton.addEventListener("click", function() {
    console.log("happy thoughts");
    displayQuestions();
    setTime();
    startButton.style.visibility = "hidden";
    highScoreButton.style.visibility = "hidden";
})


//----------------------------------- Timer -----------------------------------------

var secondsLeft = 76; //starting seconds

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("All done!");
    }

  }, 1000);
}


//-------------------------------- Hidden Timer --------------------------------------
//completing an answer before this timer runs out gives a bonus to the score.
//timer initiates within every iteration of the questions.

var bonusSeconds = 7; //starting seconds

function setBonusTime() {
  var bonusTimerInterval = setInterval(function() {
    bonusSeconds--;
    console.log(bonusSeconds)

    if(secondsLeft === 0) {
      clearInterval(bonusTimerInterval);
    }

  }, 1000);

  //if statement: if answer given (eventlistener) happens before time = 0, double score.
}




// ------------------------------ Quiz Questions ------------------------------------

var score = 0;
var index = 0;
var scoreArray = []
var input;
function displayQuestions() {

    questionDisplay.textContent = questionArray[index].title;
    option1.textContent = questionArray[index].options[0];
    option2.textContent = questionArray[index].options[1];
    option3.textContent = questionArray[index].options[2];
    option4.textContent = questionArray[index].options[3];

    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    option4.style.visibility = "visible";

    option1.value = questionArray[index].options[0];
    option2.value = questionArray[index].options[1];
    option3.value = questionArray[index].options[2];
    option4.value = questionArray[index].options[3];

    setBonusTime()

};

//---------------------------- Question Checker ---------------------------------

//---------- button 1 ----------
option1.addEventListener("click", function(){
    console.log(option1.value);
    if (option1.value === questionArray[index].answer) {
        score = score + 10;
        if (bonusSeconds > 0){ score += 10;}
    }
    else {
        secondsLeft = secondsLeft - 15;
    }
    console.log(score);
    
    nextPage();
})
//---------- Button 2 ----------
option2.addEventListener("click", function(){
    if (option2.value === questionArray[index].answer) {
        score = score + 15;
        if (bonusSeconds > 0){ score += 10;}
    }
    else {
        secondsLeft = secondsLeft - 15;
    }
    nextPage();
})
//---------- Button 3 ----------
option3.addEventListener("click", function(){
    if (option3.value === questionArray[index].answer) {
        score = score + 15;
        if (bonusSeconds > 0){ score += 10;}
    }
    
    else {
        secondsLeft = secondsLeft - 15;
    }
    nextPage();
})
//---------- Button 4 ----------
option4.addEventListener("click", function(){
    if (option4.value === questionArray[index].answer) {
        score = score + 15;
        if (bonusSeconds > 0){ score += 10;}
    }
    else {
        secondsLeft = secondsLeft - 15;
    }
    nextPage();
})


//---------------------------- Next Page ---------------------------------

function nextPage() {
    index += 1;
    console.log(index);
    if (index === questionArray.length) {
        displayScore();
    }
    else {
        displayQuestions();
    }
}


//-------------------------- Display Score -------------------------------


var saveObject = {};
function displayScore() {

    secondsLeft = 1;


    option1.style.visibility = "hidden";
    option2.style.visibility = "hidden";
    option3.style.visibility = "hidden";
    option4.style.visibility = "hidden";

    var initials = prompt("Your final score is " + score + "/100" + ". Please enter your initials.");


    console.log(saveObject);
    console.log(saveObject_serialized);

    highScoreButton.style.visibility = "visible";
    startButton.style.visibility = "visible";
};


highScoreButton.addEventListener("click", function() {

});
