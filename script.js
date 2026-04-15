function mostrarMensagem() {
  document.getElementById("mensagem").style.display = "block";
}
function fugir(botao) {
  botao.style.position = "absolute";
  botao.style.top = Math.random() * 80 + "%";
  botao.style.left = Math.random() * 80 + "%";
}
const container = document.querySelector(".fundo-estrelado");

for (let i = 0; i < 50; i++) {
  const estrela = document.createElement("div");
  estrela.className = "estrela";

  estrela.style.left = Math.random() * 100 + "%";
  estrela.style.animationDuration = (Math.random() * 5 + 5) + "s";

  container.appendChild(estrela);
}