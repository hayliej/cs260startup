const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const opt5 = document.getElementById('opt5');

function submit() {
    const nameEl = document.querySelector("#count");
    localStorage.setItem("question", nameEl.value);
    displayQuestion();
    opt1.focus();
  }

  function displayQuestion() {
    const questionEl = document.querySelector("#questionDisplay");
    const storedQuestion = localStorage.getItem("question");
    if (storedQuestion) {
      questionEl.textContent = storedQuestion;
    } else {
      questionEl.textContent = "Submit a question";
    }
  }
  window.onload = displayQuestion;


  opt1.addEventListener('blur', function () {
    const nameEl = document.querySelector("#opt1");
    localStorage.setItem("option1", nameEl.value);
    opt2.focus();
  });
  opt2.addEventListener('blur', function () {
    const nameEl = document.querySelector("#opt2");
    localStorage.setItem("option2", nameEl.value);
    opt3.focus();
  });
  opt3.addEventListener('blur', function () {
    const nameEl = document.querySelector("#opt3");
    localStorage.setItem("option3", nameEl.value);
    opt4.focus();
  });
  opt4.addEventListener('blur', function () {
    const nameEl = document.querySelector("#opt4");
    localStorage.setItem("option4", nameEl.value);
    opt5.focus();
  });
  opt5.addEventListener('blur', function () {
    const nameEl = document.querySelector("#opt5");
    localStorage.setItem("option5", nameEl.value);
  });

  function displayName() {
    const nameEl = document.querySelector("#name");
    const storedName = localStorage.getItem("userName");
    console.log(storedName);
    if (storedName) {
      nameEl.textContent = storedName; //don't think this is working, not sure why yet
    } else {
      nameEl.textContent = "Login";
    }
  }
  window.onload = displayName;