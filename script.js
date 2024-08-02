const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual as seguintes afirmações é verdadeira sobre a relação entre a conservação da biodiversidade, florestas e água",
        alternativas: [
            {
                texto: "A conservação das florestas e a gestão sustentavél dos recursos hidricos são essenciais para a conservação da biodiversidade.",
                afirmacao: "A conservação das florestas e a gestão sustentavel dos recursos hídricos são fundamentais para a biodiversidade, pois as florestas fornecem habitats, essenciais e regulam a água. "
            },
            {
                texto: "A conservação da biodiversidade pode ser alcançada independente da saúde das florestas e da gestão dos resursos hídricos.",
                afirmacao: "A conservação da biodiversidade não pode ser alcançada sem considerar a saúde das florestas e a gestão dos recursos hídricos."
            }
        ]
    },
    {
        enunciado: "Como a conservação das florestas pode impactar a biodiversidade e os recursos hídricos em uma região?",
        alternativas: [
            {
                texto: "A região implementa politicas rigorosas de conservação florestal",
                afirmacao: "Isso ai protege os habitates naturais, promovendo a bio diveridade."
            },
            {
                texto: "A região permite o desmatamento para atividades economicas.",
                afirmacao: "Prtejudica o ciclo da água causando erosão, deterioração da qualidade e diminuição dos recursos hídricos"
            }
        ]
    },
    {
        enunciado: "Qual das afirmações abaixo esta correta em relação a conservação da biodiversidade, floresta e água?",
        alternativas: [
            {
                texto: "O desmatamento da floresta pode contribuir para a biodiversidade e equilibrio hidrico.",
                afirmacao: "A alternativa esta incorreta, pois o desmatamento de florestas tem um impacto negativo na biodiversidade, levandio a perda de habitats e a extinção de espécies."
            },
            {
                texto: "A preservação das florestas é essencial para a conservação da biodiversidade e a regulação do ciclo da água.",
                afirmacao: "As preservação das florestas é fundamental para a conservação da biodiversidade, pois as florestas são habitats naturais de inumeras espécies de plantas e animais, contribuindo para a manutenção da diversidade biológica. ."
            }
        ]
    },
    {
        enunciado: "De que maneiras o plantio e a conservação de árvores nativas podem contribuir para a preservação da biodiversidade em áreas urbanas e rurais?",
        alternativas: [
            {
                texto: "O plantio de árvores nativas ajuda a criar habitats naturais que suportam a vida de várias espécies de plantas e animais, promovendo a biodiversidade",
                afirmacao: "Plantar árvores nativas aumenta a disponibilidade de recursos naturais específicos, como frutos e abrigos, essenciais para a sobrevivencia de diversas espécies locais."
            },
            {
                texto: "A conservação de árvores nativas em areas urbanas e rurais melhora a qualidade do solo e da água, proporcionando um ambiente mais saudável para a vida selvagem local.",
                afirmacao: "Manter árvores nativas preserva as redes tróficas locais, pois suas raízes e folhas  contribuem para a fertilidade do solo e a purificação da água, beneficiando toda a cadeia alimentar."
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();