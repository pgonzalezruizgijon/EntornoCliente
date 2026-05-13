// ===============================
// ARRANQUE DE LA APLICACIÓN
// ===============================

// Cuando la página cargue, se ejecuta iniciar()
addEventListener("load", iniciar);

function iniciar() {
  // Al cargar la página mostramos el resumen de días
  cargarResumenDias();
}


// ===============================
// 1. CARGAR RESUMEN DE DÍAS
// ===============================

function cargarResumenDias() {
  let xhr = new XMLHttpRequest();

  // Petición AJAX al PHP que devuelve JSON con los días
  xhr.open("GET", "api/prevision.php", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {

      // Convertimos el texto JSON en array de objetos JS
      let dias = JSON.parse(xhr.responseText);

      // Pintamos las cards de los días
      pintarResumenDias(dias);
    }
  };

  xhr.send();
}


// ===============================
// 2. PINTAR CARDS DE DÍAS
// ===============================

function pintarResumenDias(dias) {
  let html = "";

  for (let i = 0; i < dias.length; i++) {

    html += `
      <div class="dia-card">
        <div class="dia-top">
          <div>${dias[i].fecha}</div>
          <img src="images/${dias[i].resumen.icono}.png" alt="${dias[i].resumen.icono}">
        </div>

        <div>${dias[i].resumen.max}º / ${dias[i].resumen.min}º</div>

        <div class="dia-top">
          <div>${dias[i].ciudad}</div>
          <input type="button" value="Ver Horas" onclick="cargarDetalleHoras('${dias[i].fecha}')">
        </div>
      </div>
    `;
  }

  document.querySelector("#listaDias").innerHTML = html;
}


// ===============================
// 3. CARGAR DETALLE DE HORAS
// ===============================

function cargarDetalleHoras(fecha) {
  let xhr = new XMLHttpRequest();

  // Enviamos la fecha por GET al PHP
  let url = "api/tramos.php?fecha=" + fecha;

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {

      // El PHP devuelve JSON con los tramos horarios
      let horas = JSON.parse(xhr.responseText);

      // Cambiamos el título
      document.querySelector("#tituloDia").innerHTML = "Detalle horas: " + fecha;

      // Pintamos la tabla
      pintarDetalleHoras(horas);
    }
  };

  xhr.send();
}


// ===============================
// 4. PINTAR TABLA DE HORAS
// ===============================

function pintarDetalleHoras(horas) {
  let html = `
    <table>
      <thead>
        <tr>
          <th>Horas</th>
          <th>Previsión</th>
          <th>Viento</th>
          <th>Velocidad</th>
          <th>Lluvias</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < horas.length; i++) {

    html += `
      <tr>
        <td>${horas[i].hora}</td>

        <td>
          <span class="prevision-box">
            <span>${horas[i].prevision.temperatura}º</span>
            <img src="images/${horas[i].prevision.icono}.png" alt="${horas[i].prevision.icono}">
          </span>
        </td>

        <td>
          <img src="images/${horas[i].viento}.png" alt="${horas[i].viento}" class="viento-img">
        </td>

        <td>${horas[i].velocidad} km/h</td>

        <td>${horas[i].lluvias} mm</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  document.querySelector("#contenedorTabla").innerHTML = html;
}