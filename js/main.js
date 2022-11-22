function cargarPais() {
  var array = [
    "Afganistan",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita / Arabia Saudí",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Bangladés",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Bielorrusia",
    "Benín",
    "Birmania / Myanmar",
    "Bolivia",
    "Bosnia y Herzegovina / Bosnia-Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Catar",
    "República Centroafricana",
    "Chad",
    "República Checa / Chequia",
    "Chile",
    "China",
    "Chipre",
    "Colombia",
    "Comoras",
    "República del Congo",
    "República Democrática del Congo",
    "Corea del Norte",
    "Corea del Sur",
    "Costa de Marfil",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "República Dominicana",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Eritrea",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Etiopía",
    "Filipinas",
    "Finlandia",
    "Fiyi",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guinea",
    "Guinea-Bisáu",
    "Guinea Ecuatorial",
    "Guyana",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Irlanda",
    "Islandia",
    "Israel",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letonia",
    "Líbano",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Macedonia del Norte",
    "Madagascar",
    "Malasia",
    "Malaui",
    "Maldivas",
    "Mali / Malí",
    "Malta",
    "Marruecos",
    "Islas Marshall",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda / Nueva Zelandia",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaos",
    "Palestina",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "Ruanda",
    "Rumania / Rumanía",
    "Rusia",
    "Islas Salomón",
    "Samoa",
    "San Cristóbal y Nieves",
    "San Marino",
    "San Vicente y las Granadinas",
    "Santa Lucía",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Suazilandia / Esuatini",
    "Sudáfrica",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Tanzania",
    "Tayikistán",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Ciudad del Vaticano",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue",
  ];
  array.sort();
  addOptions("pais", array);
}
// Iniciar la carga de pais solo para comprobar que funciona
cargarPais();

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
  let pais = document.getElementById("pais");
  let selector = document.getElementsByName(domElement)[0];
  for (pais in array) {
    var opcion = document.createElement("option");
    opcion.text = array[pais];
    // Añadimos un value a los option para hacer mas facil escoger los pueblos
    opcion.value = array[pais].toLowerCase();
    selector.add(opcion);
  }
}

// ============== ENVIANDO EMAIL ===========
function loadContact() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "php/email_contacto.php", true);
  xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) { 
        $respuesta.textContent = "Tu mensaje se envío correctamente";
        $respuesta.classList.add("repuesta_ok");
//        $btnEnviar.value = "Enviado";
//        $btnEnviar.disabled = true;

/*         $("#exito_cont").show();
        $("#error_cont").hide();
        $("#validate_error").hide();
 */      } else {
        $respuesta.textContent = "No se pudo enviar el mensaje, intentalo nuevamente";
        $respuesta.classList.add("repuesta_error");
/*         $("#exito_cont").hide();
        $("#error_cont").show();
        $("#validate_error").hide();
 */      }
  };
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "first_name=" +
      $nombre +
      "&mail=" +
      $email +
      "&phone=" +
      $telefono +
      "&comment=" +
      $mensaje +
      ""
  );
}
// ============== ENVIANDO EMAIL ===== FIN =====

// ====== COMIENZA EL TIPEO DE CONTACTO ======
let contactoType = document.querySelector(".contactos h1");

window.addEventListener("scroll", () => {
  let altura = innerHeight / 1.3;
  let distancia = contactoType.getBoundingClientRect().top;
  if (distancia < altura) {
    contactoType.classList.add("heading");
    contactoType.textContent = "contacto";
    focus();
  } else {
    contactoType.classList.remove("heading");
    contactoType.textContent = "";
  }
});
// ====== COMIENZA EL TIPEO DE CONTACTO == FIN ===

// ESCONDER HEADER UNA VEZ SELECCIONADO ========
let input = document.querySelector("#menu-bar");
document.querySelector(".navbar").addEventListener("click", () => {
  input.checked = false;
});
// ESCONDER HEADER UNA VEZ SELECCIONADO == FIN ==