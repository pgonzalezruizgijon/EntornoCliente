addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('formulario')
        .addEventListener('submit', cargarResultados, false);
}

function cargarResultados(e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const apiKey = "d44e688d";

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`;
    if (tipo !== "") {
        url += `&type=${tipo}`;
    }

    const xhr = new XMLHttpRequest();

    xhr.onloadstart = () => {
        document.getElementById("estado").innerHTML = "Cargando...";
        document.getElementById("resultados").innerHTML = "";
    };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let datos = JSON.parse(xhr.responseText);
                mostrarResultados(datos);
            } catch (ex) {
                document.getElementById("estado").innerHTML =
                    "Error al parsear el JSON";
            }
        } else {
            document.getElementById("estado").innerHTML =
                "Error en la petición AJAX";
        }
    };

    xhr.timeout = 3000;
    xhr.ontimeout = () => {
        document.getElementById("estado").innerHTML =
            "Tiempo de espera agotado";
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function mostrarResultados(datos) {
    const tbody = document.getElementById("resultados");
    tbody.innerHTML = "";

    if (datos.Response === "False") {
        document.getElementById("estado").innerHTML = datos.Error;
        return;
    }

    document.getElementById("estado").innerHTML =
        "Resultados encontrados: " + datos.Search.length;

    for (let i = 0; i < datos.Search.length; i++) {
        let item = datos.Search[i];

        let fila = "<tr>";
        fila += "<td>" + item.Title + "</td>";
        fila += "<td>" + item.Type + "</td>";
        fila += "<td>" + item.Year + "</td>";
        fila += "<td>";

        if (item.Poster !== "N/A") {
            fila += `<img src="${item.Poster}">`;
        } else {
            fila += "Sin imagen";
        }

        fila += "</td></tr>";

        tbody.innerHTML += fila;
    }
}
