const quizData = [
  {
    question: 'How old is Reuben?',
    a: '10',
    b: '17',
    c: '19',
    d: '33',
    correct: 'c'
  }, {
    question: 'What is the most popular programming language?',
    a: 'Java',
    b: 'Python',
    c: 'Javascript',
    d: 'C#',
    correct: 'b'
  }, {
    question: 'Who is the richest man in the world?',
    a: 'Jeff Bezos',
    b: 'Elon Musk',
    c: 'Bill gates',
    d: 'Warren Buffett',
    correct: 'a'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'JavaScript Object Notation',
    d: 'Application Programming Interface',
    correct: 'a'
  }, {
    question: 'What year was Javscript launched?',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd'
  }
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // Check to see the answer
  const answer = getSelected();

  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = 
        `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});