function limpiarCampo() {
  let textoElement = document.getElementById("texto");
  let munieco = document.getElementById("munieco");
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");

  if (textoElement) {
    textoElement.value = "";
    munieco.src = "./img/muñeco.png"; // Restablecer la imagen al principio
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"; // Vuelve al texto principal
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; // vuelve a la solicitud de texto
  } else {
    console.error("No se pudo encontrar el elemento con ID 'texto'");
  }

}

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let munieco = document.getElementById("munieco");

  let textoCifrado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    munieco.src ="./img/encriptado.png";
  } else {
    munieco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}

  function desencriptar(){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

  let textoCifrado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    munieco.src ="./img/desencriptado.png";
  } else {
    munieco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}
