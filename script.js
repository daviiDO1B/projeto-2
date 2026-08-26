// Array com as informações dos flashcards
const perguntas = [
  {
    titulo: "Espelho Côncavo",
    imagem: "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/imagens/concavo.png",
    resposta: "Junta os raios de luz no foco. Pode formar imagem real ou virtual (ex: espelho de maquiagem)."
  },
  {
    titulo: "Espelho Convexo",
    imagem: "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/imagens/convexo.png",
    resposta: "Espalha os raios de luz. A imagem é sempre menor, direta e virtual (ex: retrovisor de ônibus)."
  },
  {
    titulo: "Lente Convergente",
    imagem: "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/imagens/lente-convergente.png",
    resposta: "Mais grossa no meio. Reúne a luz em um ponto. É a lente usada na lupa e para corrigir hipermetropia."
  },
  {
    titulo: "Lente Divergente",
    imagem: "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/imagens/lente-divergente.png",
    resposta: "Mais fina no meio. Espalha os raios de luz. Serve para corrigir a miopia."
  }
];

let posicao = 0;

function atualizarCard() {
  const card = document.getElementById("card");
  card.classList.remove("virado");

  // Espera a animação de voltar antes de trocar o texto
  setTimeout(() => {
    document.getElementById("card-titulo").innerText = perguntas[posicao].titulo;
    document.getElementById("card-img").src = perguntas[posicao].imagem;
    document.getElementById("card-resposta").innerText = perguntas[posicao].resposta;
  }, 200);
}

function virarCard() {
  document.getElementById("card").classList.toggle("virado");
}

function proximoCard() {
  posicao = (posicao + 1) % perguntas.length;
  atualizarCard();
}

function cardAnterior() {
  posicao = (posicao - 1 + perguntas.length) % perguntas.length;
  atualizarCard();
}

// Carrega o primeiro card assim que abre a página
atualizarCard();