let area = document.getElementById("area");
area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", sair);

function clicar() {
  area.innerHTML = "Clicou!";
  area.style.background = "red";
}
function entrar() {
  area.innerHTML = "Entrou";
}
function sair() {
  area.innerHTML = "Saiu";
  area.style.background = "green";
}
