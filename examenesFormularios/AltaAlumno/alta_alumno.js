// 🔹 VARIABLES GLOBALES
// Guardamos aquí los inputs para poder usarlos en todo el código
let inputNombre;
let inputSexoH;
let inputSexoM;
let inputEdad;
let inputFecha;
let inputSemana;
let inputDeportista;
let inputDeporte;
let inputObservaciones;


// 🔥 FUNCIÓN PRINCIPAL (SE EJECUTA AL CARGAR LA PÁGINA)
function iniciar() {
  // Cogemos referencias a los elementos del HTML
  obtenerReferenciaControles();

  // Asignamos validaciones HTML5 desde JS
  asignaValidacionesHTML5();

  // Asignamos eventos (checkbox, etc.)
  asignarEventos();

  // Evento principal: cuando se pulsa enviar
  document.querySelector("#enviar").addEventListener("click", validaFormulario);
}


// 🔹 OBTENER REFERENCIAS A LOS CONTROLES
// Aquí enlazamos cada variable con su input del HTML
function obtenerReferenciaControles() {
  inputNombre = document.querySelector("#minombre");
  inputSexoH = document.querySelector("#misexo_h");
  inputSexoM = document.querySelector("#misexo_m");
  inputEdad = document.querySelector("#miedad");
  inputFecha = document.querySelector("#mifecha");
  inputSemana = document.querySelector("#misemana");
  inputDeportista = document.querySelector("#mideportista");
  inputDeporte = document.querySelector("#mideporte");
  inputObservaciones = document.querySelector("#miobservaciones");
}


// 🔹 VALIDACIONES HTML5
// Se hacen aquí para no ponerlas en el HTML (como hace el profe)
function asignaValidacionesHTML5() {

  // 🔸 NOMBRE
  inputNombre.required = true;   // obligatorio
  inputNombre.maxLength = 30;    // máximo 30 caracteres

  // 🔸 SEXO
  inputSexoH.required = true;    // obligatorio seleccionar uno

  // 🔸 EDAD
  inputEdad.required = true;
  inputEdad.min = 0;
  inputEdad.max = 120;

  // 🔸 FECHA
  inputFecha.required = true;

  // 🔸 SEMANA
  inputSemana.required = true;
}


// 🔹 EVENTOS
function asignarEventos() {

  // 🔸 CHECKBOX DEPORTISTA
  // Cuando cambia → activamos o desactivamos el select
  inputDeportista.addEventListener("change", cambioChkDeportista);
}


// 🔹 CHECKBOX → ACTIVA/DESACTIVA SELECT
function cambioChkDeportista() {

  if (inputDeportista.checked) {
    // Si está marcado → activamos select
    inputDeporte.disabled = false;
    inputDeporte.required = true;
  } else {
    // Si no → desactivamos
    inputDeporte.selectedIndex = 0;
    inputDeporte.disabled = true;
    inputDeporte.required = false;

    // Quitamos errores si había
    inputDeporte.setCustomValidity("");
  }
}


// 🔹 CALCULAR EDAD A PARTIR DE FECHA
function calculaEdad(fechaNacimiento) {

  let hoy = new Date();

  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

  // Ajustamos si aún no ha cumplido años
  if (
    hoy.getMonth() < fechaNacimiento.getMonth() ||
    (hoy.getMonth() == fechaNacimiento.getMonth() &&
      hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
}


// 🔥 VALIDACIÓN PRINCIPAL
function validaFormulario() {

  // =========================
  // 🔸 EDAD (INPUT NUMÉRICO)
  // =========================
  inputEdad.setCustomValidity("");

  if (inputEdad.value != "") {
    if (Number(inputEdad.value) < 18) {
      inputEdad.setCustomValidity("Debe tener al menos 18 años");
    }
  }


  // =========================
  // 🔸 FECHA NACIMIENTO
  // =========================
  inputFecha.setCustomValidity("");

  let fechaStr = inputFecha.value;

  if (fechaStr != "") {

    let fechaNacimiento = new Date(fechaStr);

    let edadCalculada = calculaEdad(fechaNacimiento);

    if (edadCalculada < 18) {
      inputFecha.setCustomValidity("Debe ser mayor de edad según la fecha de nacimiento");
    }
  }


  // =========================
  // 🔸 DEPORTISTA + SELECT
  // =========================
  inputDeporte.setCustomValidity("");

  if (inputDeportista.checked) {

    // Si es deportista → debe elegir opción
    if (inputDeporte.selectedIndex == 0) {
      inputDeporte.setCustomValidity("Debe seleccionar un deporte");
    }
  }

}


// 🔥 ARRANQUE
addEventListener("load", iniciar);