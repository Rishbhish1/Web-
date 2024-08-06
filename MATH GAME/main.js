var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var playing = false;
var score;
var timeremaining;
var correctAnswer;
var action; // Define action variable
// if we click on the start/reset
document.getElementById("startreset").onclick = function () {
    // if we are playing
    if (playing) {
        location.reload(); // reload page
    }
    else {
        // change mode to playing
        playing = true;
        // set score to 0
        score = 0;
        document.getElementById("scorevalue").innerText = score.toString();
        // show countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerText =
            timeremaining.toString();
        // hide game over box
        hide("gameOver");
        // change button to reset
        document.getElementById("startreset").innerText = "Reset Game";
        // start countdown
        startCountdown();
        // generate a new Q&A
        generateQA();
    }
};
// Clicking on an answer box
for (var i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        // check if we are playing
        if (playing) {
            // yes
            if (this.innerText == correctAnswer.toString()) {
                // correct answer
                // increase score by 1
                score++;
                document.getElementById("scorevalue").innerText = score.toString();
                // hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                // Generate new Q&A
                generateQA();
            }
            else {
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
        document.getElementById("timeremainingvalue").innerText =
            timeremaining.toString();
        if (timeremaining === 0) {
            // game over
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML =
                "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerText = "Start Game";
        }
    }, 1000);
}
// Stop counter
function stopCountdown() {
    if (action !== undefined) {
        clearInterval(action);
    }
}
// Hide an element
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}
// Show an element
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
// Generate question and multiple answers
function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerText = x + "x" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerText =
        correctAnswer.toString();
    // fill other boxes with wrong answers
    var answers = [correctAnswer];
    for (var i = 1; i < 5; i++) {
        if (i !== correctPosition) {
            var wrongAnswer = void 0;
            do {
                wrongAnswer =
                    (1 + Math.round(9 * Math.random())) *
                        (1 + Math.round(9 * Math.random())); // a wrong answer
            } while (answers.includes(wrongAnswer));
            document.getElementById("box" + i).innerText =
                wrongAnswer.toString();
            answers.push(wrongAnswer);
        }
    }
}
// Asynchronous function to save the score (assuming you have the corresponding backend setup)
function saveScore(score) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
// Asynchronous function to load the leaderboard (assuming you have the corresponding backend setup)
function loadLeaderboard() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
