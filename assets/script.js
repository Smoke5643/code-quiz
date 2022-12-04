var questions = document.querySelectorAll(".question");
var cursor = 0;
var correctAnswers = ["0", "1", "0", "2"];
var countdownEl = document.getElementById('timer');


var showQuestion = function (){
    for (var question of questions){
      if (question.dataset.index != cursor){
      question.style.display = "none";
      }else{
      question.style.display = "block";
      }
    }
}
 
  var advance = function(event) {
    var element = event.target;
    if (element.matches('.question button')){
      var answer = element.dataset.answer === correctAnswers[cursor];
      
    
      
      if (cursor < questions.length) {
        cursor++;
          if  (answer === true)
        alert = "Correct!"
       } else{
        alert = "Incorrect!"
       
        // timer reduction here
    }
  }
    showQuestion();
}



function showTime(seconds) {
  countdownEl.textContent = "Time Remaining: " + seconds;
 } 

 function countdown() {
    var startTime = 10;  
   showTime(startTime);
   var timeInterval = setInterval(function () {
    startTime--;
    showTime(startTime);
    if (startTime === 0) {
      clearInterval(timeInterval);
      // displayMessage();
      countdownEl.textContent = "";
   }
  }, 1000);
}

countdown();

  document.addEventListener('click', advance);

  showQuestion();
