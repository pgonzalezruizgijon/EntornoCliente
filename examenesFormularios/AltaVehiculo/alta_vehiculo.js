// ===============================
// VARIABLES GLOBALES
// ===============================

let inputPropietario;
let inputMatricula;
let inputAnio;
let inputCoche;
let inputMoto;
let inputRevision;
let inputSeguro;
let inputCompania;
let inputObservaciones;


// ===============================
// INICIO
// ===============================

function iniciar() {
  obtenerReferenciaControles();
  asignaValidacionesHTML5();
  asignarEventos();

  document.querySelector("#enviar").addEventListener("click", validaFormulario);
}


// ===============================
// REFERENCIAS A CONTROLES
// ===============================

function obtenerReferenciaControles() {
  inputPropietario = document.querySelector("#inputPropietario");
  inputMatricula = document.querySelector("#inputMatricula");
  inputAnio = document.querySelector("#inputAnio");
  inputCoche = document.querySelector("#inputCoche");
  inputMoto = document.querySelector("#inputMoto");
  inputRevision = document.querySelector("#inputRevision");
  inputSeguro = document.querySelector("#inputSeguro");
  inputCompania = document.querySelector("#inputCompania");
  inputObservaciones = document.querySelector("#inputObservaciones");
}


// ===============================
// VALIDACIONES HTML5 DESDE JS
// ===============================

function asignaValidacionesHTML5() {
  inputPropietario.required = true;
  inputPropietario.maxLength = 40;

  inputMatricula.required = true;
  inputAnio.required = true;
  inputAnio.min = 1990;
  inputAnio.max = 2026;

  inputCoche.required = true;

  inputRevision.required = true;
}


// ===============================
// EVENTOS
// ===============================

function asignarEventos() {
  inputSeguro.addEventListener("change", cambioChkSeguro);
}


// ===============================
// CHECKBOX SEGURO
// ===============================

function cambioChkSeguro() {
  if (inputSeguro.checked) {
    inputCompania.disabled = false;
    inputCompania.required = true;
  } else {
    inputCompania.selectedIndex = 0;
    inputCompania.disabled = true;
    inputCompania.required = false;
    inputCompania.setCustomValidity("");
  }
}


// ===============================
// FUNCIONES DE VALIDACIÓN
// ===============================

function checkMatriculaValida(matricula) {
  let patronMatricula = /^[0-9]{4}[A-Z]{3}$/;
  return patronMatricula.test(matricula);
}

function checkFechaFutura(fecha) {
  let hoy = new Date();
  hoy.setHours(0);
  hoy.setMinutes(0);
  hoy.setSeconds(0);
  hoy.setMilliseconds(0);

  let fechaRevision = new Date(fecha);
  fechaRevision.setHours(0);
  fechaRevision.setMinutes(0);
  fechaRevision.setSeconds(0);
  fechaRevision.setMilliseconds(0);

  return fechaRevision.getTime() > hoy.getTime();
}


// ===============================
// VALIDACIÓN PRINCIPAL
// ===============================

function validaFormulario() {

  // -------------------------------
  // MATRÍCULA
  // -------------------------------

  inputMatricula.setCustomValidity("");

  let matricula = inputMatricula.value.trim().toUpperCase();

  if (matricula != "") {
    if (!checkMatriculaValida(matricula)) {
      inputMatricula.setCustomValidity("La matrícula debe tener formato 1234ABC");
    } else {
      inputMatricula.value = matricula;
    }
  }


  // -------------------------------
  // AÑO DEL VEHÍCULO
  // -------------------------------

  inputAnio.setCustomValidity("");

  if (inputAnio.value != "") {
    let anio = Number(inputAnio.value);

    if (anio < 1990 || anio > 2026) {
      inputAnio.setCustomValidity("El año debe estar entre 1990 y 2026");
    }
  }


  // -------------------------------
  // FECHA DE REVISIÓN
  // -------------------------------

  inputRevision.setCustomValidity("");

  if (inputRevision.value != "") {
    if (!checkFechaFutura(inputRevision.value)) {
      inputRevision.setCustomValidity("La fecha de revisión debe ser futura");
    }
  }


  // -------------------------------
  // SEGURO + COMPAÑÍA
  // -------------------------------

  inputCompania.setCustomValidity("");

  if (inputSeguro.checked) {
    if (inputCompania.selectedIndex == 0) {
      inputCompania.setCustomValidity("Debe seleccionar una compañía de seguro");
    }
  }
}


// ===============================
// ARRANQUE
// ===============================

addEventListener("load", iniciar);