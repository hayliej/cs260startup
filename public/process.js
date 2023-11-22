function options(optiona, optionb){
    lbutton=document.getElementById("leftButton");
    rbutton=document.getElementById("rightButton");
    lbutton.innerHTML=optiona;
    rbutton.innerHTML=optionb;
    leftButton = optiona;
    rightButton = optionb;
}

let ops = [];
let leftButton = "";
let rightButton = "";

function getOptions(){
    ops.push(localStorage.getItem("option1"));
    ops.push(localStorage.getItem("option2"));
    ops.push(localStorage.getItem("option3"));
    ops.push(localStorage.getItem("option4"));
    ops.push(localStorage.getItem("option5"));
    options(ops[0], ops[1]);
    ops.splice(0, 2)
    console.log(ops)
}

function choose(isleft){
if (ops.length===0){
    winner= "";
    if (isleft){
        winner=leftButton;
    }
    else {
        winner=rightButton;
    }
    localStorage.setItem("winner", winner);
    f(winner);
    window.location.href = "scores.html"
}
if (isleft) {
    options(leftButton, ops[0]);
}
else {
    options(ops[0], rightButton);
}
ops.splice(0, 1)
}

async function f (win){
    jsonthing = {winner : win, name : storedName, question : question}
    console.log(jsonthing.winner)
    const response = await fetch('/api/result', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(jsonthing),
  });}


function displayName() {
    const nameEl = document.querySelector("#name");
    if (storedName) {
      nameEl.textContent = storedName; //don't think this is working, not sure why yet
    } else {
      nameEl.textContent = "Login";
    }
  }
  const storedName = localStorage.getItem("userName");
  const question = localStorage.getItem('question')

function displayQ() {
  const questionEl = document.getElementById("questionDis");
  const storedQuestion = localStorage.getItem("question");
  console.log(questionEl)
  if (storedQuestion) {
    questionEl.textContent = storedQuestion;
  } else {
    questionEl.textContent = "no question";
  }
}
displayQ();
window.onload = displayName;