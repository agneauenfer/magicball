alert("Добро пожаловать, искатель истины и загадок! Позволь мне осветить тебе будущее и помочь раскрыть тайны твоей судьбы")

const answers = ["Насколько я понимаю, да", "Спросите снова позже", "Лучше не говорить вам сейчас", "Сейчас не могу предсказать", 
"Сосредоточься и спроси еще раз", "Не рассчитывайте на это", "Это точно", "Это определенно так", "Скорее всего", "Мой ответ - нет", 
"Мои источники говорят, что нет", "Перспективы не очень хорошие", "Перспективы хорошие", "Ответить туманно, попробуйте еще раз", 
"Знаки указывают на Да", "Очень сомнительно", "Без сомнения", "ДА", "Да, определенно", "Вы можете положиться на это"]

const question = document.getElementById("question");
const eight = document.getElementById("eight");
const answer = document.getElementById("answer");
const ball = document.getElementById("ball");

ball.addEventListener( "click", function(){
    if(question.value === ""){
        eight.innerText = "";
        answer.innerText = "Я не могу работать с этой информацией!";
    } else { 
        eight.innerText = "";
        let randomIndex = Math.floor(Math.random() * answers.length); 
        answer.innerText = answers[randomIndex];   
    }
    ball.classList.add("shake"); 
    answer.classList.add("fadeIn");  
})

ball.addEventListener("animationend", function(){
    ball.classList.remove("shake"); 
    answer.classList.remove("fadeIn");
}, false)