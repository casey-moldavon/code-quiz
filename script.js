
//these are the quiz options
var questionDisplay = document.querySelector("#question-display");
var option1 = document.getElementById("op1");
var option2 = document.getElementById("op2");
var option3 = document.getElementById("op3");
var option4 = document.getElementById("op4");
var startButton = document.getElementById("start-button");
var timeEl = document.querySelector(".timer");
var score = 0


//-------------------------- function to start quiz ---------------------------------
startButton.addEventListener("click", function() {
    console.log("happy thoughts");
    quizQuestions();
    setTime();
    startButton.style.visibility = "hidden";
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


// ------------------------------ Quiz Questions ------------------------------------

function quizQuestions() {
    var index = 0
    questionDisplay = questions[0].title;
    option1 = questions[0].options[0];
    option2 = questions[0].options[1];
    option3 = questions[0].options[2];
    option4 = questions[0].options[3];
    index ++

    // var input = //this variable represents the user's answer

    // if (input === questions.answer) {
    //     score ++;
    //     secondsLeft = secondsLeft + 15;
    // }
    // else {
    //     secondsLeft = secondsLeft - 15;
    // }
};


var questions = [
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