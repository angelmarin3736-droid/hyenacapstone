

const apiKey = '5ANrlDwOCWj2KNXodXzT5IWaa5fSgoeaQMkOVOTa';

let questions = [];
let currentQuestion = 0;
let score = 0;

fetch("https://api.api-ninjas.com/v1/animals?name=hyena", {
headers:{
"X-Api-Key": apiKey
}
})
.then(response => response.json())
.then(data => {

let hyena = data[0];

questions = [

{
question: "Were do hyenas usually live?",
correct: hyena.locations[0],
options: ["Africa","Asia","Europe","Australia"]
},

{
question: "What diet does a hyena have?",
correct: hyena.characteristics.diet,
options: ["Carnivore","Herbivore","Omnivore","Insectivore"]
},

{
question: "What is a hyenas biggest threat?",
correct: hyena.characteristics.biggest_threat,
options: ["Humans","Lions","other hyenas","birds"]
}


];

showQuestion();

});

function showQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").innerText = q.question;

let buttons = "";

q.options.forEach(option => {

buttons += `<button onclick="checkAnswer('${option}')">${option}</button>`;

});

document.getElementById("answers").innerHTML = buttons;

}

function checkAnswer(answer){

let correct = questions[currentQuestion].correct;

if(answer === correct){

document.getElementById("result").innerText = "Correct!";
score++;

}
else{

document.getElementById("result").innerText =
"Wrong! Correct answer: " + correct;

}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

document.getElementById("result").innerText = "";
showQuestion();

}
else{

document.querySelector("quiz").innerHTML =
"<h2>Quiz Finished!</h2><p>Your score: "+score+"</p>";

}

}