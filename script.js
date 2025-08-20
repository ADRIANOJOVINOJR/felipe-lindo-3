const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha importante cuidar da saúde mental e física?",
        alternativas: [
            {
                texto: "Sim, porque isso garante qualidade de vida.",
                afirmacao: "Você valoriza sua saúde e entende que ela será essencial para o futuro."
            },
            {
                texto: "Não, não vejo tanta importância.",
                afirmacao: "Você tende a negligenciar sua saúde, o que pode trazer desafios."
            }
        ]
    },
    {
        enunciado: "Você costuma pensar no futuro e se planejar?",
        alternativas: [
            {
                texto: "Sim, faço planos e metas.",
                afirmacao: "Você traça metas e organiza sua vida, aumentando suas chances de sucesso."
            },
            {
                texto: "Não, vivo só o presente.",
                afirmacao: "Você prefere viver o presente, deixando o futuro em aberto."
            }
        ]
    },
    {
        enunciado: "Você se considera uma pessoa resiliente (que não desiste fácil)?",
        alternativas: [
            {
                texto: "Sim, insisto até conseguir.",
                afirmacao: "Sua resiliência garante que, mesmo diante de obstáculos, você persista nos seus sonhos."
            },
            {
                texto: "Não, desisto rápido.",
                afirmacao: "Sua falta de resiliência pode dificultar conquistas, mas sempre há espaço para mudar."
            }
        ]
    },
    {
        enunciado: "Qual a sua relação com os estudos?",
        alternativas: [
            {
                texto: "Levo os estudos a sério, busco sempre aprender.",
                afirmacao: "Você investe no conhecimento, e isso abrirá muitas portas no seu futuro."
            },
            {
                texto: "Não gosto muito de estudar.",
                afirmacao: "Você pode ter dificuldades sem os estudos, mas ainda pode encontrar caminhos alternativos."
            }
        ]
    },
    {
        enunciado: "Você valoriza suas amizades?",
        alternativas: [
            {
                texto: "Sim, meus amigos são muito importantes.",
                afirmacao: "As amizades verdadeiras serão parte fundamental da sua caminhada no futuro."
            },
            {
                texto: "Não me importo muito com isso.",
                afirmacao: "A falta de vínculos pode te deixar mais solitário, mas também independente."
            }
        ]
    }
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
