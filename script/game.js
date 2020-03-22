var arrVar = ['butt parasite','tongue eating','horsehair warm'];
var question = document.querySelector('#question');
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var yourparasite = document.querySelector("#yourParasite");
var gameresult = document.querySelector("#gameOption");

// var obj0 = { questions: 'which food do you prefer?', 
//     answer1: 'shrimp',
//     answer2: 'noodle',
// };

// var obj1 = { questions: 'where do you prefer to have vacation?', 
//     answer1: 'ocean',
//     answer2: 'mountain',
// };

// var obj2 = { questions: 'what type of horror scared you the most', 
//     answer1: 'ghost',
//     answer2: 'serial killer',
// };

var Q_A = [
    {questions: 'which food do you prefer?', 
        answer1: 'shrimp',
        answer2: 'noodle',
    },
    { questions: 'where do you prefer to have vacation?', 
        answer1: 'ocean',
        answer2: 'mountain',
    },
    { questions: 'what type of horror scared you the most', 
    answer1: 'ghost',
    answer2: 'serial killer',
    }]

var finalAnswer = "";
 
function result() {
    gameresult.style.display = "none";
    console.log(finalAnswer);
    if (finalAnswer === '111' || finalAnswer === '121' ) {
        yourparasite.innerHTML="butt";
    } else if (finalAnswer === '211' || finalAnswer === '222'){
        yourparasite.innerHTML='tougne';
    }
    else{
        yourparasite.innerHTML='horsehair';
    }
};

function startGame() {
    if (Q_A.length === 0) { // 000 is equal to 
        result();
    } else {
        var obj0 = Q_A.pop();
  question.innerHTML= obj0.questions; // innerHTML is used for h or p tags
  answer1.textContent = obj0.answer1; // textContent is used for button 
  answer2.textContent = obj0.answer2; 
    }
//  var obj0 = Q_A.pop();
//   question.innerHTML= obj0.questions; // innerHTML is used for h or p tags
//   answer1.textContent = obj0.answer1; // textContent is used for button 
//   answer2.textContent = obj0.answer2; 
};

startGame();

answer1.addEventListener("click", function() {
    finalAnswer = finalAnswer.concat('1');
    startGame();
    
});

answer2.addEventListener("click", function() {
    // console.log("hello2");
    finalAnswer = finalAnswer.concat('2');
    startGame();
    
});