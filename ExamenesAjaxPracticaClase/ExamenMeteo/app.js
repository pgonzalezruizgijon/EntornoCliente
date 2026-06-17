addEventListener('load', cargarPrevision, false);

function cargarPrevision(e) {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/prevision.php', true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("listaDias").innerHTML = "Tiempo de espera vencido";
    };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let prevision = JSON.parse(xhr.responseText);
                console.log(prevision);
                dibujarPrevision(prevision);
            } catch (ex) {
                document.getElementById("listaDias").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }

        }
     }

     xhr.send();

}

function dibujarPrevision(prevision) {
        
        const listaDias = document.getElementById("listaDias");
        for (let i = 0; i < prevision.length; i++) {
            let card = `
                <div class="dia-card">
                    <div class="dia-top">
                      <div>${prevision[i].fecha}</div><img src="images/${prevision[i].resumen.icono}.png" alt="${prevision[i].resumen.icono}">
                    </div>
                    <div>${prevision[i].resumen.max} / ${prevision[i].resumen.min}</div>
                    <div class="dia-top">
                      <div>${prevision[i].ciudad}</div>
                      <input type="button" onclick="fetchResumenHoras('${prevision[i].fecha}')" value="Ver Horas">
                    </div>
                </div>`;
            console.log(card);
            listaDias.insertAdjacentHTML("beforeend", card);
            // console.log(boton);
        }

}


function fetchResumenHoras(fecha) {
    
    const xhr = new XMLHttpRequest();
     xhr.open('GET', 'api/tramos.php?fecha=' + encodeURIComponent(fecha), true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg
    xhr.ontimeout = () => {
        document.getElementById("contenedorTabla").innerHTML = "Tiempo de espera vencido";
    };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let tramo = JSON.parse(xhr.responseText);
                console.log(tramo);
                dibujarTablaHoras(tramo);
            } catch (ex) {
                document.getElementById("contenedorTabla").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }

        }
     }

     xhr.send();

}

function dibujarTablaHoras(tramos) {
    const contenedorTabla = document.getElementById("contenedorTabla");

    let tabla = `
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

    for (let i = 0; i < tramos.length; i++) {
        tabla += `
            <tr>
                <td>${tramos[i].hora}</td>
                <td>
                    <span class="prevision-box">
                        <span>${tramos[i].prevision.temperatura}º</span>
                        <img src="images/${tramos[i].prevision.icono}.png" alt="${tramos[i].icono}">
                    </span>
                </td>
                <td>
                    <img src="images/${tramos[i].viento}.png" alt="${tramos[i].viento}" class="viento-img">
                </td>
                <td>${tramos[i].velocidad} km/h</td>
                <td>${tramos[i].lluvias } mm</td>
            </tr>
        `;
    }

    tabla += `
            </tbody>
        </table>
    `;

    contenedorTabla.innerHTML = tabla;
}