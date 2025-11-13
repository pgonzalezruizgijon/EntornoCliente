const encabezados = ["Horas", "Previsión", "Viento", "Velocidad", "Lluvias"];
const datos = [
  {
    hora: "19:00",
    prevision: { temperatura: "33º", icono: "dia" },
    viento: "oeste",
    velocidad: "15 km/h",
    lluvias: "0 mm"
  },
  {
    hora: "20:00",
    prevision: { temperatura: "30º", icono: "dia" },
    viento: "norte",
    velocidad: "5 km/h",
    lluvias: "10 mm"
  },
  {
    hora: "21:00",
    prevision: { temperatura: "28º", icono: "noche" },
    viento: "sur",
    velocidad: "0 km/h",
    lluvias: "5 mm"
  }
];

// Mapas para iconos de previsión y viento
const iconosPrevision = {
  dia: "img/sol.png",
  noche: "img/luna.png"
};
const iconosViento = {
  norte: "img/norte.png",
  sur: "img/sur.png",
  este: "img/este.png",
  oeste: "img/oeste.png"
};

function crearTabla() {
  const tabla = document.getElementById("prevision");
  // Encabezados
  const thead = tabla.querySelector("thead");
  const encabezadoRow = document.createElement("tr");
  encabezados.forEach(titulo => {
    const th = document.createElement("th");
    th.innerText = titulo;
    th.style.fontWeight = "bold";
    encabezadoRow.appendChild(th);
  });
  thead.appendChild(encabezadoRow);

  // Filas de datos
  const tbody = tabla.querySelector("tbody");
  datos.forEach(obj => {
    const fila = document.createElement("tr");
    // Horas (negrita)
    const tdHora = document.createElement("td");
    tdHora.innerText = obj.hora;
    tdHora.style.fontWeight = "bold";
    fila.appendChild(tdHora);

    // Previsión (icono + temperatura)
    const tdPrevision = document.createElement("td");
    const imgPrevision = document.createElement("img");
    imgPrevision.src = iconosPrevision[obj.prevision.icono];
    imgPrevision.alt = obj.prevision.icono;
    imgPrevision.style.height = "30px";
    imgPrevision.style.verticalAlign = "middle";
    tdPrevision.appendChild(imgPrevision);
    tdPrevision.innerHTML += " " + obj.prevision.temperatura;
    fila.appendChild(tdPrevision);

    // Viento (icono)
    const tdViento = document.createElement("td");
    const imgViento = document.createElement("img");
    imgViento.src = iconosViento[obj.viento];
    imgViento.alt = obj.viento;
    imgViento.style.height = "25px";
    imgViento.style.verticalAlign = "middle";
    tdViento.appendChild(imgViento);
    fila.appendChild(tdViento);

    // Velocidad
    const tdVel = document.createElement("td");
    tdVel.innerText = obj.velocidad;
    fila.appendChild(tdVel);

    // Lluvias (negrita y azul)
    const tdLluvias = document.createElement("td");
    tdLluvias.innerText = obj.lluvias;
    tdLluvias.style.fontWeight = "bold";
    tdLluvias.style.color = "blue";
    fila.appendChild(tdLluvias);

    tbody.appendChild(fila);
  });
}
document.addEventListener("DOMContentLoaded", crearTabla);
