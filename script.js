
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
//store final score in local storage
//hide elements that are not present (before start button is pressed)
//aftrer quiz is complete, give prompt or possibly change page (for user to enter initials)
//initials and score are stored in a list that pulls from local storage.
//list must display top score to bottom score (litterally).

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


// ------------------------------ Quiz Questions ------------------------------------

var index = 0;
var input;
function displayQuestions() {

    //not needed:
    // var ques = questionArray[index]
    // questionDisplay.innertext = ques.title;
    

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

//not done yet...
    // if (questionArray[index].options[0] === questionArray[index].answer) {
    //     score ++;
    // }
    // else {
    //     secondsLeft = secondsLeft -15;
    // }

    


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
};


function nextPage() {
    console.log("Banana!");
    displayQuestions();
}



    // var input = //this variable represents the user's answer

    // if (input === questions.answer) {
    //     score ++;
    //     secondsLeft = secondsLeft + 15;
    // }
    // else {
    //     secondsLeft = secondsLeft - 15;
    // }

