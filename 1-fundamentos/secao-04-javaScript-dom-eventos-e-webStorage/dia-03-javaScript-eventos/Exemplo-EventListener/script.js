const inputTexto = document.querySelector("#input-texto");
const divQuadrado = document.querySelector(".quadrado");

function corQuadrado() {
  divQuadrado.style.backgroundColor = inputTexto.value;
}

inputTexto.addEventListener("change", corQuadrado);