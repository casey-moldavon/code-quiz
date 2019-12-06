
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


var score = 0


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

    }
    ///etc.
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
      alert("time is up");
    }

  }, 1000);
}


//-------------------------------- Hidden Timer --------------------------------------
//completing an answer before this timer runs out gives a bonus to the score.
//timer initiates within every iteration of the questions.

var bonusSeconds = 5; //starting seconds

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

var index = 0;
var input;
function displayQuestions() {

    questionDisplay.textContent = questionArray[index].title;
    option1.textContent = questionArray[index].options[0];
    option2.textContent = questionArray[index].options[1];
    option3.textContent = questionArray[index].options[2];
    option4.textContent = questionArray[index].options[3];
    index ++;

    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    option4.style.visibility = "visible";

    if (index === questionArray.length - 1) {
        displayScore();
    }
    
};

optionsList.addEventListener("click", nextPage);



function nextPage() {
    console.log("Banana!");
    displayQuestions();


    if (questionArray[index].options[0] === questionArray[index].answer) {
        score ++;
    }
    else {
        secondsLeft = secondsLeft - 15;
    }
}

function displayScore() {
    option1.style.visibility = "hidden";
    option2.style.visibility = "hidden";
    option3.style.visibility = "hidden";
    option4.style.visibility = "hidden";

    prompt("Your final score is " + score + ".")
    

}    



    // function clickOption1(input){
    //     input = option1
    // };
    // function clickOption2(input){
    //     input = option2
    // };
    // function clickOption3(input){
    //     input = option3
    // };
    // function clickOption4(input){
    //     input = option4
    // };


//------------------------ next page -------------------------------------------

    // nextPage();

    // if (input === questionArray.answer) {
    //     score++;
    // };
    // else {
    //     secondsLeft = secondsLeft -15;
    // };





    // var input = //this variable represents the user's answer

    // if (input === questions.answer) {
    //     score ++;
    //     secondsLeft = secondsLeft + 15;
    // }
    // else {
    //     secondsLeft = secondsLeft - 15;
    // }

