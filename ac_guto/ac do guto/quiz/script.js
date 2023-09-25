const questions = [
    {
        question: "Qual é o papel central desempenhado pela placa-mãe durante o processo de inicialização do computador?",
        options: ["A placa-mãe recebe energia da fonte de alimentação", "A placa-mãe pressiona o botão de ligar do computador.", "A placa-mãe fornece energia à fonte de alimentação.", "A placa-mãe coordena e controla todos os elementos do sistema"],
        correctAnswer: 3
    },
    {
        question: "Qual é o papel da memória ROM no processo de boot de um computador?",
        options: ["A memória ROM contém programas como BIOS ou UEFI que acordam o computador.", "A memória ROM é onde todas as operações são realizadas.", "A memória ROM armazena programas como jogos e o Windows.", "A memória ROM é usada para armazenar dados temporários."],
        correctAnswer: 0
    },
    {
        question: "O que é o POST (Power on Self Test) e qual é o seu objetivo durante o processo de inicialização do computador?",
        options: ["O POST é um conjunto de autotestes que verifica a qualidade da energia fornecida ao computador.", "O POST é um componente de hardware do computador que controla a CPU.", "O POST é um autoteste que verifica se todos os componentes do computador estão funcionando corretamente antes de permitir que o sistema operacional assuma o controle.", "O POST é um sistema operacional que assume o controle do computador após a inicialização."],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel do kernel do sistema operacional durante a inicialização do computador?",
        options: ["O kernel é responsável por carregar programas da memória RAM para o disco rígido.", "O kernel é um programa de interação direta com o usuário.", "O kernel é responsável por gerenciar recursos e configurar o ambiente do sistema operacional.", "O kernel é responsável por verificar a qualidade da energia fornecida ao computador."],
        correctAnswer: 2
    },
    {
        question: "Qual é a função principal do processamento em um computador?",
        options: ["O processamento envolve a execução de instruções de um programa, realização de cálculos, manipulação de dados e tomada de decisões lógicas.", "O processamento envolve a inicialização do sistema operacional.", "O processamento é responsável por verificar a qualidade da energia fornecida ao computador.", "O processamento é responsável por armazenar dados no disco rígido."],
        correctAnswer: 0
    },
    {
        question: "O que acontece quando você abre uma página no Google no seu navegador?",
        options: ["A página é gerada diretamente no seu dispositivo.", "O navegador processa os dados extensivamente nos servidores do Google.", "O processamento envolve a inicialização do sistema operacional.", "O nome de domínio é traduzido em um endereço IP."],
        correctAnswer: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const options = optionsContainer.querySelectorAll(".option");

    options.forEach((option, index) => {
        if (index === question.correctAnswer) {
            option.style.backgroundColor = "#4CAF50";
        } else {
            option.style.backgroundColor = "#FF5733";
        }
        option.disabled = true;
    });

    if (selectedIndex === question.correctAnswer) {
        score++;
        resultElement.textContent = "Resposta correta!";
    } else {
        resultElement.textContent = "Resposta incorreta.";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        showFinalScore();
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        button.classList.add("option");
        optionsContainer.appendChild(button);
    });
    resultElement.textContent = ""; 
}

loadQuestion();

function showFinalScore() {
    questionElement.textContent = "Quiz concluído!";
    optionsContainer.innerHTML = "";
    resultElement.textContent = "";
    scoreElement.textContent = `Pontuação: ${score}/${questions.length}`;
    nextButton.style.display = "none";
    restartButton.style.display = "block";

    let classification = "";
    if (score === questions.length) {
        classification = "Perfeito";
    } else if (score >= 4 && score <= 5) {
        classification = "Ótimo";
    } else if (score >= 2 && score <= 3) {
        classification = "Ok";
    } else {
        classification = "Ruim";
    }

    classificationElement.textContent = `Sua classificação foi: ${classification}`;
    classificationElement.style.fontWeight = "bold";
    scoreElement.insertAdjacentElement("afterend", classificationElement);
    classificationElement.style.display = "block";
}
let classificationElement = document.createElement("p");
classificationElement.style.display = "none";

nextButton.addEventListener("click", () => {
    loadQuestion();
    resultElement.textContent = "";
});

loadQuestion();

const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    restartButton.style.display = "none";
    loadQuestion();
    scoreElement.textContent = `Pontuação: ${score}/${questions.length}`;
    classificationElement.style.display = "none";
    nextButton.style.display = "block";
});