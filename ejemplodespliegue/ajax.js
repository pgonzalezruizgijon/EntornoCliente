addEventListener('load', inicializarEventos, false);


function inicializarEventos() {
    document.getElementById('btn-ajax-json').addEventListener('click', cargarPerifericosJSON);
    document.getElementById('btn-ajax-xml').addEventListener('click', cargarPerifericosXML);
}

function cargarPerifericosJSON(e) {
    const resultados = document.getElementById("resultados");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'perifericos_json.php', true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg

    // Si ha vencido el tiempo de espera máximo se muestra el texto pertinente
    xhr.ontimeout = () => { resultados.textContent = "Tiempo de espera vencido"; };

    // En el arranque de la petición AJAX mostramos un texto te Cargando
    xhr.onloadstart = () => { resultados.textContent = "Cargando..."; };

    // Mensaje a mostrar si se produce un error en la red
    xhr.onerror = () => { resultados.textContent = "Error de red"; };

    // Mensaje a mostrar si se cancela la petición
    xhr.onabort = () => { resultados.textContent = "Solicitud cancelada"; };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            let perifericos = json2arrayPerifericos(xhr.responseText);
            if (perifericos == null) {
                resultados.textContent = "Error al parsear el JSON";
                return;
            }
            crearTablaPerifericos(perifericos);
            resultados.textContent = "";
        } else {
            resultados.textContent = `Error al cargar los datos (HTTP ${xhr.status})`;
        }
    };

    // Enviamos la petición AJAX al servidor
    xhr.send();
}


function cargarPerifericosXML(e) {
    const resultados = document.getElementById("resultados");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'perifericos_xml.php', true);
    xhr.timeout = 3000; // Tiempo máximo de espera del API 3sg

    // Si ha vencido el tiempo de espera máximo se muestra el texto pertinente
    xhr.ontimeout = () => { resultados.textContent = "Tiempo de espera vencido"; };

    // En el arranque de la petición AJAX mostramos un texto te Cargando
    xhr.onloadstart = () => { resultados.textContent = "Cargando..."; };

    // Mensaje a mostrar si se produce un error en la red
    xhr.onerror = () => { resultados.textContent = "Error de red"; };

    // Mensaje a mostrar si se cancela la petición
    xhr.onabort = () => { resultados.textContent = "Solicitud cancelada"; };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
           let perifericos = xml2arrayPerifericos(xhr.responseXML);
            if (perifericos == null) {
                resultados.textContent = "Error al parsear el XML";
                return;
            }
            crearTablaPerifericos(perifericos);
            resultados.textContent = "";
        } else {
            resultados.textContent = `Error al cargar los datos (HTTP ${xhr.status})`;
        }

    };

    // Enviamos la petición AJAX al servidor
    xhr.send();
}


// Convierte la repuesta del servidor (json) a un array de objetos Periferico
function json2arrayPerifericos(json) {
    let jsonParseado;
    try {
        // El parseo de JSON podría fallar si no tiene el formato esperado
        jsonParseado = JSON.parse(json);
    } catch (error) {
        return null;
    }
    let perifericos = [];
    jsonParseado.forEach(
        (item) => {
            perifericos.push(new Periferico(item.codigo, item.descripcion, item.precio));
        }
    );
    return perifericos;
}

// Convierte la repuesta del servidor (xml) a un array de objetos Periferico
function xml2arrayPerifericos(xml) {
    let tagPerifericos = xml.getElementsByTagName("periferico");
    let perifericos = [];
    for (let i = 0; i < tagPerifericos.length; i++) {
        let codigo = tagPerifericos[i].getElementsByTagName("codigo")[0].textContent;
        let descripcion = tagPerifericos[i].getElementsByTagName("descripcion")[0].textContent;
        let precio = tagPerifericos[i].getElementsByTagName("precio")[0].textContent;
        perifericos.push(new Periferico(codigo, descripcion, precio));
    }
    return perifericos;
}




// Función común JSON/XML para cargar los periféricos
// Parámetros:
//    -perifericos: array de objetos Periferico
function crearTablaPerifericos(perifericos) {
    let bodyTabla = document.querySelector("#tabla-perifericos > tbody");
    bodyTabla.innerHTML = ""; // Borramos el contenido de la tabla
    let filaTabla = "";
    perifericos.forEach(
        (item) => {
            filaTabla = "";
            filaTabla += `<tr>`;
            filaTabla += `<td>${item.id}</td><td>${item.description}</td><td>${item.price}</td>`;
            filaTabla += `</tr>`;
            bodyTabla.insertAdjacentHTML("beforeend", filaTabla)
        }
    );
}

