var questions = document.querySelectorAll(".question");
var cursor = 0;
var correctAnswers = ["0", "1", "0", "2"];

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
    // console.log(element);
    if (element.matches('.question button')){
      var answer = element.dataset.choice === correctAnswers[cursor];
      console.log(element.dataset.choice);
      console.log(correctAnswers[cursor]);
      if (cursor < questions.length) {
        console.log(answer);
        cursor++;
    }
  }
    showQuestion();
  };

  document.addEventListener('click', advance);

  showQuestion();
