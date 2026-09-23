```javascript
/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
});


/* Fecha o menu ao clicar em um link */

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });

});


/* =========================
   QUIZ EDUCATIVO
========================= */

let currentQuestion = 0;
let positiveAnswers = 0;

const questions = document.querySelectorAll(".question");
const quizResult = document.getElementById("quizResult");
const resultText = document.getElementById("resultText");


function answer(value) {

    if (value === true) {
        positiveAnswers++;
    }

    questions[currentQuestion].classList.remove("active");

    currentQuestion++;

    if (currentQuestion < questions.length) {

        questions[currentQuestion].classList.add("active");

    } else {

        showResult();

    }

}


function showResult() {

    quizResult.style.display = "block";

    if (positiveAnswers === 0) {

        resultText.textContent =
            "Você não identificou sinais de alerta nas perguntas. " +
            "Mesmo assim, continue buscando informação e mantenha " +
            "atenção aos possíveis impactos das apostas.";

    } else if (positiveAnswers <= 2) {

        resultText.textContent =
            "Algumas respostas indicaram possíveis sinais de atenção. " +
            "Converse com alguém de confiança e procure informações " +
            "sobre prevenção e cuidado.";

    } else {

        resultText.textContent =
            "Suas respostas indicaram vários sinais que merecem atenção. " +
            "Considere conversar com um profissional de saúde. " +
            "O SUS oferece atendimento por meio das UBS, CAPS e " +
            "teleatendimento.";

    }

}


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   ANIMAÇÃO DOS CARDS
========================= */

const cards = document.querySelectorAll(
    ".news-card, .risk-card, .stat-card, .help-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity .5s ease, transform .5s ease";

    observer.observe(card);

});


/* =========================
   CONSOLE
========================= */

console.log(
    "Alerta Bet — campanha educativa sobre prevenção aos riscos das apostas."
);
```
