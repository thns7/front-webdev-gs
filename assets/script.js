document.addEventListener("DOMContentLoaded", function () {
const quizContainer = document.getElementById('quiz');

const questions = [
  {
    question: "O que é uma enchente?",
    options: [
      "Acúmulo de água por chuvas em áreas elevadas",
      "Transbordamento de rios ou acúmulo de água em áreas urbanas",
      "Subida do nível do mar em áreas costeiras",
      "Fenômeno natural causado por terremotos"
    ],
    answer: 1
  },
  {
    question: "Qual das alternativas pode causar enchentes urbanas?",
    options: [
      "Solo permeável",
      "Sistema de esgoto eficiente",
      "Excesso de vegetação",
      "Impermeabilização do solo"
    ],
    answer: 3
  },
  {
    question: "Qual é uma medida preventiva contra enchentes?",
    options: [
      "Desmatamento",
      "Construção em encostas",
      "Limpeza de bueiros",
      "Cobrir nascentes"
    ],
    answer: 2
  },
  {
    question: "As enchentes afetam mais:",
    options: [
      "Regiões montanhosas com baixa densidade",
      "Áreas planas e urbanizadas com pouca drenagem, e comunidades vulneráveis",
      "Zonas desérticas",
      "Áreas agrícolas afastadas de rios"
    ],
    answer: 1
  },
  {
    question: "Quais impactos sociais as enchentes causam?",
    options: [
      "Apenas prejuízos financeiros",
      "Aumento da biodiversidade",
      "Deslocamento de pessoas e perda de vidas",
      "Melhoria na qualidade do ar"
    ],
    answer: 2
  },
  {
    question: "O que voce deve fazer para evitar enchentes?",
    options: [
      "jogar lixo na rua",
      "Tampar os bueiros com cimento para nao entrar ratos",
      "Evitar jogar lixo na rua",
      "Lavar o carro todo dia"
    ],
    answer: 2
  },
  {
    question: "Qual tecnologia pode ajudar no monitoramento de enchentes?",
    options: [
      "Impressoras 3D",
      "Sensores de chuva, e de prevenção",
      "Fogões solares",
      "Câmeras de segurança convencionais"
    ],
    answer: 1
  },
  {
    question: "Qual a importância do reflorestamento?",
    options: [
      "Melhorar absorção da água",
      "Diminuir o número de animais",
      "Aumentar o calor urbano",
      "Causar alagamentos naturais"
    ],
    answer: 0
  },
  {
    question: "O lixo nas ruas contribui para enchentes?",
    options: [
      "Não",
      "Sim, pois entope bueiros nas areas urbanas",
      "sim, Apenas em áreas rurais",
      "Somente em épocas secas"
    ],
    answer: 1
  },
  {
    question: "Durante uma enchente, o que NÃO se deve fazer?",
    options: [
      "Evitar contato com água",
      "Dirigir nas ruas",
      "Ficar em locais altos e seguros",
      "Atravessar ruas alagadas"
    ],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const quizSection = document.getElementById('quiz');
  quizSection.classList.add('show');
  quizSection.style.display = 'block';

  setTimeout(() => {
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);

  showQuestion();
}



function showQuestion() {
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    <ul>
      ${q.options.map((option, index) => `
        <li><button onclick="selectAnswer(${index})">${option}</button></li>
      `).join('')}
    </ul>
  `;
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  let message = "";
  let color = "";

  if (score >= 8) {
    message = " Você tem bastante conhecimento sobre enchentes.";
    color = "#d4edda"; 
  } else if (score >= 6) {
    message = " Você tem um conhecimento moderado sobre enchentes.";
    color = "#fff3cd"; 
  } else {
    message = " Você tem pouco conhecimento sobre enchentes.";
    color = "#f8d7da"; 
  }

  quizContainer.innerHTML = `
    <div class="result-box" style="
      background-color: ${color};
      padding: 3vh;
      border-radius: 2vh;
      text-align: center;
      animation: fadeIn 0.6s ease-in-out;
    ">
      <h2 style="font-size: 3.5vh; margin-bottom: 2vh;">Quiz Finalizado</h2>
      <p style="font-size: 2.5vh;">Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.</p>
      <p style="font-size: 2.3vh; margin-top: 2vh; margin-bottom: 5vh">${message}</p>
      <a style="
        
        padding: 1.5vh 2vw;
        background-color: #E04444;
        color: white;
        border: none;
        border-radius: 1vh;
        cursor: pointer;
        text-decoration:none;
      " href="#">Refazer Quiz</a>
    </div>
  `;
}



  
  const header = document.querySelector('header');


  if (header) {
    setTimeout(() => {
      header.classList.add('appear');
    }, 200);
  }

  
  const faixa = document.querySelector('.slide-faixa');
  const slides = document.querySelectorAll('.slide');

  if (faixa && slides.length > 0) {
    let currentIndex = 0;

    function mostrarSlide() {
      const offset = -currentIndex * 100;
      faixa.style.transform = `translateX(${offset}%)`;
      currentIndex = (currentIndex + 1) % slides.length;
    }

    setInterval(mostrarSlide, 4000);
  }
});

