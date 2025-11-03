document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-proximo");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const proximoId = botao.getAttribute("data-proximo");
      const passoAtual = botao.parentNode;
      const proximoPasso = document.getElementById(`passo-${proximoId}`);

      // Esconde passo atual
      passoAtual.classList.remove("ativo");

      // Mostra o próximo
      if (proximoPasso) {
        proximoPasso.classList.add("ativo");
      }
    });
  });
});
