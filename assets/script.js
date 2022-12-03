var questions = document.querySelectorAll(".question")

var showQuestion = function (){
    for (var question of questions){
        if (questions.dataset.index != cursor)
        question.style.display = "none";
        
    }
}
 
  var advance = function() {
    if (cursor < questions.length - 1) {
      cursor++;
    }
    showQuestion();
  };
