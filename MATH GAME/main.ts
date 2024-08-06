let playing = false;
let score: number;
let timeremaining: number;
let correctAnswer: number;
let action: number | undefined; // Define action variable

// if we click on the start/reset
document.getElementById("startreset")!.onclick = function () {
  // if we are playing
  if (playing) {
    location.reload(); // reload page
  } else {
    // change mode to playing
    playing = true;

    // set score to 0
    score = 0;
    document.getElementById("scorevalue")!.innerText = score.toString();

    // show countdown box
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue")!.innerText =
      timeremaining.toString();

    // hide game over box
    hide("gameOver");

    // change button to reset
    document.getElementById("startreset")!.innerText = "Reset Game";

    // start countdown
    startCountdown();

    // generate a new Q&A
    generateQA();
  }
};

// Clicking on an answer box
for (let i = 1; i < 5; i++) {
  (document.getElementById("box" + i) as HTMLElement).onclick = function () {
    // check if we are playing
    if (playing) {
      // yes
      if ((this as HTMLElement).innerText == correctAnswer.toString()) {
        // correct answer

        // increase score by 1
        score++;
        document.getElementById("scorevalue")!.innerText = score.toString();
        // hide wrong box and show correct box
        hide("wrong");
        show("correct");
        setTimeout(function () {
          hide("correct");
        }, 1000);

        // Generate new Q&A
        generateQA();
      } else {
        // wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function () {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

// Functions

// Start counter
function startCountdown() {
  action = setInterval(function () {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue")!.innerText =
      timeremaining.toString();
    if (timeremaining === 0) {
      // game over
      stopCountdown();
      show("gameOver");
      document.getElementById("gameOver")!.innerHTML =
        "<p>Game over!</p><p>Your score is " + score + ".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset")!.innerText = "Start Game";
    }
  }, 1000) as unknown as number;
}

// Stop counter
function stopCountdown() {
  if (action !== undefined) {
    clearInterval(action);
  }
}

// Hide an element
function hide(Id: string) {
  document.getElementById(Id)!.style.display = "none";
}

// Show an element
function show(Id: string) {
  document.getElementById(Id)!.style.display = "block";
}

// Generate question and multiple answers
function generateQA() {
  let x = 1 + Math.round(9 * Math.random());
  let y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;
  document.getElementById("question")!.innerText = x + "x" + y;
  let correctPosition = 1 + Math.round(3 * Math.random());
  (document.getElementById("box" + correctPosition) as HTMLElement).innerText =
    correctAnswer.toString();

  // fill other boxes with wrong answers
  let answers = [correctAnswer];

  for (let i = 1; i < 5; i++) {
    if (i !== correctPosition) {
      let wrongAnswer;
      do {
        wrongAnswer =
          (1 + Math.round(9 * Math.random())) *
          (1 + Math.round(9 * Math.random())); // a wrong answer
      } while (answers.includes(wrongAnswer));
      (document.getElementById("box" + i) as HTMLElement).innerText =
        wrongAnswer.toString();
      answers.push(wrongAnswer);
    }
  }
}

// Asynchronous function to save the score (assuming you have the corresponding backend setup)
async function saveScore(score: number) {
  // Implement the saving logic here, e.g., making a POST request to the server
}

// Asynchronous function to load the leaderboard (assuming you have the corresponding backend setup)
async function loadLeaderboard() {
  // Implement the loading logic here, e.g., making a GET request to the server
}
