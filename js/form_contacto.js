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

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
  var selector = document.getElementsByName(domElement)[0];
  for (pais in array) {
    var opcion = document.createElement("option");
    opcion.text = array[pais];
    // Añadimos un value a los option para hacer mas facil escoger los pueblos
    opcion.value = array[pais].toLowerCase();
    selector.add(opcion);
  }
}

/* function cargarPueblos() {
  // Objeto de pais con pueblos
  var listaPueblos = {
    cantabria: ["Laredo", "Gama", "Solares", "Castillo", "Santander"],
    asturias: ["Langreo", "Villaviciosa", "Oviedo", "Gijon", "Covadonga"],
    galicia: ["Tui", "Cambados", "Redondella", "Porriño", "Ogrove"],
    andalucia: ["Dos Hermanas", "Écija", "Algeciras", "Marbella", "Sevilla"],
    extremadura: ["Caceres", "Badajoz", "Plasencia", "Zafra", "Merida"],
  };

  var pais = document.getElementById("pais");
  var pueblos = document.getElementById("pueblo");
  var paisSeleccionado = pais.value;

  // Se limpian los pueblos
  pueblos.innerHTML = '<option value="">Seleccione un Pueblo...</option>';

  if (paisSeleccionado !== "") {
    // Se seleccionan los pueblos y se ordenan
    paisSeleccionado = listaPueblos[paisSeleccionado];
    paisSeleccionado.sort();

    // Insertamos los pueblos
    paisSeleccionado.forEach(function (pueblo) {
      let opcion = document.createElement("option");
      opcion.value = pueblo;
      opcion.text = pueblo;
      pueblos.add(opcion);
    });
  }
}
 */
// Iniciar la carga de pais solo para comprobar que funciona
cargarPais();
var pais = document.getElementById("pais");
let $btnEnviar = document.getElementById("enviar");

// VALIDANDO EL FORMULARIO
let $inputVarios = document.querySelectorAll(".inputVarios");
let $divVarios = document.querySelectorAll(".inputcaja");
let $div = document.querySelector(".contactos");
let $selectPais = document.querySelector(".selectcaja select");
let $divPais = document.querySelector(".selectcaja");

/* function showError(inputVarios, show = true) {
  if (show) {
    inputVarios.style.borderColor = "red";
  } else {
    inputVarios.style.borderBottom = "0.1rem solid rgba(0, 0, 0, 0.1)";
  }
}
*/
function validar(inputVarios, divVarios) {
  if (inputVarios.value.length < 5) {
    divVarios.classList.add("validar");
  } else {
    divVarios.classList.remove("validar");
    divVarios.classList.add("validate");
  }
}

function selectPaisValidar() {
  if ($selectPais.value == "") {
    $divPais.classList.add("validar");
  } else {
    $divPais.classList.remove("validar");
  }
}

//ACCIONANDO BOTON FORMULARIO
$btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  selectPaisValidar();
  for (let i = 0; i < $divVarios.length; i++) {
    validar($inputVarios[i], $divVarios[i]);
  }
});

// ====== COMIENZA EL TIPEO DE CONTACTO ======
let contactoType = document.querySelector(".contactos h1");

window.addEventListener("scroll", () => {
  let altura = innerHeight / 1.3;
  let distancia = contactoType.getBoundingClientRect().top;
  if (distancia < altura) {
    contactoType.classList.add("heading");
    contactoType.textContent="contacto";
  }
  else {
    contactoType.classList.remove("heading");
    contactoType.textContent="";
  }
})
// ====== COMIENZA EL TIPEO DE CONTACTO == FIN ===

// ESCONDER HEADER UNA VEZ SELECCIONADO ========
let aHeader = document.querySelector(".navbar");
let input = document.querySelector("#menu-bar");
aHeader.addEventListener("click", (e) => {
  input.checked = false;
});
// ESCONDER HEADER UNA VEZ SELECCIONADO == FIN ==
