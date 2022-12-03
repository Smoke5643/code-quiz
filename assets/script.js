var questions = document.querySelectorAll(".question");
var cursor = 0;

var showQuestion = function (){
    for (var question of questions){
      if (questions.dataset.index != cursor)
        question.style.display = "none";
        
    }
}
 
  var advance = function(event) {
    var element = event.event;
    
    if (element.matches('question')){
      if (cursor < questions.length - 1) {
        cursor++;
    }
  }
    showQuestion();
  };

  document.addEventListener('click', advance);

  showQuestion();
