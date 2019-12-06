var startButton = document.getElementById("start-button");
var questionList = document.getElementById('question-list');

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add('hide');
}

function nextQuestion() {
}

function selectAsnwer() {
}






var qA = document.getElementById("a");
var qB = document.getElementById("b");
var qC = document.getElementById("c");
var qD = document.getElementById("d");
var startGame = document.querySelector("#button");

var score = 0


for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response === questions[i].answer) {
        score ++;
        alert("Correct!");
    }
    else {
        alert("Wrong!");
    }
}
alert("You got " + score + "/" + questions.length);


// function questions() {
//     var index = 0
//     questions[0].title;
//     qA.innerHTML = questions[0].choices[0];
//     aB.innerHTML = questions[0].choices[1];
//     qC.innerHTML = questions[0].choices[2];
//     qD.innerHTML = questions[0].choices[3];
//     index ++
// };


var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];









//game starts with a score of 0 (display at end of game)
var score = 0;

    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);
  
        // Compare answers
        if ((answer === true && questions[i].a === "t") ||
          (answer === false && questions[i].a === "f")) {
          // Increase score
          score++;
          alert("Correct!");
        }
        else {
          alert("Wrong!");
        }
      }
  
      // Show total at end
      alert("You got " + score + "/" + questions.length);















//this event listener, upon click, will initiate the game
// //there ?is a function also connected to the button to start the timer (seperate function)
// startGame.addEventListener("click", function(){

// });

//timer function (will be initiated every time the use presses Next 15 seconds each)
// var c = 0;
// var t;
// var timer_is_on = 0;

// function timedCount() {
//   document.getElementById("txt").value = c;
//   c = c + 1;
//   t = setTimeout(timedCount, 1000);
// }

// function startCount() {
//   if (!timer_is_on) {
//     timer_is_on = 1;
//     timedCount();
//   }
// }

// function stopCount() {
//   clearTimeout(t);
//   timer_is_on = 0;
// }



