/*console.log("Bem-vindo ao meu portfólio!");
const titulo = document.querySelector("h1");
titulo.textContent = "Lucas Anjos - Desenvolvedor Back-End";

const botao = document.querySelector("#saudacao");
botao.addEventListener("click", function() {
  alert("Oi! Eu sou o Lucas e esse é meu portfólio 😄");
);
*/
const botaoModo = document.querySelector("#modo-escuro")

botaoModo.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    botaoModo.textContent = "Desativar modo escuro";
  } else {
    botaoModo.textContent = "Ativar modo escuro";
  }
});