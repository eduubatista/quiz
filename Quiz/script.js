const questions = [
    
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o elemento químico com símbolo O?",
        options: ["Ouro", "Oxigênio", "Osmio", "Odin"],
        answer: "Oxigênio"
    },
    {
        question: "Em que ano a primeira guerra mundial começou?",
        options: ["1914", "1918", "1939", "1945"],
        answer: "1914"
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "O2", "H2O2"],
        answer: "H2O"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        answer: "Pacífico"
    },
    {
        question: "Qual artista pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Quem foi o primeiro homem a pisar na lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Sahara", "Gobi", "Antártico", "Arábia"],
        answer: "Antártico"
    },
    {
        question: "Qual é o país com a maior população do mundo?",
        options: ["Índia", "Estados Unidos", "China", "Brasil"],
        answer: "China"
    },
    {
        question: "Qual é o capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madri"],
        answer: "Paris"
    },
    {
        question: "Qual é o menor país do mundo?",
        options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
        answer: "Vaticano"
    },
    {
        question: "Quem é o autor de 'O Senhor dos Anéis'?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Vênus", "Marte", "Mercúrio", "Terra"],
        answer: "Mercúrio"
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Quem é o deus do trovão na mitologia nórdica?",
        options: ["Thor", "Loki", "Odin", "Freyr"],
        answer: "Thor"
    },
    {
        question: "Qual é a capital da Itália?",
        options: ["Roma", "Milão", "Veneza", "Nápoles"],
        answer: "Roma"
    },
    {
        question: "Quem foi o líder do movimento pela independência da Índia?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante", "Girafa", "Rinoceronte", "Búfalo"],
        answer: "Elefante"
    },
    {
        question: "Qual é a língua mais falada do mundo?",
        options: ["Inglês", "Mandarim", "Espanhol", "Árabe"],
        answer: "Mandarim"
    },
    {
        question: "Qual é o nome do famoso detetive criado por Arthur Conan Doyle?",
        options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"],
        answer: "Sherlock Holmes"
    },
    {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["Estados Unidos", "China", "Brasil", "Rússia"],
        answer: "Rússia"
    },
    {
        question: "Quem pintou 'A Última Ceia'?",
        options: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Caravaggio"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o maior lago do mundo por volume de água?",
        options: ["Lago Baikal", "Lago Superior", "Lago Vitória", "Lago Ontário"],
        answer: "Lago Baikal"
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["K2", "Kangchenjunga", "Everest", "Makalu"],
        answer: "Everest"
    },
    {
        question: "Qual é o nome do famoso ator que interpretou Jack Dawson em 'Titanic'?",
        options: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise"],
        answer: "Leonardo DiCaprio"
    },
    {
        question: "Qual é o nome do maior festival de música do mundo?",
        options: ["Coachella", "Glastonbury", "Tomorrowland", "Rock in Rio"],
        answer: "Glastonbury"
    },
    {
        question: "Qual é a principal fonte de energia solar na Terra?",
        options: ["Carvão", "Petroleo", "Sol", "Gás Natural"],
        answer: "Sol"
    },
    {
        question: "Quem foi o famoso físico que desenvolveu a teoria da relatividade?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileu Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Qual é a cidade conhecida como 'Cidade do Sol'?",
        options: ["São Paulo", "Brasília", "Salvador", "Rio de Janeiro"],
        answer: "Salvador"
    },
    {
        question: "Qual é o nome do primeiro livro da Bíblia?",
        options: ["Gênesis", "Êxodo", "Levítico", "Números"],
        answer: "Gênesis"
    },
    {
        question: "Qual é o sistema operacional desenvolvido pela Microsoft?",
        options: ["MacOS", "Linux", "Windows", "Android"],
        answer: "Windows"
    },
    {
        question: "Qual é o principal gás encontrado na atmosfera terrestre?",
        options: ["Oxigênio", "Hélio", "Nitrogênio", "Dióxido de Carbono"],
        answer: "Nitrogênio"
    },
    {
        question: "Quem é conhecido como o pai da psicanálise?",
        options: ["Carl Jung", "Sigmund Freud", "Wilhelm Wundt", "Ivan Pavlov"],
        answer: "Sigmund Freud"
    },
    {
        question: "Qual é a cor da bandeira nacional da Alemanha?",
        options: ["Azul, Branco e Vermelho", "Verde, Amarelo e Azul", "Preto, Vermelho e Amarelo", "Vermelho, Branco e Azul"],
        answer: "Preto, Vermelho e Amarelo"
    },
    {
        question: "Qual é o livro mais vendido de todos os tempos?",
        options: ["Dom Quixote", "A Bíblia", "Harry Potter e a Pedra Filosofal", "O Senhor dos Anéis"],
        answer: "A Bíblia"
    },
    {
        question: "Qual é o nome do famoso físico que inventou a lei da gravitação universal?",
        options: ["Galileu Galilei", "Isaac Newton", "Nicolas Copérnico", "Johannes Kepler"],
        answer: "Isaac Newton"
    },
    {
        question: "Qual é a capital da Espanha?",
        options: ["Barcelona", "Valência", "Madrid", "Sevilha"],
        answer: "Madrid"
    },
    {
        question: "Qual é o nome do rio que atravessa o Egito?",
        options: ["Nilo", "Mississippi", "Amazonas", "Yangtze"],
        answer: "Nilo"
    },
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};