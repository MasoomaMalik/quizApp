
var questionArray = [
    {
        question: "1. Pakistan Resolution was passed on ?",
        answer: "1940",
        options: ["1940", "1930", "1908"],
    },
  
    {

        question: "2. How many stanzas are there in Pakistan's national anthem ?",
        answer: "Three",
        options: ["Three", "Two", "Five"],
      question: "Pakistan Resolution was passed on ?",
      answer: "1940",
      options: ["1940", "1930", "1908"],
    },
  
    {
      question: "3. Pakistan came into being in ?",
      answer: "1947",
      options: ['1960', '1974', '1947'],
    },
  
    {
      question: "4. Biggest City of Paksitan?",
      answer: "Karachi",
      options: ['Karachi', 'Lahore', 'Quetta'],
    },
  
    {
      question: "5. National Animal of Pakistan",
      answer: "Markhor",
      options: ['Markhor', 'Lion', 'Fox'],
    },
  
    {
      question: "6. Largest Province of Pakistan",
      answer: "Balochistan",
      options: ['Punjab', 'Sindh', 'Balochistan'],
    },
  
    {
      question: "7. Which region receives the most rain",
      answer: 'Jhelum',
      options: ['Quetta', 'Karachi', 'Jhelum'],
    },
  
    {
      question: "8. First President of Pakistan",
      answer: "Iskander Mirza",
      options: ['Mr Jinnah', 'Liaquat Ali Khan', 'Iskander Mirza'],
    },
  
    {
      question: "9. First Prime Minister of Pakistan?",
      answer: 'Liaquat Ali Khan',
      options: ['Mr Jinnah', 'Liaquat Ali Khan', 'Iskander Mirza'],
    },
  
    {
      question: "10. Pakistan is located in ? ",
      answer: "Asia",
      options: ['Europq', 'Asia', 'China'],
    }
  
  ]
  
  var currentQuestion = 0;
var score = 0;
function showQuestion() {
    // show q
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionArray[currentQuestion].question;

    // show options
    var options = document.getElementsByClassName('options');
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = questionArray[currentQuestion].options[i];
    }
}
function displayResult() {
    // var fN=document.getElementById('fN')
    // var lN=document.getElementById('lN')
    // console.log(fN.value)
    alert(" you scored : " + score)
}
function nxtQuestion() {
    if (currentQuestion > questionArray.length - 1) {
        displayResult()
    } else {
        validate(currentQuestion);
        currentQuestion++;
        if (currentQuestion < questionArray.length)
            showQuestion(currentQuestion)
    }
    removeActive();
}

function putActive(e) {
    removeActive()
    e.classList.add("active")
}

function removeActive() {
    var active = document.getElementsByClassName('active');
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
    }
}
function validate(e) {
    // console.log("validate called");
    var active = document.getElementsByClassName('active');
    if (active[0].innerHTML == questionArray[e].answer) {
        score += 1;
    }
}
