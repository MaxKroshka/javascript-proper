/**
 * Created by BigHeart on 9/4/14.
 */

var allQuestions = [
    {question: "Who is the prime minister of United Kingdom", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],correctAnswer:0},
    {question: "What is the biggest state in United States?", choices: ["Alaska","California", "Texas", "Montana"], correctAnswer:0},
    {question: "Which of Canadian states is considered to be 'second France'", choices: ["Ontario","Nova Scotia", "Toronto", "Quebec"], correctAnswer:3,},
    {question: "What is the smallest country in Europe?", choices: ["Liechtenstein", "Monaco", "San Marino", "Vatican"], correctAnswer:3},
    {question: "Which german car brand has 4 rings as it's logo?", choices: ["BMW","Audi","Volkswagen", "Mercedes-Benz"],correctAnswer:1}];

$(document).ready(function() {
    var numberCorrect = 0;
    var questionNumber = 0;
    var displayQA = function () {
        if (questionNumber === allQuestions.length) {
            $("h2").text("Congratulations! You have finished the Quiz! Your score is " + numberCorrect + " points!");
            for (i = 0; i < 4; i++) {$("#a" + i).remove(); }
        } else {
            $("h2").text(allQuestions[questionNumber].question);
            for (i = 0; i < 4; i++) {
                $("#a" + i).html("<input type='radio' name='answer' value='" + i + "'>" + allQuestions[questionNumber].choices[i] + "</input>");
            }
        }
    };
    displayQA();
    $('#button').on('click','#text', function() {
        var userAnswer = +$('input[name=answer]:checked').val();
        var realAnswer = allQuestions[questionNumber].correctAnswer;
        if (userAnswer === realAnswer) {
            numberCorrect++;
            alert("You are right! Your score is " + numberCorrect + " points now!");
        }
        else {
            alert("You are wrong! Your score did not change and you still have " + numberCorrect + "!");
        }
        questionNumber++;
        displayQA();
    })
});

