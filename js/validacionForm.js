// VALIDANDO EL FORMULARIO
let $forms = document.getElementById("contacto");
let $divVarios = document.querySelectorAll(".inputcaja label");
let $inputVarios = document.querySelectorAll(".inputVarios");
let $divPais = document.querySelector(".selectcaja");
let $selectPais = document.querySelector(".selectcaja select");
// ENVIANDO EMAIL
let $nombre = document.getElementById("0");
let $email = document.getElementById("1");
let $telefono = document.getElementById("2");
let $pais = document.getElementById("pais");
let $mensaje = document.getElementById("mensaje");
let $respuesta = document.querySelector(".respuesta");
let $btnEnviar = document.getElementById("enviar");
let $btnReset = document.getElementById("reset");

const expresiones = {
  0: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. Validacion de nombre
  1: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Validacion de email
  2: /^\d{7,14}$/, // 7 a 14 numeros. Validacion de telefono
  mensaje: 1000,
};

function focus() {
  if (document.forms.length > 0) {
    if (document.forms[0].elements.length > 0) {
      document.forms[0].elements[0].focus();
    }
  }
}

let val = 0;
function validarCampo(e) {
  let campo = e.target.id;
  //  e.preventDefault();
  //  validar(inputVarios, divVarios);
  if (expresiones[campo].test(e.target.value)) {
    e.target.style.borderBottom = "0.1rem solid #0c443a";
    $divVarios[campo].style.color = "var(--limon)";
    $divVarios[campo].style.top = "-0.5rem";
    $inputVarios[parseInt(campo)].disabled = true;
    if (campo < 2) {
      $inputVarios[parseInt(campo) + 1].disabled = false;
    } else if (campo == 2) {
      $pais.disabled = false;
    }
  } else {
    e.target.style.borderBottom = "0.1rem solid red";
    $divVarios[campo].style.color = "red";
  }
}

$nombre.addEventListener("blur", (e) => {
  validarCampo(e);
});
$email.addEventListener("blur", (e) => {
  validarCampo(e);
});
$telefono.addEventListener("blur", (e) => {
  validarCampo(e);
});
$pais.addEventListener("click", () => {
  if ($inputVarios[2].disabled == false) {
    $inputVarios[3].disabled = false;
  }
});
$pais.addEventListener("blur", (e) => {
  if (e.target.value != "") {
    $selectPais.style.color = "#333";
    e.target.style.borderBottom = "0.1rem solid #0c443a";
    $inputVarios[3].disabled = false;
  } else {
    $selectPais.style.color = "red";
    e.target.style.borderBottom = "0.1rem solid red";
  }
});
$mensaje.addEventListener("blur", (e) => {
  if (
    e.target.value.length >= 10 &&
    e.target.value.length <= expresiones.mensaje
  ) {
    e.target.style.borderBottom = "0.1rem solid #0c443a";
    $divVarios[3].style.color = "var(--limon)";
    $divVarios[3].style.top = "-0.5rem";
    val++;
  } else {
    e.target.style.borderBottom = "0.1rem solid red";
    $divVarios[3].style.color = "red";
  }
});

$btnEnviar.addEventListener("click", (el) => {
  el.preventDefault();
  if (val>0) {
    loadContact();
  }
});
$btnReset.addEventListener("click", () => {
  document.forms[0].elements[0].disabled = false;
  document.forms[0].elements[0].focus();
  $divVarios[0].style.color = "var(--verde)";
  $divVarios[0].style.fontSize = "1.7rem";
  $divVarios[0].style.margin = "1.5rem 0";
  $divVarios[0].style.padding = "0.5rem 0";
  $inputVarios[0].style.borderBottom = "0.1rem solid rgba(0, 0, 0, 0.1)";
});

