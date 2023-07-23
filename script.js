// Script para fechar a navegação após clicar em um link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => link.addEventListener("click", closeNav));

function closeNav() {
  const checkbox = document.getElementById("nav-toggle");
  checkbox.checked = false;
}
