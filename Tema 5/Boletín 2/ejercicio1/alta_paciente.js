// alta_paciente.js

window.onload = function () {
  const formulario = document.forms["miformulario"];
  const fechaNacimiento = document.getElementById("mifecha");
  const fumador = document.getElementById("mifumador");
  const cigarrillos = document.getElementById("micigarrillos");

  // --- Habilitar/deshabilitar desplegable cigarrillos ---
  fumador.addEventListener("change", function () {
    if (fumador.checked) {
      cigarrillos.disabled = false;
    } else {
      cigarrillos.disabled = true;
      cigarrillos.value = "0"; // volver a "Seleccionar"
    }
  });

  // --- Validaciones al enviar ---
  formulario.addEventListener("submit", function (event) {
    let valido = true;
    let mensajesError = [];

    // Validar mayor de edad
    const fecha = new Date(fechaNacimiento.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    const dia = hoy.getDate() - fecha.getDate();

    let edadReal = edad;
    if (mes < 0 || (mes === 0 && dia < 0)) {
      edadReal--;
    }

    if (edadReal < 18) {
      valido = false;
      mensajesError.push("El paciente debe ser mayor de edad.");
    }

    // Validar fumador y cigarrillos
    if (fumador.checked && cigarrillos.value === "0") {
      valido = false;
      mensajesError.push("Debe seleccionar el número de cigarrillos.");
    }

    // Si hay errores, evitar envío y mostrarlos
    if (!valido) {
      event.preventDefault();
      alert(mensajesError.join("\n")); // puedes sustituir alert por mensajes en pantalla si prefieres
    }
  });
};